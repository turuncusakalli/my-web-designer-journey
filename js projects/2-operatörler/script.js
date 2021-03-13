// Operatörler

let val;
const a=10;
const b=5;
const c=5;
let   d=3;

// 1- Aritmetik Operatörler

val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a%b;
val = d++; // önce d değerini val değişkenine kaydeder sonra artırır
val = ++d; // önce d değerini artırır sonra val değişkenine kaydeder
val = --d;
val = d--;

// 2- Atama Operatörleri

val = a;
val +=a; // val = val + a;
val -=a; // val = val - a;
val *=a; // val = val * a;
val /=a; // val = val / a;
val %=a; // val = val % a;


// 3- Karşılaştırma Operatörleri

val = a==b;
val = b==c;
val = b===c; // hem değer kontrolü hem de type kontrolü yapılır 
val = 5 === '5';
val = a!=b; // a, b ye eşit değil mi
val = a!==b; // a, b ye eşit değil mi ve türleri farklı mı
val = a > b;
val = b < a;
val = a >= b;
val = 5 >= 5;
val = a <= b;

// 4- Mantıksal Operatörler

   // && (And)
   // || (Or)
   // ! (Not)
   // !true  => false
   // !false => true

   val=  (a>b) && (a>c) 
   val = (a>b) || (a<c)
   val = !(a>b)

   

console.log(val);
console.log(typeof val);