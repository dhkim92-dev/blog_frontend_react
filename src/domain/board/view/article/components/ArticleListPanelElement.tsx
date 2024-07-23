import moment from "moment"
import { Article } from "../../../model/Article"

interface ArticleListPanelElementProps {
  article : Article
  onClick : (id : string)=>void
}

const ArticleListPanelElement : React.FC<ArticleListPanelElementProps> 
  = ({article,  onClick} : ArticleListPanelElementProps) => {

  return (
    <div className="ArticlesListElement" onClick={()=>onClick(article.id)}>
      <h4>{article.title}</h4>
      <div style = {{display:"flex"}}>
        <h6> {article.category.name} </h6>
        <h6 style = {{fontFamily: 'cursive', marginLeft : 'auto', marginRight : '5px'}}> by {article.author.nickname} </h6>
        <h6> | </h6>
        <h6 style = {{marginLeft: '5px'}}>{moment(article.createdAt).format('YYYY. MM. DD')}</h6>
      </div>
      {/* <hr/> */}
    </div>
  )
}

export default ArticleListPanelElement
