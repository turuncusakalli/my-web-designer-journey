// Loops

// for loop

// for(let i=1; i<=10; i++){
   
//      if(i==3){
//          console.log('en sevdiğim rakam :'+i);
//          continue; // 3. rakam yerine yukarıdaki cümleyi yazar
//      }

//      if (i==6){
//          console.log('en sevmediğim rakam : 6');
//          break; // break olmasaydı 6 rakamı yerine yukarıdaki cümleyi yazıp 
            // döngüye devam edip 6 rakamını da yazacaktı. break olunca 7 ye geçmeden ya da 
            // 6 rakamını tekrar yazmadan döngüyü sonlandırıyor
//      }

//      console.log(i);
// }

// while loop

// for (let i=0; i<10;i++){
//     console.log(i);
// }


// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// do-While loop

// let i=0;
// do{
//   console.log(i);
//   i++;
// }while(i<10)


// let sonuc=1;
// for (let i=10;i>0;i--){
//     if(i%2==1){
//         sonuc*=i;
//     }
// }

// console.log(sonuc);

let val='\n';
for (let i=0;i<10;i++){
    for(let j=0;j<10;j++){
         val +='* ';  
    }
    val+='\n';
}

console.log(val);