// ReferenceError - önceden tanımlanmış reference hatası. mesela eksik harfle print yazdırmak
// TypeError
// SyntaxError
// URIError

// Error

var user = {
    name: 'Sadık Turan'
}

try {
    // console.log(myFunction());
    console.log(user.name);
    if (!user.email) { // eğer user objesinin name alanı null ise
        throw new Error('User has no email'); // manuel hata oluşturma
    }
}
catch (e) {
    console.log(e); // hata objesini yazdırır
    console.log(e.message); // error un sadece mesaj kısmını verir
    console.log(e.name); // hata türünün adını verir 
    console.log(e instanceof ReferenceError); // error ReferenceError mu sorusunu sorar. true false döner
    console.log(e instanceof TypeError);
    console.log(typeof e); // hata türünü verir
}
finally {
    console.log('finally block');
}