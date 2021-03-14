// Tür Dönüşümü

let val;

// number to string
val = String(10)

// bool to string
val = String(true)

// date to string
val = String(new Date())

// array to string
val = String([1,2,3,4])

console.log(val)
console.log(typeof val)
console.log(val.length)

// toString() ile string e çevirme

val = (10).toString()
val = (false).toString()

// string to number
val = Number(true) // 1
val = Number(false) // 0 
val = Number(null) // 0
val = Number('A') // NaN
val = Number([1,2,3,4]) // NaN

// parseInt() ve parseFloat()

val = parseInt('10')
val = parseInt('10.5') // integer sayıya çevirir
val = parseFloat('10.5')