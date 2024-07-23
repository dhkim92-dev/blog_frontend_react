export interface PageableElement {
    name: string
    value: string
}

export interface CursorPageable {
    pivot: PageableElement
    direction: string
    count: number
}

export interface CursorList<T> {
    count: number
    data: T[]
    next: string|null
}
