import { useEffect, useRef, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Category } from "../model/Category"
import { Editor } from "@toast-ui/react-editor"
import { Article } from "../model/Article"
import useAuthentication from "../../../common/hooks/useAuthenticated"
import categoryRepository from "../repository/CategoryRepository"
import articleRepository from "../repository/ArticleRepository"
import { uploadImage } from "../../file/api/file-api"

export type ArticleEditorInput = {
  id : string
  title : string
  contents : string
  category : string
};

function isInputComplete(title: string|undefined|null, 
    contents: string|undefined|null, 
    category: Category|undefined|null)
: boolean {
    if(title === undefined || title==="" || title===null) {
        return false;
    }

    if(contents === undefined || contents==="" || contents===null) {
        return false;
    }

    if(category?.id === 0 || category?.id === undefined || category===null) {
        return false;
    }

    return true;
};

const useArticleEditorViewModel = () => {
  const authentication = useAuthentication();
  const [params] = useSearchParams();
  const [categories, setCategories] = useState<Category[]>([]);
  const [article, setArticle] = useState<Article>(new Article(""));
  const navigate = useNavigate();
  const titleRef = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState<Category>(new Category(0, "", 0));
  const editorRef = useRef<Editor>(null);

  const loadCategories = () => {
    categoryRepository.getCategories()
    .then((res) => {
        setCategories([...res]);
    })
    .catch((err)=>{
        alert("카테고리 목록을 불러오지 못했습니다.");
    })
  }

  const loadArticle = () => {
    if(!params.has('id')) {
      return
    }

    articleRepository.getArticle(params.get('id')!)
    .then((res)=>{
      if(titleRef.current) {
          titleRef.current.value = res.title
      }
      editorRef.current?.getInstance().setMarkdown(res.contents)
      setArticle(res)
    })
    .catch((err)=>{
      alert("게시글을 불러오지 못했습니다.")
      navigate(-1)
    })
  }

  useEffect(() => {

    if(!authentication.isAdmin()) {
      alert("게시글 작성은 어드민 사용자만 가능합니다.");
      navigate(-1);
      return;
    }

    loadCategories()
    loadArticle()
  }, [])

  const onUploadImage = async (form : FormData) => {
    try{
      const data = await uploadImage(form)
      return data
    }catch(err){
      console.log(err)
      alert("Failed to upload image")
    }
  }

  const onSubmit = () => {
    const markdownContent = editorRef.current?.getInstance().getMarkdown() || ""
    // const category = getCategory(categories, category) || undefined
    const title = titleRef.current?.value

    if(!isInputComplete(title, markdownContent, category)) {
        alert("제목, 본문, 카테고리 중 한개가 입력되지 않았습니다.")
        return;
    }

    article.changeCategory(category)
    article.changeContents(markdownContent)
    article.changeTitle(title!)

    if(!params.has('id')) {
      articleRepository.save(article as Article)
      .then((res)=>{navigate(`/articles/view?id=${res.id}`)})
      .catch((err) => alert("게시글 등록 실패"))
    }else {
      articleRepository.modify(article as Article)
      .then((res)=>{navigate(`/articles/view?id=${res.id}`)})
      .catch((err) => {
        console.log(err)
        alert("게시글 수정 실패")
      })
    }
  }

  const onSelectCategory = (id: string) => {
    const changed = categories.find(category => category.id === parseInt(id))
    if(changed===undefined) return
    setCategory(new Category(changed.id, changed.name, changed.count))
  }

  return {
    article : article,
    categories : categories,
    editorRef: editorRef,
    category: category,
    titleRef: titleRef,
    onSelectCategory: onSelectCategory,
    onUploadImage : onUploadImage,
    onSubmit : onSubmit,
  }
}

export type ArticleEditorViewModel = ReturnType<typeof useArticleEditorViewModel>
export default useArticleEditorViewModel
