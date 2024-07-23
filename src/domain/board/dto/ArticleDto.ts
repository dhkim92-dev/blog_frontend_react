import { MemberSummaryDto } from "../../member/dto/MemberDto"
import { CategorySummaryDto } from "./CategoryDto"

interface ArticleSummaryDto {
  id : string
  title : string
  author : MemberSummaryDto
  category : CategorySummaryDto
  createdAt : Date
  viewCount : number
  commentCount : number
}

interface ArticleDto extends ArticleSummaryDto{
  contents : string
}

export type {ArticleSummaryDto, ArticleDto}