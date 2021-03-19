// Arrays  in ES6

const boxes = document.querySelectorAll('.box');

let boxesES5 = Array.prototype.slice.call(boxes);

// boxesES5.forEach(function(box){
//     box.style.backgroundColor = 'green';
// });

// // ES6

// Array.from(boxes).forEach(box => box.style.backgroundColor='red'); // boxes nesnesinin her birinin
// style değerinin arka plan rengini değiştirdi

// //ES5
// for (let i=0; i<boxesES5.length;i++){
//     if(boxesES5[i].className =='box blue'){
//         continue;
//     }
//     boxesES5[i].textContent = "I'm changed";
//     boxesES5[i].style.backgroundColor='blue';
// }

// // ES6

// var boxesES6 = Array.from(boxes); // boxes nesnesini array halinde atadık

// for(let box of boxesES6){
//     if(box.className=='box blue'){
//         continue;
//     }
//     box.textContent="I'm changed";
//     box.style.backgroundColor='blue';
// }


// from
// let arr = Array.from('modern javacript'); // her bir harfi ayırıp dizi haline getirir. boşluk dahil. 

const products = [
    {name: 'Samsung S8',price : 3000},
    {name: 'Samsung S8',price : 3000},
    {name: 'Samsung S7',price : 2000},
    {name: 'Samsung S6',price : 1000},
]

console.log(Array.from(products,prd =>prd.name=='Samsung S8')); // products objesinden array oluşturdu, 
// bu array içerisinde adı Samsung S8 olan değerleri sorguladı, sonuç true false döner
console.log(products.find(prd => prd.name=='Samsung S8')); // istediğimiz nesneyi bulur
console.log(products.filter(prd => prd.name=='Samsung S8')); // find ile aynı mantık. find sonucu obje dönderir
// filter ise liste içinde obje dönderir

console.log(products.findIndex(prd =>prd.price==5000)); // fiyatı 5000 olan nesnenin index numarasını verir
// eğer 5000 olan bir nesne yoksa -1 döner

let numbers = ['a','b','c'];

let entries = numbers.entries(); 

for(let i of entries){ // dizinin her bir değerini enumerate gibi numaralar. her numaralanan
    // değer liste içinde döner
    console.log(i)
}

let keys = numbers.keys(); 

for (let i of keys){ // sadece keys değerlerini dönderir. (0,1,2)
    console.log(i);
}

let values = numbers.values();
for (let i of values){ // sadece values değerlerini dönderir. (a,b,c)
    console.log(i)
}