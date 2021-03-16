// Event Listeners

const btn = document.querySelector('#btnDeleteAll');
const btn2 = document.querySelector('#btnAddNewTask');

btn.addEventListener('click',function(e){ // butona tıklanıldığında aksiyon alınması için fonksiyon yazıyoruz
  
    let val;

    val = e;

    val = e.target; // hangi butonun tıklandığını verir. butonun olduğu js kod satırını verir.
    val = e.target.id;
    val = e.target.classList;
    val = e.type;

    console.log(val);

    e.preventDefault(); // bu komutu ve fonksiyondaki elementi tanımlamazsak butona tıklandığında
    // sayfanın en üstüne çıkar çünkü bir linke gitmek ister

});

// btn.addEventListener('click',btnClick); // fonksiyonu dışarıda tanımlayıp direkt çağırabiliriz de
// btn.addEventListener('click',btnClick2);
// btn2.addEventListener('click',btnClick);

// function btnClick(){
//     console.log('btn clicked');
// }

// function btnClick2(){
//     console.log('btn 2 clicked');
// }