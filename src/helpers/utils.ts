const toString = Object.prototype.toString

export function isFunction(obj: any) {
  return typeof obj === 'function'
}

export function isObject(obj: any): obj is Object {
  return obj === Object(obj)
}

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

// FormData、ArrayBuffer 这些类型，typeof 判断也为 true
export function isObjectAnother(obj: any) {
  return obj !== null && typeof obj === 'object'
}

export function isArray(obj: any) {
  return toString.call(obj) === '[object Array]'
}

export function isDate(obj: any): obj is Date {
  return toString.call(obj) === '[object Date]'
}

export function isRegExp(obj: any) {
  return toString.call(obj) === '[object RegExp]'
}
export function isBoolean(obj: any) {
  return toString.call(obj) === '[object Boolean]'
}

// export function isNumberical(obj: any) {
//   return (typeof obj === 'number' || typeof obj === 'string') && !isNaN(obj - parseFloat(obj))
// } 

// 格式化头部
export function parseHeaders(headers: any): any {
  let parsed = Object.create(null)
  if (!headers) return parsed
  headers.split('\r\n').forEach((line: any) => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (val) {
      val = val.trim()
    }
    parsed[key] = val
  })

  return parsed
}

// 格式化数据
export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      // do nothing
    }
  }
  return data
}

export function  extend<T, U>(to: T, from: U): T & U {
  for(const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
