// Callback Functions
let val;

function MultipleByTwo(a, b, c, callback) { // callback parametresine fonksiyon atayacağız
    let arr = [];

    if (callback && typeof callback === 'function') { // eşitlikte null değilse şartını sağladık
        for (let i = 0; i < 3; i++) {
            arr[i] = callback(arguments[i] * 2); // arguments ile  a,b ve c yi yani tüm argümanları 
            // aynı anda işleme sokar
        }
    }
    return arr;
}

function addOne(a) {
    return a + 1;
}

function addTwo(a) {
    return a + 2;
}

function addThere(a) {
    return a + 3;
}

// val = MultipleByTwo(5,10,20,addThere);
val = MultipleByTwo(5, 10, 20, function (a) { // callback parametresine kendimiz anlık anonymus fonksiyon 
    // yazıp gönderebiliriz de. amaç fonksiyon göndermek.
    return a + 15;
}
);

// val = addOne(10);

// for(let i=0;i<val.length;i++){
//     val[i] = addOne(val[i]);
// }


console.log(val);