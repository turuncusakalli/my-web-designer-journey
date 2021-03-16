// Traversing the Dom

let val;

let list = document.querySelector('.list-group'); // list-group class ını seçtik. elemanlar ul etiketi
// querySelector NodeList dönderir
// node ve element farkını öğren!!!

val = list;

val = list.childNodes; // elde ettiğimiz listenin altındaki eleman ve textlere ulaştık
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; // text 
val = list.childNodes[1].nodeType; // element
// nodeType sonucu 1 ise element, 2 ise attribute, 3 ise text, 8 ise comment dir

val = list.children;
val = list.children[0]; // list in ilgili li elemanını verir
val = list.children[2];

val = list.children[2].textContent='new item';
val = list.children[3].children; // HTMLCollection dönderir

val = list.firstChild; // ilk eleman textNode una erişilir
val = list.firstElementChild; // ilk elemanın etiketine ulaşılır

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount; 

val = list.parentNode;
val = list.parentElement;
val = list.parentElement.parentElement;

val = list.children[0].nextSibling; // 0. elemandan sonraki elemanın textNode una erişti
val = list.children[0].nextElementSibling; // 0. elemandan sonraki elemana erişti

val = list.children[1].previousSibling;
val = list.children[1].previousElementSibling;
//console.log(val);



for(let i=0; i<list.childNodes.length;i++){
   
    if(list.childNodes[i].nodeType===1){
        
        console.log(list.childNodes[i]);
    }

}



