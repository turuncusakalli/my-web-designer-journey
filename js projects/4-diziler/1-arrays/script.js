// Arrays

let names = ['çınar','sena','ada','yiğit'];
let years = [2017,1970,1990,1998];
let mix = ['sadık','turan',1983,null,undefined,['sinema','kitap']];

// // get array item
// console.log(names[0])
// console.log(names[3])

// // set array item
// names[5]="emel"; 5. indise emel elemanını ekler. 4. indis boş kaldığı için onu empty olarak atadı
// names[names.length]='emel'; bu yöntemle en sonuncu elemana ekleme yapılır


// // add item
// years.push(1986); en sona ekler
// years.unshift(1986); en başa ekler

// // remove item
// years.pop(); dizinin son elemanını siler
// years.shift(); dizinin ilk elemanını siler

// //indexof
// let index = names.indexOf('ada'); 
// console.log(' index : '+index);

// // reverse
// names.reverse(); tüm elemanların sırasını ters çevirir

// // sort
// years.sort();

// //concat
// let val = years.concat(names);
// console.log(val);

// splice
// console.log(names);
// names.splice(2,0,"seda"); ilk indis kaçıncı elemandan başlayarak silmek istediğini sorar
// ikinci indis kaç adet elemena silmek istediğini, 3. indis ilk indisteki sıraya ne eklemek istediğini sorar.

function over18(year){
    let age = 2018 - year;
    return age>=18;
}

// find
// let val = years.find(over18); // diziden bulduğu ilk true değerinin kendisini (1970) dönderir

// filter
let val = years.filter(over18); // diziden bulduğu true değerini sağlayan tüm elemanları dizi içinde dönderir. 

console.log(val);

console.log(names);
console.log(names.length);
console.log(typeof names);

// console.log(years);
// console.log(mix);
