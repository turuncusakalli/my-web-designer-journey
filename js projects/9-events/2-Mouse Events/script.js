// Mouse Events

const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');

// click
// btn.addEventListener('click',eventHandler);
// ul.addEventListener('click',eventHandler); // ul üzerinde herhangi bir noktaya tıkladığımızda fonksiyon çalışır

// double click
// btn.addEventListener('dblclick',eventHandler); // iki defa tıklandığında fonksiyon çalışır

//mouse down
// btn.addEventListener('mousedown',eventHandler); // mouse a tıklandığı anda işlem gerçekleşir.

// //mouse up
// btn.addEventListener('mouseup',eventHandler); // mousa tıklanıldığında değil, tıklanılıp bırakıldığı 
// anda işlem gerçekleşir

// // mouseenter
// ul.addEventListener('mouseenter',eventHandler); // mouse ul elementinin kapladığı alana girdiği anda işlem gerçekleşir
// // mouseleave
// ul.addEventListener('mouseleave',eventHandler); // mouse ul elementinin kapladığı alandan çıktığı anda işlem gerçekleşir

// // mouseover
// ul.addEventListener('mouseover',eventHandler); // mouse ul elementinin kapladığı alana girdiği anda işlem gerçekleşir.
// mouseenter dan farkı, ul elementi içinde başka li dışındaki başka bir nesneye geçildiği zaman da çalışır. 
// // mouseout
// ul.addEventListener('mouseout',eventHandler); 

// mouse move
const h5=document.querySelector('h5'); // mouse en ufak bir pixel kayması yaşadığında işlem gerçekleşir
ul.addEventListener('mousemove',eventHandler);

function eventHandler(event){
    console.log(`event type : ${event.type}`);

    h5.textContent=`Mouse X : ${event.offsetX } Mouse Y : ${event.offsetY }`; // mouse hareket ederken
    // X ve Y koordinatlarını gösterecek

}