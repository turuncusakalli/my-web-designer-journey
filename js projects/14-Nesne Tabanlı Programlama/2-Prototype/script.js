// class yapısı tanımlamak için oluşturulan fonksiyonlar constructor adını alır.

// Prototype - kalıtım yani inheritance kavramının js deki adı. 
// Inheritance var olan class’ları kullanarak, yeni class’lar tanımlanmasına olanak sağlamaktadır.
// Javascript’te sadece constructor’lar ve ön tanımlı object’ler prototype özelliğine sahiptir. 
// Yani kısaca kullanıcı tarafından tanımlanan object’ler prototype özelliğine sahip değildir.
// Prototype özelliği constructor’lara Inheritance olarak gelen prototype object’ine ulaşmak için kullanılır. 
// Default olarak constructor’lar kullanılarak oluşturulan her object oluşturduğu constructor’ın 
// prototype özelliği ile tanımlanan prototype object’inin özellik ve metotlarını Inheritance olarak alır.


let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;    
}

Person.prototype.calculateAge = function(){ // Person fonksiyonunun içine calculateAge adlı fonksiyon eklendi
    // herhangi bir nesene eklenecek olsaydı da prototype kalıbı kullanılacaktı. örnek;
    // Person.prototype.color = "pink"
    return 2018 - this.yearOfBirth;
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.lastName='Turan';

let emel = new Person('emel',1989,'teacher'); // new anahtarı ile constructor yani class yapısı çağrılır
let yigit = new Person('yiğit',2010,'student');


console.log(emel.calculateAge());
console.log(emel);
console.log(emel.getName());
console.log('***************')
console.log(yigit);
console.log(yigit.calculateAge());
console.log(yigit.getName());

console.log(emel.hasOwnProperty('lastName')); // fonksiyon içinde lastName adlı bir ettribute olup 
// olmadığını kontrol eder. true false döner. eğer prototype içindeyse false döner. 

console.log(emel.lastName);
console.log(yigit.lastName);
