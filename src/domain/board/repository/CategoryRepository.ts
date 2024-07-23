import { changeCategoryName, createCategory, getCategories } from "../api/category-api";
import { Category } from "../model/Category";

class CategoryRepository {

  async getCategories(): Promise<Category[]> {
    try {
      const dtoList = await getCategories()
      return dtoList.map(dto=>new Category(dto.id, dto.name, dto.count))
    } catch(error) {
      throw error
    }
  }

  async save(category: Category): Promise<Category>{
    try {
      const dto = await createCategory(category.name)
      return new Category(dto.id, dto.name, dto.count)
    } catch(error) {
      throw error
    }
  }

  async modify(category: Category): Promise<Category> {
    try {
      const dto = await changeCategoryName(category.id, category.name)
      return new Category(dto.id, dto.name, dto.count)
    }catch(error) {
      throw error
    }
  }
}
const categoryRepository = new CategoryRepository()

export default categoryRepository

export type {CategoryRepository}