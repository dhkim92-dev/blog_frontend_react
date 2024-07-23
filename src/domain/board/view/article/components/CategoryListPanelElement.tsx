import { CategoryDto } from "../../../dto/CategoryDto"

const CategoryListPanelElement : React.FC<CategoryDto> = ({id, name, count} : CategoryDto)=>{
	return (
		<div className='CategoryListElement'>
			<p style = {{textAlign : 'center'}}>{name}({count})</p>
		</div>
	)
}

export {CategoryListPanelElement}