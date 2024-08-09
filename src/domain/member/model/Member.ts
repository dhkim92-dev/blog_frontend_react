export class Member {

  private _id : string

  private _nickname : string

  private _email : string

  constructor(id: string, nickname:string)
  constructor(id? : string, nickname?: string)
  constructor(id: string= "", nickname: string = "", email: string = "") {
    this._id = id
    this._nickname = nickname
    this._email = email
  }

  get id(): string {
    return this._id
  }

  get nickname(): string {
    return this._nickname
  }

  get email(): string {
    return this._email
  }
}

