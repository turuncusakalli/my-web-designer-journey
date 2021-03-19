// Sets (Collection - Unique value)

let val;
var mySet = new Set(); // set objesi oluşturduk. küme mantığı vardır. unique değer saklar

mySet.add(1);
mySet.add(2);
mySet.add(2); // önceden var olduğu için eklemez
mySet.add(4);
mySet.add('iki');
mySet.add({a:1,b:2});

var obj = {a:1,b:2};

mySet.add(obj); // içerikleri aynı olsa da ekleme gerçekleşir. Çünkü referansı farklıdır

val = mySet.has(1); // mySet objesinde 1 değeri olup olmadığını sorgular. true false döner.  
val = mySet.has(3);
val = mySet.has(obj); // true döner

val = mySet.size; // kaç eleman olduğunu verir
mySet.delete(1); // 1 değerini siler


console.log(val);
console.log(mySet);

for(let item of mySet){ // değerleri yazdırdık
    console.log(item);
}

for (let item of mySet.keys()){ // yukarıdaki sonuçla aynı sonucu döner
    console.log(item);
}

for (let item of mySet.values()){ // yukarıdaki sonuçla aynı sonucu döner. set nesnelerinde keys ve values 
    // aynı değerleri döner. 
    console.log(item);
}

for (let [key,value] of mySet.entries()){// yukarıdaki sonuçla aynı sonucu döner.
    console.log(key,value);
}

console.log(Array.from(mySet)); // mySet nesnesi diziye çevrildi

let mySet2 = new Set([1,2,3,4]); // 4 elemanlı set nesnesi oluştu

console.log(mySet2); 




//intersect - kesişim
var intersect = new Set(Array.from(mySet).filter(x=>mySet2.has(x)));
// mySet ile mySet2 nesnelerinin kesişim öğelerini verir

var intersect = new Set([...mySet].filter(x=>mySet2.has(x)));

console.log(intersect);


//difference

var difference = new Set([...mySet].filter(x=>!mySet2.has(x)));
// mySet in mySet2 nesnesinden farklı olan öğelerini verir

console.log(difference);