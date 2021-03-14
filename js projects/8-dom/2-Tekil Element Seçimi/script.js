// Selecting Elements

// *** Single Elements

// document.getelementById()  
// let val;

// val = document.getElementById('header'); header elementini seçti
// val = document.getElementById('header').id;
// val = document.getElementById('header').className;

// val = document.getElementById('header');
// // val = val.id; yukarıdaki işlemlerin aynısı farklı yolla yapılabilir
// // val = val.className;

// val.style.fontSize='45px'; header ın css dosyasına ulaşıp font size ı değiştirdi
// val.style.color='red';
// val.style.fontWeight='bold';
// // val.style.display='none';

// document.getElementById('header').innerText='my ToDo App'; // header textini değiştirdi

// document.getElementById('header').innerText='<b>my ToDo App</b>'; // etiketleri yorumlamaz yani direkt başlığa yazar

// document.getElementById('header').innerHTML='<b>my ToDo App</b>'; // başlık textini değiştirmez, kalınlaştırır
//console.log(val);

// document.querySelector()

console.log(document.querySelector('#header')); // id ile seçmek için # işareti kullanılmalı
console.log(document.querySelector('.card-header')); // class ile seçmek için nokta işareti kullanılmalıdır.
// birden fazla değer var ise ilkini seçer
console.log(document.querySelector('div')); // etiket ismine göre seçmek için hiçbir işaret kullanmaz
// birden fazla etiket var ise ilkini seçer

document.querySelector('li').style.color='red'; // li etiketinin ilk elemanını kızmızı yapar
document.querySelector('li:last-child').style.color='blue'; 
document.querySelector('li:nth-child(2)').style.color='yellow';
document.querySelector('li:nth-child(3)').textContent='task item';
document.querySelector('li:nth-child(4)').textContent='task item';

// document.querySelector('li').className='list-group-item list-group-item-primary'; // etiketin
// class ı değiştirildi

document.querySelector('li').classList.add('active'); // li etiketlerine yeni bir class eklendi

// *** Multiple Elements

