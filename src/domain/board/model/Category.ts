

export class Category {
    
    private _id: number

    private _name: string

    private _count: number

    constructor(id: number, name: string, count: number) {
        this._id = id
        this._name = name
        this._count = count    
    }

    public changeName(name: string): void {
        if(name.length === 0) {
            return
        }

        this._name = name
    }

    get id(): number {
        return this._id
    }

    get name(): string {
        return this._name
    }

    get count(): number {
        return this._count
    }
}