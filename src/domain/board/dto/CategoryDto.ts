import { BaseResponse } from "../../../common/api/schema/pagination"

interface CategoryDto extends BaseResponse {
  id: number,
  name: string,
  count : number
}

export type {CategoryDto}