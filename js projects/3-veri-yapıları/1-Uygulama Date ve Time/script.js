// get methods
var dt = new Date(); // şu anın tarih ve saat bilgisini verir 
var dt = new Date(1990,1,5); // tarih bilgisini değiştirdik
console.log(dt);
/*
getDay - haftanın kaçıncı gününde olduğumuzu verir 
getHours - saatin kaç olduğu bilgisini verir
getSeconds - bulunduğumuz saniyenin bilgisini verir 
getMinutes
*/
console.log(dt.getMonth()+1); // yılın hangi ayında olduğumuzu verir. 0 dan başlar. bu nedenle +1 kullanılır
console.log(dt.getDate()); // ayın kaçıncı gününde olduğu sonucunu verir
console.log(dt.getFullYear()); // kaçıncı yılda olduğumuzu verir 

// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.
var dtA = new Date('8/24/2010 14:50:10');
var dtB = new Date(2010,7,24,14,50,10)

console.log(dtA);
console.log(dtB);

// 1/1/1990 tarihinden bir gün öncesini gösteriniz. 
var dtC = new Date('1/1/1990');
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth-1);
console.log(dtC);

// iki tarih arasındaki geçen zamanı bulunuz.
var start = new Date('1/1/1990');
var end = new Date('2/10/1992');

var milisecond = end - start; // sonuç milisaniye cinsinden dönecek
var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gun = saat / 24;

console.log('milisecond :'+milisecond)
console.log('saniye : '+ saniye);
console.log('dakika :'+ dakika);
console.log('saat :' + saat);
console.log('gun : '+gun);

// Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır ?

// set methods

var annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0); // saat bilgisi ayarlandı
annelerGunu.setFullYear(2019); //  yıl bilgisi biz tarafından atarlandı
annelerGunu.setDate(1); // gün bilgisini değiştirdik. setDay ile değişmez
annelerGunu.setMonth(4);

while(annelerGunu.getDay() != 0){ 
    annelerGunu.setDate(annelerGunu.getDate()+1)
}
annelerGunu.setDate(annelerGunu.getDate()+7);
console.log(annelerGunu);

// ** Yaş hesaplama nasıl yapılır ?

var birthday = new Date('8/1/1985');
var ageDifMs = Date.now() - birthday.getTime(); // getTime milisecond cinsinden değer dönderir
// Date.now da milisaniye cinsinden değer dönderir
var ageDate = new Date(ageDifMs); // date parametresine milisaniye verirsen o milisaniyenin
// zaman bilgisini verir

console.log(ageDate.getFullYear() - 1970); // önceki zaman bilgisinde yıl bilgisi vardı, yıl bilgisini
// çıkarınca yaş bilgisini elde ettik


var kurs = "Modern Javascript Dersleri: Baştan Sona Javascript Programlama";
var result = kurs.lastIndexOf("Javascript"); // result: 7

console.log(result)