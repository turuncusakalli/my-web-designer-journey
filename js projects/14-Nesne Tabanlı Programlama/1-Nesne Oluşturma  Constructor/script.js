/*
  Primitive tip (number, string, booelean, null, undefined) haricindeki her şeye obje denilebilir. Mesela
  (date, string&number, function, array, object diğer adıyla sözlük). Primitive tipler sadece bir değer tutar ve değer tutmaktan başka
  ekstra özellik getirmezler. 
*/


// object literals

// js de class yapısı yoktur. class yerine fonksiyon kullanılır

// function Person(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth=yearOfBirth;
//     this.job=job;
//     this.calculateAge = function(){
//         return 2018 - this.yearOfBirth;
//     }
// }

// fonksiyon yukarıdaki ya da aşağıdaki gibi tanımlanabilir

let Person = function (name, yearOfBirth, job) {
  this.name = name; // this içerideki name i, ikinci name ise dışarıdan geleni belirler
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function () {
    return 2018 - this.yearOfBirth;
  }
}

let yigit = new Person('yiğit', 2010, 'student');
let emel = new Person('emel', 1989, 'teacher');

console.log(yigit.name);
console.log(yigit.yearOfBirth);
console.log(yigit.job);
console.log(yigit.calculateAge());

console.log('***************');

console.log(emel.name);
console.log(emel.yearOfBirth);
console.log(emel.job);
console.log(emel.calculateAge());