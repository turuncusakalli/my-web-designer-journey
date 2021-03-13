// Selecting Elements

// *** Single Elements
//    *** document.getElementById()
//    *** document.querySelector()

// *** Multiple Elements

// class name
// document.getElementsByClassName()

let val;

//val = document.getElementsByClassName('list-group-item'); // ilgili class ın uygulandığı
// tüm elementleri alır. 4 adet li etiketi dönecek
// val = document.getElementsByClassName('list-group-item')[0]; 

// val = document.getElementsByClassName('list-group-item')[2];

// val = val[2]; // bir üst komutun aynısını kısa yoldan yazıyoruz

// val[1].style.color='blue';
// val[1].style.fontSize='25px';
// val[2].textContent='new item';

// for(let i=0; i<val.length;i++){ // ilgili class ın tüm elemanlarını tek tek yazdırdık
//     console.log(val[i].style.color='red');
//     console.log(val[i].textContent='new item');
// }


// document.getElementsByTagName()

// val = document.getElementsByTagName('li'); // etiket isimlerine göre ulaşım sağladık
// val = document.getElementById('task-list').getElementsByTagName('a'); // task-list id nin
//  altındaki a etiketlerine erişiyoruz


// document.querySelectorAll()

// val = document.querySelectorAll('li'); // sayfa üzerindeki tüm li elemanlarını seçtik 

// val.forEach(function(item,index){
//     item.textContent= `${index} - hello`;
// });

val = document.querySelectorAll('li:nth-child(even)'); // tüm çift elemanlı sıradaki listeleri seçti

val.forEach(function(item){
   item.style.background='#ccc';
});

console.log(val);




