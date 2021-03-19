// Maps : key/value pairs (collection)

let val;

const numbers = new Map();

numbers.set(1, 'one');
numbers.set('2', 'two');
numbers.set(3, 'three');
numbers.set('four', 'four');
// set ile yukarıdaki değerler numbers nesnesine gönderildi. numbers nesnesi map türünde. sözlük gibi 
// ama aradaki işaret : yerine =>


val = numbers;
val = numbers.get(1); // 1 key inin değerini dönderir
val = numbers.get('2');
val = numbers.get('four');
val = numbers.size; // kaç elemanlı olduğunu söyler
val = numbers.has(1); // 1 key ine sahip eleman var mı? true döner
val = numbers.delete('four'); // four key ini ve değerini siler
val = numbers.has('four'); 
// numbers.clear(); // tüm elemanları siler

console.log(val);

for (var [key, value] of numbers) { // key ve değerleri yazdırdık
    console.log(key + ' = ' + value)
}

for (var [key, value] of numbers.entries()) { // yukarıdaki gibi key ve değerleri yazdırdık
    console.log(key + ' = ' + value)
}

for (var key of numbers.keys()) { // sadece key leri yazdırır
    console.log(key)
}

for (var value of numbers.values()) { // sadece değerleri yazdırdık
    console.log(value)
}

numbers.forEach(function (key, value) { // key ve değerleri yazdırdık
    console.log(key + ' - ' + value)
});

var first = new Map([ // set metodu yerine manuel olarak da girebiliriz
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],

]);

var second = new Map([
    [4, 'four'],
    [5, 'five'],
]);

var merged = new Map([...first, ...second]); // iki map nesnelerini birleştirdi. önce first sonra second

console.log(merged)