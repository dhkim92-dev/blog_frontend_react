import { CategorySelectEvent } from "../../../../../common/event/Event";
import defaultEventManager from "../../../../../common/event/EventQueue";
import { CategoryDto } from "../../../dto/CategoryDto";
import { Category } from "../../../model/Category";

interface CategoryTapProps {
  value : Category,
  categories : Category[],
  onSelect: (name: string)=>void
}

const CategoryTab : React.FC<CategoryTapProps> 
  = ({value, categories, onSelect} : CategoryTapProps) => {

  return (
    <span>
      <select name = 'Category-Select' value = {value.id} onChange={(e)=>{onSelect(e.target.value)}}>
          <option value = 'article-editor-category-default'>--Select Category--</option>
          {categories.map((item, index) => {
            return (
              <option key = {`article-editor-category-${item.id}`} value = {item.id}> {item.name} </option>
            )
          })}
      </select>
    </span>
  )
}

export default CategoryTab