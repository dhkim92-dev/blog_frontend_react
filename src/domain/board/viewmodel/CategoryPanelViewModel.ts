
import { useEffect, useRef, useState } from "react"
import { CategorySelectEvent, CategorySelectEventParameter } from "../../../common/event/Event"
import defaultEventManager from "../../../common/event/EventQueue"
import categoryRepository from "../repository/CategoryRepository"
import { Category } from "../model/Category"

const useCategoryPanelViewModel = () => {
  
  const [toggle, setToggle] = useState<boolean>(false)
  const [formHidden, setFormHidden] = useState<boolean>(true)
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(()=>{
    loadCategories()
  }, [])

  const loadCategories = () => {
    categoryRepository.getCategories()
    .then(res => {
      setCategories([...res])
    })
    .catch(err=>{
      alert("카테고리 목록 불러오기 실패")
    })
  }

  const onClickAddCategoryButton = () => {
    setFormHidden(!formHidden)
  }

  const onClickCategoryListItem = (id: number, name: string) => {
    console.log("category item selected : ", id, name)
    defaultEventManager.notify(CategorySelectEvent, {
      id: id,
      name: name
    })
  }

  const onSubmitCategory = (value: string) => {
    // console.log("onSubmitCategory", value)
    categoryRepository.save(new Category(0, value, 0))
    .then((res)=>{
      setCategories([...categories, res])
      setFormHidden(true)
    })
    .catch((err)=>{
      alert("카테고리 추가 실패")
      console.error(err)
    })
  }

  return {
    categories: categories,
    toggle: toggle,
    setToggle: setToggle,
    formHidden: formHidden,
    setFormHidden: setFormHidden,
    onClickCategoryListItem : onClickCategoryListItem,
    onClickAddCategoryButton: onClickAddCategoryButton,
    onSubmitCategory : onSubmitCategory
  }
}

export default useCategoryPanelViewModel
export type CategoryPanelViewModel = ReturnType<typeof useCategoryPanelViewModel>