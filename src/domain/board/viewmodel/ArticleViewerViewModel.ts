import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import articleRepository from "../repository/ArticleRepository"
import { Article } from "../model/Article"


const useArticleViewerViewModel = () => {
  const [article, setArticle] = useState<Article>()
  const [params] = useSearchParams()
  const navigate = useNavigate()
  
  useEffect(()=>{
    articleRepository.getArticle(params.get('id')!)
    .then((res) => {
      setArticle(res)
    })
    .catch((err) => console.error('게시글을 불러오지 못했습니다.'))
  },[])

  const onClickDeleteButton = () => {
    if(window.confirm("게시글이 영구적으로 삭제됩니다.")){
      articleRepository.deleteById(article?.id!)
      .then((res) => {
        navigate('/articles')
      })
      .catch((err)=>{
        console.log(err)
        alert("게시글 삭제 실패")
      })
    } else {
      console.log('cancel')
    }
  }

  const onClickEditButton = () => {
    navigate(`/articles/edit?id=${params.get('id')!}`)
  }

  return {
    article : article,
    onClickEditButton : onClickEditButton,
    onClickDeleteButton: onClickDeleteButton
  }
}

export type ArticleViewViewModel = ReturnType<typeof useArticleViewerViewModel>

export default useArticleViewerViewModel
