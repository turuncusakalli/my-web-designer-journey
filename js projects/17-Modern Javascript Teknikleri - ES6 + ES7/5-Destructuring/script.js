// DEstructuring 

// Destructuring assignment

var a,b,rest;

[a,b] = [10,20]; // a 10 b ise 20 olarak atanır
console.log(a);
console.log(b);

[a,b,...rest] = [10,20,30,40,50,60]; // a 10, b 20, kalanlar ise dizi içinde rest parametresine ait olur
console.log(a);
console.log(b);
console.log(rest);

({a,b} = {a:10, b:20}); // süslü parantezle de kullanılabilir.
console.log(a);
console.log(b);

({a,b,...rest} = {a:10, b:20, C:30, d:40}); // a 10, b 20, rest ise sözlük içinde c=30 ve d=40 olur
console.log(a);
console.log(b);
console.log(rest);

//Array destructuring

const arrConfig = ['localhost','8080','900'];

//ES5
// var server = arrConfig[0];
// var port = arrConfig[1];
// var timeout = arrConfig[2];

// console.log(server,port,timeout);

//ES6

// const [server,port,timeout] = arrConfig; // dizi öğelerini tek satırda nesnelere atadık

// console.log(server,port,timeout);

// Object destructuring

const objConfig = {
    server : 'localhost',
    port : '8080',
    timeout : 800
}

// var server = objConfig.server;
// var port = objConfig.port;
// var timeout = objConfig.timeout;

// const {server,port,timeout} = objConfig; // object öğelerini tek satırda nesnelere atadık

// console.log(server,port,timeout); 

// let {timeout : t} = objConfig; // objConfig içindeki timeout öğesini t öğesine atadı
// console.log(t);

// let {server,port,timeout=900} = objConfig; // timeout parametresi olmasaydı ama ihtiyacımız olsaydı
// kendimiz varsayılan bir değer atayabilirdik. eğer kendimiz 900 yazdığımız halde object içinde timeout
// parametresi olsaydı, obje içindeki değeri alacaktı
// console.log(server,port,timeout)

const days = ['monday','tuesday','wednesday','thursday','friday'];

// const [wed,fri] = days; // wed için monday, fri için tuesday parametresini alırdı
const [,,wed,,fri] = days; // iki virgül ile 2 öteleme işlemi yapıldı, bu sayede wed, wednesday e geldi

console.log(wed,fri)