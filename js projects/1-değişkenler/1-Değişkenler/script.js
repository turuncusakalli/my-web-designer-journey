/*
console.log('Merhaba') // console.log print gibi
console.log(1234)
console.log(true)
console.log([1,2,3])
alert("Merhaba") // uyarı verir 
console.error('Hata oluştu') // hata oluşturdu
console.warn('Bir uyarı oluştu') // uyarı verir 

// tek satırlık yorum satırı
*/

// console.clear() // console da yazılanları temizler
// ctrl+k+c işaretli tüm satırları satır satır yoruma alır

// Değişkenler

var age;
console.log(age) // undefined çıktısı verir

age = 20;
console.log(age) // 20 çıktısı verir 

var fullname = 'Sadık Turan';
console.log(fullname) // Sadık Turan

/*
 Değişken Tanımlama Kuralları
 ** Değişken isimleri rakam ile başlayamaz.
    var 1yas; => hatalı
    var yas1; => geçerli
    var _yas; => geçerli
    var $yas2; => geçerli
    
 ** Komut isimleriyle tanımlama yapılamaz. Örneğin if kelimesi değişken ismi olamaz.
 ** Büyük küçük harf duyarlılığı vardır.

    var firstName = 'Sadık';
    var FirstName = 'Çınar';
    
 ** Değişken isimlerinde türkçe karakter kullanmamalıyız.   
*/
// var, let, const

// var ile let daha sonra açıklanacak. şu an için aynı kullanım mantığı olduğunu bil
// const, tanımlandıktan sonra değiştirilmeyecek değişkenler için kullanılır. 