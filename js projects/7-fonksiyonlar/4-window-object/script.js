// Window Object

let val;
var a = 10;
function abc(){
   return 0;
};

val = window; // window, tarayıcının öğeyi denetle kısmındaki console kısmına yazıldığında
// o sayfada kullanılabilecek elementleri gösterir. aslında programda kullanılan tüm 
// method ya da fonksiyonlar da denebilir. bunu bir değişkene atıyoruz

// alert
// alert('Merhaba');

// prompt kullanıcıdan değer alır
// var val = prompt('bir sayı giriniz ');  

// confirm onaylama pop-up ı çıkarır
// val = confirm('emin misiniz ?');

// if(val){
//     console.log('ok');
// }else{
//     console.log('no');
// }

// scroll
// val = window.scrollX; scroll X in konumunu verir. window yazılması şart değil. scrollX de yazılabilir.
// val = window.scrollY;

// location

val = window.location; // host, hostname gibi sayfaya ait bilgileri verir.
val = window.location.href; // tarayıcıdaki url i alır
val = window.location.hostname; // host name yani internet adresini alır.
val = window.location.host; // port numarasıyla birlikte host name i alır
val = window.location.protocol; // protocol (http, https) bilgisini alır.
val = window.location.search; // query string (url deki hostname den sonraki sayfaya özel olan kısım) bilgisini alır.

// window.location.href='http://sadikturan.com'; // href bilgisini değiştirdi
// window.location.reload(); // sayfa sürekli refresh olur. durmadan.

console.log(val);