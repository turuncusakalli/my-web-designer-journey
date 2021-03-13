// Strings

const firstName = 'Sadık';
const lastName = "Turan";
let hobbies = 'sinema spor kitap yazılım';
const age=35;

let val;

// string concatenation

val = firstName +" "+ lastName; // araya boşluğu kendimiz ekledik
val = 'Sadık';
val +=' Turan';

val = 'Benim adım '+firstName+' '+ lastName+ ' ve yaşım ' + age +
 ' izmit\'te yaşıyorum.'; // kaçış elemanı

//string concat
val = firstName.concat(' ',lastName); // concat ile araya eklenecek şeyleri belirleyebiliriz

// string uppercase - lowercase
val = val.toUpperCase();
val = val.toLowerCase();

// string replace
val =val.replace('sadik','çınar'); // sadik değeri çınar değeri ile değişti

// trim
val = val.trim(); // baştaki ve sonraki boşlukları keser

// substring 
// val = val.substring(3,8); 3-8 arasındaki değerleri dönderir

// slice
// val = val.slice(6); 6. ve sonraki karakterleri dönderir.
// val = val.slice(1,6); 1. ve 6. indisler arasındaki karakterleri dönderir

//val = val.indexOf('x'); bulduğu ilk x değerinin index ini dönderir. olmayan bir 
// karakter arandığında -1 dönderir

//val = val[1]; karaktere erişim

//string length
//val = val.length;

val =hobbies.split(' ') // her kelimeyi boşluklardan ayırıp dizi içinde dönderir

console.log(val);
console.log(typeof val);