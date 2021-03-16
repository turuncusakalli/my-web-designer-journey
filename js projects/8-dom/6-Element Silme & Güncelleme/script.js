const taskList = document.querySelector('#task-list'); // ilgili yerdeki ul nesnesini seçti

// ** removing element
// taskList.remove(); ul nesnesini silmiş oldu
// taskList.childNodes[1].remove(); 1. indexteki elemanı siler
// taskList.children[3].remove();
// taskList.removeChild(taskList.children[3]);

// ** removing attribute
// taskList.children[1].removeAttribute('class'); 1. children ın class özelliğini siler
// for(let i=0;i<taskList.children.length;i++){
//     taskList.children[i].removeAttribute('class');
// }

// ** Replacing Elements
// const cardHeader = document.querySelector('.card-header');

// create element
// const h2 = document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('My List'));

// const parent = document.querySelector('.card');
// parent.replaceChild(h2,cardHeader);

// console.log(cardHeader);


// ** Classes

let val;

link = taskList.children[0].children[0];

// val = link.className; // class isimlerini verir
// val = link.classList; // class ları listeleyip verdi
// val = link.classList[0];
// val = link.classList[1];

link.classList.add('new');
link.classList.remove('new');

// Attributes
val = link.getAttribute('data-id'); // attribute unun değerini verir
val = link.getAttribute('href'); // href attribute u değere sahip olmadığı için boş dönecek
val = link.setAttribute('href','http://sadikturan.com'); // href etiketinin içini dolduruyoruz
val = link.hasAttribute('data-val'); // true false döner


console.log(val);