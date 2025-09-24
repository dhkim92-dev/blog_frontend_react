import { BaseResponse } from "../../../common/api/schema/pagination"
import { MemberSummaryDto } from "../../member/dto/MemberDto"
import { CategoryDto } from "./CategoryDto"

interface ArticleDto extends BaseResponse{
  id : string,
  title : string,
  writer : MemberSummaryDto,
  content : string,
  category : CategoryDto,
  createdAt : Date,
  viewCount : number,
  commentCount : number,
  likeCount: number
}

export type {ArticleDto}