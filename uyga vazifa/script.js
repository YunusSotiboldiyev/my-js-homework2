//8-MASHQ 

let n = +prompt("Ko'paytirish jadvali uchun biror son kiriting:");

function kopaytirishJadvali(n) {
    var myNum = 1;
    while (myNum <= n) { 
        let line = '';
        for (let j = 1; j <= n; j++) { 
            line += (myNum * j) + ' '; 
        }
        document.write(line + "<br>");
        myNum++; 
    }
}

kopaytirishJadvali(n);

//9-mashq

function printPrimeNumbers(n) {
     for (let i = 2; i <= n; i++) {
         let isPrime = true;
         for (let j = 2; j <= Math.sqrt(i); j++) {
             if (i % j === 0) {
                 isPrime = false;
                 break;
             }
         }
         if (isPrime) {
             console.log(i);
         }
     }
 }
 
 let an = +prompt("Son kiriting");
 printPrimeNumbers(an);
 