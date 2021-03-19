// Sub Classes

//ES6

class PersonES6 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        return `Hello I'm ${this.firstName} ${this.lastName}`
    }
}

class CustomerES6 extends PersonES6 { // PersonES6 class ını kalıtım aldı
    constructor(firstName, lastName, phone, username) {
        super(firstName, lastName); // kalıtım alınan class ın parametrelerini alıyoruz
        this.phone = phone;
        this.usernma = username;
    }

    static getTotal() {
        return 1000;
    }
}

let customer1 = new CustomerES6('volkan', 'yükselen', '134567', 'volkanyukselen');

console.log(customer1.sayHi());
console.log(customer1);
console.log(CustomerES6.getTotal());