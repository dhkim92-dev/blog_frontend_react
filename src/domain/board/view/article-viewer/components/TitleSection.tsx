import moment from 'moment'
import '../css/article-viewer.css'
import useAuthentication from '../../../../../common/hooks/useAuthenticated'
import { Article } from '../../../model/Article'

interface TitleSectionProps {
  article: Article|undefined
  onEdit : ()=>void
  onDelete : ()=>void
}


const TitleSection : React.FC<TitleSectionProps> = ({
  article, onEdit, onDelete
} : TitleSectionProps) =>{
  const {role} =  useAuthentication()
  return (
    <div className = 'TitleSection'>
      <div className = 'TitleSectionTop'>
        <span> {article?.category.name} </span>
        <div hidden = {role!='ROLE_ADMIN'}>
          <button onClick = {()=>onEdit()}> 수정 </button>
          <span> | </span>
          <button onClick = {()=>onDelete()}> 삭제 </button>
        </div>
      </div>
      <h1> {article?.title} </h1>
      <div className = 'TitleSectionBottom'>
        <div>
        <h6 className = 'author'> by {article?.author.nickname} </h6> 
        <h5>·</h5> 
        <h6>{moment(article?.createdAt).format("YY년 MM월 DD일 HH:mm:ss")}</h6>
        </div>
      </div>
    </div>
  )
}

export type {TitleSectionProps}
export default TitleSection