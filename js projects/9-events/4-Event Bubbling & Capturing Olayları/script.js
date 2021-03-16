// Event Bubbling

const form = document.querySelector('form');
const cardBody= document.querySelector('.card-body');
const card = document.querySelector('.card');
const container = document.querySelector('.container');


// form.addEventListener('click',function(e){
//     console.log('form');
//     e.stopPropagation(); // normalde forma tıklanıldığı zaman form un üzerindeki divler containerlar
        // ya da üst katmanda başka ne varsa onlara atanan click işlemleri de gerçekleşir. kapsama 
        // özelliğinden dolayı. bu komut bu olayı durdurur
// });

// cardBody.addEventListener('click',function(e){
//     console.log('card body');
//     e.stopPropagation();
// });

// card.addEventListener('click',function(e){
//     console.log('card');
//     e.stopPropagation();
// });

// container.addEventListener('click',function(e){
//     console.log('container');
//     e.stopPropagation();
// });

// Bubbling içten dışa doğru- capturing dıştan içe doğru

// Event Capturing 

// form.addEventListener('click',function(e){
//     console.log('form');
//     e.stopPropagation();
// },true); // addEventListener ın 3. parametresi defaultta false geliyor, bunu true yapınca iç yapıda
// yapılan bir değişiklik tine dış yapıdakini de etkileyecek. fakat burada sıra değişecek. önce dış
// yapıdakinin işlemleri yapılacak sonra sırasıyla en iç yapıdakine gelecek

// cardBody.addEventListener('click',function(e){
//     console.log('card body');
//     e.stopPropagation();
// },true);

// card.addEventListener('click',function(e){
//     console.log('card');
//     e.stopPropagation();
// },true);

// container.addEventListener('click',function(e){
//     console.log('container');
//     e.stopPropagation();
// },true);


// const deleteItems = document.querySelectorAll('.fa-times');

// deleteItems.forEach(function(item){
//     item.addEventListener('click',function(e){
//         console.log(e.target);
//     })
// });

const ul = document.querySelector('ul');

ul.addEventListener('click',function(e){
    
    if(e.target.className==='fas fa-times'){
        e.target.parentElement.parentElement.remove();
        e.preventDefault();
    }
});



