import { Category } from "../../../model/Category"

export type CategoryProps = {
	  id : number
	  name : string
	  count : number
}

const CategoryListPanelElement : React.FC<CategoryProps> = ({id, name, count} : CategoryProps)=>{
	return (
		<div className='CategoryListElement'>
			<p style = {{textAlign : 'center'}}>{name}({count})</p>
		</div>
	)
}

export {CategoryListPanelElement}