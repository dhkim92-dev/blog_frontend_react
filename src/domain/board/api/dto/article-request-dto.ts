import { MemberSummaryDto } from "../../../member/dto/MemberDto"
import { CategoryDto } from "../../dto/CategoryDto"

export interface CreateArticleRequest {
  title : string
  content : string
  categoryId : number 
}

export interface UpdateArticleRequest extends CreateArticleRequest {}

export interface CreateArticleResponse {
  id: string
}