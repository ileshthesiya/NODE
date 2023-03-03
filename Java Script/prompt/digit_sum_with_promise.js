// let sum = (number1) => {
//     while (number1 > 9) {
//         console.log(number1);
//         let sum1 = 0;
//         while (number1 != 0) {
//             sum1 = sum1 + number1 % 10;
//             number1 = parseInt(number1 / 10);
//         }
//         number1 = sum1;
//     }
//     console.log()
//     return number1;
// }
// let total = (number, work) => {

//     return new Promise((resolve, reject) => {

//         if (number > 0) {
//             resolve(console.log(work(number)));
//         }
//         else {
//             reject(console.log(number));
//         }
//     })
// }

// let number = 9510543636;
// total(number, sum);


// =========================================================
// ======================== METHOD 2 =======================


let prompt = require("prompt-sync")();
let a=parseInt(prompt("Enter Number: "))
let b=Array.from(String(a), Number);

let start=(b)=>
{
    let c=0
    for(i=0;i<b.length;i++)
    {
       c=c+b[i]
    }
    console.log(c)
    let d=Array.from(String(c), Number);
    return check(d)
}
let check=(x)=>{
    if(x.length>=2)
    {
        start(x)
    }
}
let find = (number, sum) => 
{
    new Promise((resolve,reject)=>{
        if(number==number)
        {
            resolve(sum(number))
        }
        else{
            reject(console.log('Not founded!!!'))
        }
    })
}
find(b,start)