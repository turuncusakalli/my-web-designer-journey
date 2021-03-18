// Prototypal Inheritance- farklı iki obje arasında kalıtım gerçekleştirme

let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth= yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    return 2018 - this.yearOfBirth;
}

let Teacher = function(name,yearOfBirth,job,subject){
    Person.call(this,name,yearOfBirth,job); // call methodu ile person un constructor ını çağırdık. yani
    // Person class ını çağırdık. this kullanımına dikkat et
    this.subject = subject;
} // Person sınıfını çağırdık fakat calculateAge fonksiyonu gelmedi çünkü Person sınıfının bir üyesi
// değil. sadece dışarıdan bağlantı kurulmuş bir prototype. Bu nedenle Person sınıfının prototype larını
// Teacher sınıfına aktarmalıyız. Aşağıdaki gibi: 

// Inherit the Person prototype methods
Teacher.prototype = Object.create(Person.prototype);

// bu işlemden sonra Person ın constructer ı Teacher ın constructor ına eşitleniyor.
// Teacher sınıfını tekrar Teacher sınıfı olarak tanımlıyoruz. bu sayede parametre ayarları düzeliyor


// set Teacher constructor
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function(){ // Teacher sınıfına prototype oluşturuyoruz
    return 'hello my name is '+this.name;
}

let emel = new Teacher('emel',1989,'teacher','math');

console.log(emel);
console.log(emel.calculateAge());
