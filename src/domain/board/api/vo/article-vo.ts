import { MemberSummaryDto } from "../../../member/dto/MemberDto"
import { CategorySummaryDto } from "../../dto/CategoryDto"

export interface ArticleCreateRequestVo {
  title : string
  contents : string
  category : string
}

export interface ArticleModifyRequestVo extends ArticleCreateRequestVo {

}

export interface ArticleSummaryVo {
    id: number,
    title: string,
    created_at: Date,
    author: MemberSummaryDto,
    category: CategorySummaryDto,
    view_count: number
    comment_comment: number
}

export interface ArticleVo extends ArticleSummaryVo {
  contents: string
}