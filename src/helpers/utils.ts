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
  return obj !== null && typeof val === 'object'
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

export function isNumberical(obj: any) {
  return (typeof obj === 'number' || typeof obj === 'string') && !isNaN(obj - parseFloat(obj))
}
