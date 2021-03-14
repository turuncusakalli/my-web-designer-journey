// Template  Literals

const fullName = 'Sena Turan';
const city = 'Kocaeli';
const yearOfBirth = 2005;

let val;


val = 'my name is '+fullName+
      ' I\'m '+(2018-yearOfBirth)+' years old '+
      ' and I live in '+city;

// ternary operatörü kullanımı 

val = `my name is ${fullName} I'm ${(2018-yearOfBirth>=18)?'over 18':'under 18'} and I live in ${city}`;
// `Bu işaret (alt gr + virgül tuşu*2) tuşları ile yazılır. $ ve süslü parantez kullanımına dikkat!`
// 2. soru işaretli kısımda soru soruldu. şartın sağlandığı durumlarda 1., sağlanmadığı durumlarda 2.
// değer yazdırılacak


console.log(val);

