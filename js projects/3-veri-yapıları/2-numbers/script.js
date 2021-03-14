// Numbers

let val;

/*
val = isNaN('10'); NaN olup olmadığını kontrol eder.
val = isNaN('a10');
var num = 10.12456789;
val = num.toPrecision(6); toplamda 6 rakamlık string değere çevirir. fonksiyona değer vermezsek 
sayıyı olduğu gibi string e çevirir.
val = num.toFixed(2); virgülden sonra 2 rakamı verir. 
*/

val = Math.PI; // pi sayısını verir
val = Math.round(2.4); // yuvarlama işlemi yapar
val = Math.round(2.7);
val = Math.ceil(2.4); // her zamana bir üst sayıya yuvarlar
val = Math.ceil(2.6);
val = Math.floor(2.4); // her zamana bir alt sayıya yuvarlar
val = Math.floor(2.7);
val = Math.sqrt(64); // 64 ün karekökünü verir
val = Math.pow(2,4); // 2 üzeri 4 ün cevabını verir
val = Math.abs(-100); // mutlak değer dönderir
val = Math.min(1,2,3,2,4,9); 
val = Math.max(4,5,6,4,98,7);
val = Math.floor(Math.random()*100+1); // Math.random() 0-1 arasında sayı üretir.

console.log(val);
console.log(typeof val);