export class Member {

  private _id : string

  private _nickname : string

  constructor(id: string, nickname:string)
  constructor(id? : string, nickname?: string)
  constructor(id: string= "", nickname: string = "") {
    this._id = id
    this._nickname = nickname
  }

  get id(): string {
    return this._id
  }

  get nickname(): string {
    return this._nickname
  }
}

