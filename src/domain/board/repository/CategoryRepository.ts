import { updateCategory, createCategory, getCategories } from "../api/category-api";
import { Category } from "../model/Category";

class CategoryRepository {

  async getCategories(): Promise<Category[]> {
    try {
      return (await getCategories()).items.map(v => new Category(v.id, v.name, v.count))
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
      const dto = await updateCategory(category.id, category.name)
      return new Category(dto.id, dto.name, dto.count)
    }catch(error) {
      throw error
    }
  }
}
const categoryRepository = new CategoryRepository()

export default categoryRepository

export type {CategoryRepository}