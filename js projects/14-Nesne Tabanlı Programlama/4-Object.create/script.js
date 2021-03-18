//Object.create

let personProto = {
    calculateAge: function () {
        return 2018 - this.yearOfBirth;
    }
}

let yigit = Object.create(personProto); // yiğit için object oluşturduk. bu sayede object nesnesini yani sözlük
// nesnesini fonksiyon gibi kullanacağız. ilgili nesneye farklı bir nesne ekleyebileceğiz. 

yigit.name = 'yiğit';
yigit.yearOfBirth = 2010;
yigit.job = 'student';

let emel = Object.create(personProto, { // farklı bir yöntemle emel object i oluşturduk. Bu object e
    // sonradan eklenecek nesneleri object i tanımlarken ekliyoruz.
    name: { value: 'emel' },
    yearOfBirth: { value: 1989 },
    job: { value: 'teacher' }
});

console.log(emel);
console.log(emel.calculateAge());

console.log(yigit);
console.log(yigit.calculateAge())