// String

var str1 = 'Sadık';
var str2 = new String('Sadık'); // string sınıfını kullanarak bir nesne oluşturduk. çıktı farklı olur.
// sözlük gibi çıktı verir

console.log(str1);
console.log(typeof str1); // string döner
console.log(str2);
console.log(typeof str2); // object 

if (str2 == 'Sadık') { // true döner. eğer tip kontrolünü de devreye alırsak false döner
    console.log('yes');
} else {
    console.log('no');
}


// neden kullanılır? bazen array ya da string içindeki methodlar yeterli gelmez. bu nedenle kullanılır. mesela:

String.prototype.repeat = function (n) {
    return new Array(n + 1).join(this);
}

console.log('sadık'.repeat(4)); // art arda 4 defa ilgili stringi yazdırdı

// Number
var num1 = 10;
var num2 = new Number(10);

// Boolean
var bool1 = true;
var bool2 = new Boolean(true);

// Object
var obj1 = {
    name: 'sadık'
}

var obj2 = new Object({
    name: 'sadık'
});

// Array
var arr1 = ['ada', 'yiğit', 'sena', 'çınar'];
var arr2 = new Array('ada', 'yiğit', 'sena', 'çınar');


Array.prototype.remove = Array.prototype.remove || function (member) { // eğer gelen değer null ise
    // ikinci fonksiyonu eğer değilse 1. fonksiyonu kullanır.
    var index = this.indexOf(member);
    if (index > -1) {
        this.splice(index, 1); // splice methodu ile sildik
    }
    return this;
}

console.log(arr1.remove('sena'));