export interface Event {
    name: string
}

export const CategorySelectEvent: Event = {
    name: "CategorySelectEvent"
}

export const ArticleSelectEvent: Event = {
    name: "ArticleSelectEvent"
}

export interface CategorySelectEventParameter {
    id: number,
    name: string
}