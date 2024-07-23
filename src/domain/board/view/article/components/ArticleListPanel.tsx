import ArticleListPanelElement from "./ArticleListPanelElement"
import '../css/article.css'
import { ArticleSummaryDto } from "../../../dto/ArticleDto"
import useAuthentication from "../../../../../common/hooks/useAuthenticated"
import { Category } from "../../../model/Category"
import { Article } from "../../../model/Article"
import { useEffect } from "react"

type ArticleListPanelProps = {
  articles : Article[],
  category : Category,
  onClickItem : (id : string) => void,
  intersectArea : React.Dispatch<React.SetStateAction<HTMLElement | null | undefined>>,
  onClickAddItem : () => void
  isLoading : boolean,
  isEnd : boolean
}

type ArticleListLoadingBarProps = {
  intersectArea : React.Dispatch<React.SetStateAction<HTMLElement | null | undefined>>
  isLoading : boolean
  isEnd : boolean
}

const ArticleListLoadingBar : React.FC<ArticleListLoadingBarProps> = ({intersectArea, isLoading, isEnd} : ArticleListLoadingBarProps) => {
  return (
    <div style = {{textAlign : 'center', borderRadius: '15px', backgroundColor : 'lightgray'}} 
      hidden = {isLoading} ref = {intersectArea}>
      <p style = {{color:'light', fontSize:'30px', verticalAlign:'middle'}}> Loading... </p>
    </div>
  )
}


const ArticleListPanel : React.FC<ArticleListPanelProps> = ({
  articles, category, onClickItem, intersectArea, onClickAddItem, isLoading, isEnd
} : ArticleListPanelProps)=> {
  const {isAdmin} = useAuthentication()

  return (
      <div className = 'ArticlesList'>
        <div className = 'flexdiv'>
          <div className = 'left'>
            <h3>{category.name}</h3>
          </div>
          <div className='right'>
            <div className = 'selectable'>
              <h3 className='add-item' onClick = {()=>onClickAddItem()} hidden={!isAdmin()}>  + </h3>
            </div>
          </div>
        </div>
          <hr/>
          {
            articles?.map((data, index)=>{
              return (
                <ArticleListPanelElement key={`article-list-item-${index}`} article = {data} onClick={onClickItem}/>
              )
            })
          }
          {
            !isEnd ? <ArticleListLoadingBar isEnd = {isEnd} isLoading = {isLoading} intersectArea={intersectArea}/> : null
          }
          <hr/>
      </div>
  )
}

export {ArticleListPanel}