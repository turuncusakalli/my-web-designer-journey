
/*
Static metotlar ES6 ile gelen özelliklerden biridir. Normalde bir class içindeki metot ya da 
özelliklere ulaşmak istiyorsak new classAdı() şeklinde yeni bir sınıf örneği oluşturup bu sınıf 
örneği üzerinden istediğimiz özelliklere ulaşabiliyoruz. Static metotlar bize new anahtar 
kelimesini kullanmadan sınıfAdı.ozellik şeklinde objesiz ulaşabilme imkanı sağlar. Math.pow()
metodu gibi
*/



class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(a,b){ // uzaklık hesaplayacak static fonksiyon yazıldı
                          // static metoddaki amaç oluşturulan instance lar üzerinde çalışmak değildir.
                          // oluşturulan class üzerinden kullanmaktır. class ı bir nesneye çağırıp kullanılamaz
                          // PersonES6.sayHi() ile statik metodlara ulaşılır 
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx,dy);
    }


}

const d1 = new Point(10,10);
const d2 = new Point(20,20);

console.log(Point.distance(d1,d2));