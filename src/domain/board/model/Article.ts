import { Member } from "../../member/model/Member"
import { Category } from "./Category"

export class Article {
    
    private _id: string

    private _title: string

    private _createdAt: Date

    private _contents: string

    private _author: Member

    private _category: Category

    private _viewCount: number

    private _commentCount: number

    private _likeCount: number

    constructor(id: string, title: string, createdAt: Date, contents: string, author: Member, category: Category, viewCount: number, commentCount: number, likeCount: number);
    constructor(id: string, title?: string, createdAt?: Date, contents?: string, author?: Member, category?: Category, viewCount?: number, commentCount?: number, likeCount?: number);
    constructor(id: string = "", 
        title: string = "", 
        createdAt: Date = new Date(), 
        contents: string = "", 
        author: Member = new Member("", ""), 
        category: Category = new Category(0, "", 0),
        viewCount: number = 0,
        commentCount: number = 0,
        likeCount: number = 0) 
    {
        this._id = id
        this._title = title
        this._createdAt = createdAt
        this._contents = contents
        this._author = author
        this._category = category
        this._viewCount = viewCount
        this._commentCount = commentCount
        this._likeCount = likeCount
    }

    get id(): string {
        return this._id
    }

    set id(id: string) {
        this._id = id
    }

    get title(): string {
        return this._title
    }

    get createdAt(): Date {
        return this._createdAt
    }

    set createdAt(date: Date) {
        this._createdAt = date
    }

    get contents(): string {
        return  this._contents
    }

    get author(): Member {
        return this._author
    }

    get category(): Category {
        return this._category
    }

    get commentCount(): number {
        return this._commentCount
    }

    get viewCount(): number {
        return this._viewCount
    }

    public changeCategory(category: Category) {
        if(this._category.id === category.id) {
            return
        }
        this._category = category
    }

    public changeTitle(title: string) {
        if(title.length === 0) {
            return 
        }

        this._title = title
    }

    public changeContents(contents: string) {
        if(contents.length === 0) {
            return
        }

        this._contents = contents
    }

    public toObject() {
        return {
            id: this._id,
            title: this._title,
            contents: this._contents,
            createeAt: this._createdAt,
            author: this._author,
            category: this._category
        }
    }
}