// Keyboard Events

const input = document.querySelector('#txtTaskName');
const form = document.querySelector('form');
const select = document.querySelector('#select');

// input.addEventListener('keydown',eventHandler); herhangi bir tuşa tıklandığı anda işlem gerçekleşir 
// input.addEventListener('keyup',eventHandler); herhangi bir tuşa tıklanıp eli kaldırınca işlem gerçekleşir 
// input.addEventListener('keypress',eventHandler); herhangi bir tuşa tıklayınca işlem gerçekleşir 
// input.addEventListener('focus',eventHandler); yazı yazılacak alana tıklayınca işlem gerçekleşir. renk 
// atama gibi işlemler için kullanılır.
// input.addEventListener('blur',eventHandler); yazı yazılacak alana tıklayınca blurlama gerçekleşir
// input.addEventListener('cut',eventHandler); texti kestiğimiz anda işlem gerçekleşir
// input.addEventListener('paste',eventHandler);
// input.addEventListener('select',eventHandler); textin herhangi bir kısmını seçince işlem gerçekleşir
// form.addEventListener('submit',eventHandler); // formun submit butonuna tıklandığı zaman tanımlanan adrese gider

select.addEventListener('change',eventHandler); // formda farklı bir öğe seçildiğinde değişim işlemini gerçekleştirecek

function eventHandler(e){
       console.log('event type '+ e.type);
    // console.log('key code :'+e.keyCode); // hangi tuşa basıldıysa o tuşun hex kodu yazılır
       console.log('value :'+e.target.value); // hangi tulşa bastıysak o tuşun adını verir

    // e.target.style.backgroundColor='yellow';

    e.preventDefault();
}