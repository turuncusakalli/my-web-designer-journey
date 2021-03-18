// Call,Apply & Bind
// Prototype tabanlı kalıtım yaparken bu fonksiyonlar oldukça yararlı olacaktır.

var welcome = function(a,b){
    console.log('Welcome '+this.name+'.Are you interested in '+a+' and '+b);
}

var yigit = {name:'Yiğit'};
var ada = {name : 'Ada'};

welcome.call(yigit,'asp.net','angular');
welcome.call(ada,'asp.net','angular');

// eğer fonksiyon parametre almıyorsa apply ve call methodları aynı işi görür
// parametre aldıklarında call parametreleri normal alır, apply ise dizi içinde alır

welcome.apply(yigit,['asp.net','angular']);
welcome.apply(ada,['asp.net','angular']);

// ind() fonksiyonu, içine verilen objeye göre yeni bir fonksiyon kopyası oluşturur. 
// Oluşan bu kopya fonksiyonu daha sonradan argüman listesi ile beraber gönderilen objeye kullanabiliriz.
var welcomeYigit = welcome.bind(yigit);
welcomeYigit('asp.net','ada');

var welcomeAda = welcome.bind(ada);
welcomeAda('asp.net','angular');

/* Bind fonksiyonundan, fonksiyonumuzu başka bir bağlamda daha sonradan kullanabilmek adına 
yararlanabiliriz. Call ve Apply Fonksiyonlarını ise bir fonksiyonu hemen bir obje 
ile çağırmak için kullanabiliriz.
*/