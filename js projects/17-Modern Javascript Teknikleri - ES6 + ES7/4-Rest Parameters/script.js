//Rest Parameteres 

//ES5

function sumES5(){
    let arr = Array.prototype.slice.call(arguments);
    console.log(arr);

    let result = 0;

    arr.forEach(function(item){
        result+=item;
    });
    return result;
}

console.log(sumES5(10,20,30));

// ES6

function sumES6(...arr){ // gelen tüm değerleri toplayan fonksiyon
    let result=0;
    arr.forEach(item=>result+=item);
    return result;
}

console.log(sumES6(10,20,30,40));

// ES6
function isDriver(age,...years){ // iki ya da daha fazla spread operator ile kullanılacaksa
    // önce belli olan parametreler kullanılır en sona spread parametresi eklenir
    years.forEach(year => console.log(2018-year>=age)) // true false dönderecek
}

isDriver(17,1990,2002,1983,2005);
