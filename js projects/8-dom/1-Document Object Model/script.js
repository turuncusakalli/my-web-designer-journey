let val;

val = window.document; // window objesinin document objesini paylaştık
val = document.all; // sayfa üzerindeki bütün etiketler collection altında toplanır.
val = document.all.length; // sayfa üzerindeki bütün etiketlerin sayısını verir.
val = document.all[10]; // sayfa üzerindeki 10. etikete ulaşırız
val = document.head; // head etiketine ulaştık
val = document.body; // body etiketine ulaştık
val = document.anchors; // sayfadaki tüm linkleri verir
val = document.URL; // sayfanın url sini verir
val = document.domain; // sayfanın domainini verir
val = document.images; // sayfanın tüm image lerine ulaşır
val = document.title; // sayfa title ına ulaştı
val = document.forms; // sayfada bulunan tüm formları verir
val = document.forms[0];
val = document.forms[0].id; // ilgili formun id sini alır
val = document.forms[0].method; // ilgili formun method larını verir
val = document.forms[0].action; // ilgili formun action ını verir
val = document.scripts; // sayfadaki tüm scriptleri verir
val = document.scripts[2];
val = document.scripts[2].getAttribute('src'); // ilgili script in src özelliğini verir


console.log(val);