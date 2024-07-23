import { useRef, useState } from "react"
import { Form } from "react-bootstrap"
import useAuthentication from "../../../../../common/hooks/useAuthenticated"

export interface CategoryListTitleProps  {
  formHidden: boolean
  onClickItem : (id : number, name : string) => void
  onClickAddButton : () => void
  onSubmit : (name : string) => void
}

export interface CategorySummitFormProps {
  hidden : boolean, 
  onSubmit : (name : string) => void
}

export const CategorySummitForm : React.FC<CategorySummitFormProps> = ({hidden, onSubmit}) => {
  const ref = useRef<HTMLInputElement>(null)
  return (
    <div hidden = {hidden} style= {{margin: 'auto'}}>
      <hr/>
        <Form onSubmit = {(e) => {e.preventDefault(); onSubmit(ref.current!.value)}}>
          <Form.Control ref={ref} type="text" placeholder="Category Name" ></Form.Control>
        </Form>
    </div>
  )
}

export const CategoryListTitle : React.FC<CategoryListTitleProps> = ({formHidden, onClickItem, onClickAddButton, onSubmit} : CategoryListTitleProps) => {
  const {isAdmin} = useAuthentication()

  return (
    <div className = 'Title'>
      <div className = 'flex-container'>
        <div className = 'left'></div>
        <div className = 'center'>
          <h4 onClick = {()=>onClickItem(0, 'All')}>Category</h4>
        </div>
        <div className = 'right'>
          {
            isAdmin() ? <h5 onClick = {() => onClickAddButton()}> { formHidden ? '+' : '^' } </h5> : null
          }
        </div>
      </div>
      <CategorySummitForm hidden = {formHidden} onSubmit = {onSubmit}/>
    </div>
  )
}