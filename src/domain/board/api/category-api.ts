import axiosCustom from "../../../common/api/axios-custom";
import { CursorList } from "../../../common/api/schema/pagination";
import { CategoryDto } from "../dto/CategoryDto";

const env = process.env

interface CreateCategoryRequest {
  name: string
}


export async function getCategories(): Promise<CursorList<CategoryDto>> {
  try {
    const response = await axiosCustom.get(env.REACT_APP_API_CATEGORY)
    const data = response.data
    return data
  }catch(error) {
    throw error
  }
}

export async function createCategory(name: string): Promise<CategoryDto> {
  try {
    const vo: CreateCategoryRequest = {
      name: name
    }
    const response = await axiosCustom.post(env.REACT_APP_API_CATEGORY_COMMAND, vo)
    return response.data
  }catch(error) {
    throw error
  }
}

export async function updateCategory(id: number, name: string): Promise<CategoryDto> {
  try {
    const req: CreateCategoryRequest = {
      name: name
    }
    const response = await axiosCustom.put(env.REACT_APP_API_CATEGORY_COMMAND + "/" + id, req)
    return response.data
  }catch(error) {
    throw error
  }
}