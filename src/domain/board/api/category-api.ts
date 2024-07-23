import axiosCustom from "../../../common/api/axios-custom";
import { CategoryDto } from "../dto/CategoryDto";

const env = process.env

interface CategoryCreateRequestVo {
  name: string
}

interface CategoryModifyRequestVo extends CategoryCreateRequestVo {

}

export async function getCategories(): Promise<CategoryDto[]> {
  try {
    const response = await axiosCustom.get(env.REACT_APP_API_CATEGORY)
    const data = response.data

    if(data.count === 0) {
      return []
    }

    const categories: CategoryDto[] = Array.from(data.data)
    const listData = data.data

    for(var i = 0 ; i < data.count ; i++) {
      categories[i] = {
        id : listData[i].id,
        name: listData[i].name,
        count: listData[i].count
      }
    }

    return categories
  }catch(error) {
    throw error
  }
}

export async function createCategory(name: string): Promise<CategoryDto> {
  try {
    const vo: CategoryCreateRequestVo = {
      name: name
    }

    const response = await axiosCustom.post(env.REACT_APP_API_CATEGORY, vo)
    const category = response.data
    return {
      id: category.id,
      name: category.name,
      count: category.count
    }
  }catch(error) {
    throw error
  }
}

export async function changeCategoryName(id: number, name: string): Promise<CategoryDto> {
  try {
    const vo: CategoryModifyRequestVo = {
      name: name
    }

    const response = await axiosCustom.patch(env.REACT_APP_API_CATEGORY + "/" + id,vo)
    const category = response.data

    return {
      id: category.id,
      name: category.name,
      count: category.count
    }
  }catch(error) {
    throw error
  }
}