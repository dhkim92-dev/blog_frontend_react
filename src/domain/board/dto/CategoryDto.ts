interface CategorySummaryDto {
  id : number
  name : string
}

interface CategoryDto extends CategorySummaryDto {
  count : number
}

export type {CategoryDto, CategorySummaryDto}