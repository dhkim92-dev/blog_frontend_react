import useAuthentication from "../../../../../common/hooks/useAuthenticated"
import { Nav, Navbar } from "react-bootstrap"
import { CategoryListTitle } from "./CategoryListTitle"
import { CategoryListPanelElement } from "./CategoryListPanelElement"
import useCategoryPanelViewModel from "../../../viewmodel/CategoryPanelViewModel"

const CategoryListPanel : React.FC = () => {
	const {isAdmin} = useAuthentication()
	const vm = useCategoryPanelViewModel()

  return (
		<div className='CategoryList'>
			<Navbar bg='white' variant='light' expand='md' expanded={vm.toggle} onToggle = {()=>vm.setToggle(!vm.toggle)}>
				<Navbar.Toggle  style={{'width': '100%'}} aria-controls="category-navgroup"/>
					<Navbar.Collapse id='category-navgroup' className='flex-column'>
					<Nav.Item>
						<CategoryListTitle 
              formHidden={vm.formHidden}
              onSubmit={vm.onSubmitCategory} 
              onClickItem = {vm.onClickCategoryListItem} 
              onClickAddButton={vm.onClickAddCategoryButton}
            />
					</Nav.Item> 
					<hr/>
					{
						vm.categories.length >= 0 ? vm.categories.map((data, key)=>{
							return (
								<Nav.Item key = {`category-list-item-${key}`} 
								  onClick={()=>{vm.onClickCategoryListItem(data.id, data.name)}}>
								  <CategoryListPanelElement  id = {data.id} name = {data.name} count = {data.count}/>
								</Nav.Item>
							)
						}): null
					}
					<hr/>
					</Navbar.Collapse>
			</Navbar>
		 </div>
  )
}

export default CategoryListPanel