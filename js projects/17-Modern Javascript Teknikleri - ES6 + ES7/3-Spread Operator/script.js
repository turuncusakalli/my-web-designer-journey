// Spread Operator 

function getTotal(a,b,c){
    return a+b+c;
}

console.log(getTotal(10,20,30));

let numbers = [10,20,30];

//ES5
console.log(getTotal.apply(null,numbers));

//ES6
console.log(getTotal(...numbers));  // Spred Operatör, fonksiyonlarda birden fazla parametre olarak 
// kullanılmasına, arraylerin içerisinde birden fazla eleman olarak genişletilmesine, yayılmasına 
// olanak sağlar. burada numbers dizisinin elemanlarını fonksiyona ayrı ayrı gönderdi. 


let arr1 = ['two','three'];
let arr2 = ['one','four','five'];

// arr1.push(...arr2); // arr1 listesine arr2 listesini ekledi
// arr1.unshift(...arr2); // arr2 listesini arr1 listesinin en başına ekledi

let arr3 = ['one',...arr1,'four','five'];


console.log(arr3);

let h1 = document.querySelector('h1'); // h1 etiketi seçildi
let divs = document.querySelectorAll('div'); // divler seçildi

let tags = [h1,...divs];

tags.forEach(tag => tag.style.color = 'red') // tüm seçilen elemanları kırmızı yaptı

console.log(tags);

