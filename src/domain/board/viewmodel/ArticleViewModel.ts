import { useEffect, useRef, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"
import useToggle from "../../../common/hooks/useToggle"
import { QueryStringBuilder, parseQueries } from "../../../common/utility/URLBuilder"
import useIntersectionObserver from "../../../common/hooks/useIntersectionObserver"
import { Subscriber } from "../../../common/event/pubsub"
import { CategorySelectEvent, CategorySelectEventParameter } from "../../../common/event/Event"
import defaultEventManager from "../../../common/event/EventQueue"
import { Article } from "../model/Article"
import articleRepository from "../repository/ArticleRepository"
import { Category } from "../model/Category"
export type ArticleViewModel = ReturnType<typeof useArticleViewModel>

interface Cursor {
  categoryId? : number
  createdAt? : string
  direction? : string
  url? :string | null
}

function cursorFromUrl(url : string | null, callback : React.Dispatch<Cursor | null>) {
  const cursor = parseQueries<Cursor>(url)
  cursor ? callback({...cursor, url: url}) : callback(null)
} 

const useArticleViewModel = () => {
  
  const [category, setCategory] = useState(new Category(0, "All", 0)) // 현재 선택한 카테고리
  const navigate = useNavigate() // URL 이동용
  const [articles, setArticles] = useState<Article[]>([])
  const [next, setNext] = useState<string|null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isEnd, setIsEnd] = useState<boolean>(false)

  const categorySelectEventListener: Subscriber = {
    update(event, data) {
      // console.log("[ArticleViewModel]::categorySelectEventListner update called.")
      const eventParameter = data as CategorySelectEventParameter
      setCategory((previousCategory)=>{
        if(previousCategory.id === eventParameter.id) {
          return previousCategory
        }
        return new Category(eventParameter.id, eventParameter.name, 0)
      })
    }
  }

  const cursorCallback = (next: string | null) => {
    setNext((prev)=> {
      return next
    })
  }

  useEffect(()=>{
    defaultEventManager.subscribe(CategorySelectEvent, categorySelectEventListener)
    return () => {
      defaultEventManager.unsubscribe(CategorySelectEvent, categorySelectEventListener)
    }
  }, [])

  useEffect(()=>{
    loadArticles(category.id)
  }, [category])

  useEffect(()=>{
    // console.log("next changed : " + next)
    if(next===null) {
      setIsEnd(true)
    }else {
      setIsEnd(false)
    }
  }, [next])

  useEffect(()=>{
    // console.log("is end = " + isEnd)
  },[isEnd])

  const onIntersect : IntersectionObserverCallback = async ([entry], observer) => {
    if(entry.isIntersecting && !isLoading) {
      observer.unobserve(entry.target)
      if(!isEnd) {
        setIsLoading(false)
        loadNextArticles()
        // setIsLoading(true)
      }
      observer.unobserve(entry.target)
    }
  }
  const { setTarget } = useIntersectionObserver({onIntersect}) 

  const loadArticles = (categoryId: number) => {
    articleRepository.getArticles(category.id, cursorCallback)
    .then((res) => {
      setArticles((prev)=>[...res])
      setIsLoading(false)
    })
    .catch((err) => alert("게시물 목록을 불러오는데 실패하였습니다."))
  }

  const loadNextArticles = () => {
    articleRepository.getArticlesByUrl(next, cursorCallback)
    .then((res)=>setArticles([...articles, ...res]))
    .catch((err)=>alert("게시물 목록을 불러오는데 실패했습니다."))
  }

  useEffect(()=>{
    loadArticles(category.id)
  },[])

  const onClickArticleListItem = (id : string) => {
    navigate(`/articles/view?id=${id}`)
  }

  const onClickAddArticleButton = () => {
    navigate('/articles/edit')
  }

  return {
    articles : articles,
    category : category,
    isLoading : isLoading,
    isEnd : isEnd,
    intersectArea : setTarget,
    onClickAddArticleButton : onClickAddArticleButton,
    onClickArticleListItem : onClickArticleListItem,
  }
}

export default useArticleViewModel
