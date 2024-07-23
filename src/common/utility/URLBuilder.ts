class QueryStringBuilder {
  private hm : Map<string, string>
  
  constructor() {
    this.hm = new Map<string, string>()
  }

  add(key : string, value : any) {
    if(key !== undefined && key !== null && key !== 'null' && value !== undefined && value !== null && value !== "null") {
      this.hm.set(key, value)
    }
    return this
  }

  build() : string|undefined {
    if(this.hm.size == 0) return undefined
    let url = "?"

    this.hm.forEach((v, k) => {
      url = url.concat(`${k}=${v}&`)
    })

    return url.substring(0, url.length-1)
  }
}

function parseQueries<T> (url : string | null) : T | undefined {
  if(!url) return;
  const parted = url.split('?')
  if(parted.length < 2) return undefined

  const map = new Map<string ,any>()

  const queries = parted[1].split('&')
    .map(it => it.split('='))
    .reduce((newMap, it) => {
      newMap.set(it[0], it[1])
      return newMap
    }, map)

    return Object.fromEntries(map) as T
}

export {QueryStringBuilder, parseQueries}