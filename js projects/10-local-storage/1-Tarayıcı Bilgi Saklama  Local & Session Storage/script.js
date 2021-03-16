// yapılan işlemleri tarayıcı hafızasında saklamak için 

// LOCAL STORAGE / çerez gibi, sayfadaki bilgileri saklıyor
let val;


// set item

const firstName = localStorage.setItem('firstName','Sadık');
const lastName = localStorage.setItem('lastName','Turan');
let hobies = ['sinema','araba','gezmek'];

// get item
val = localStorage.getItem('firstName');
val = localStorage.getItem('lastName');

// remove item
// localStorage.removeItem('firstName');
// localStorage.removeItem('lastName');

// clear
// localStorage.clear();

// set array to storage
localStorage.setItem('hobies',JSON.stringify(hobies)); //json objesi şeklinde çıktı verecek, sözlükler gibi

val = JSON.parse(localStorage.getItem('hobies')); // json objesini alır

console.log(val);
console.log(localStorage);


// SESSION STORAGE / çerez gibi değil, sayfa kapatılıp açıldığında bilgiler yok olur
// const city = sessionStorage.setItem('city','Kocaeli');
// const country = sessionStorage.setItem('country','Türkiye');

//  console.log(sessionStorage);