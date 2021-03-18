// Immediate Functions

// bazen yazılan fonksiyonun sadece uygulama başında çalışması istenir. mesela sliderlarda.
// bu durumlarda immediate function kullanılır

// Birinci kullanım yolu aşağıda
// (function(){

// })();  

// İkinci kullanım yolu aşağıda
// (function(){

// }());


(function(name){
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var today =new Date();
    var msg = 'Welcome ' +name+ ' Today is '+days[today.getDay()];
    console.log(msg);
}('Çınar')); // çınar name parametresine gidecek. 
