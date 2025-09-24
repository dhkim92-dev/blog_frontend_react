export interface CursorList<T> extends BaseResponse{
    count: number
    items: T[]
}

export interface Href {
    href: string|null
}

export interface BaseResponse {
    // _links: Map<string, Href>
    _links: { [key: string]: Href }  // Map 대신 일반 객체
}