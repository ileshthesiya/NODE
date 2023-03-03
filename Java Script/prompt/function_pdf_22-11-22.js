// 1. WRITE A JS FUNCTION THAT REVERSE A NUMBER
// ===== WITH NAME FUNCTION======

// ============================================================
// let prompt = require("prompt-sync")();
// function fun_rev()
// {
//     let i,rev=0
    
//     let n = parseInt(prompt("enter n:"));
//     while (n!=0)
//     {
        
//         i=n%10
//         rev=rev*10+i
//         n=Math.floor(n/10)
//     }
//     console.log(`reverse=>${rev}`)
// }

// fun_rev()
// =================================================================================
// ===================================================================================


//  1. WRITE A JS Function THAT REVERSE A NUMBER 
//  WITH ANONYMOUS
// =======================================================================================

// let prompt = require("prompt-sync")();
//  fun_rev=()=>
// {
//     let i,rev=0
    
//     let n = parseInt(prompt("enter n:"));
//     while (n!=0)
//     {
        
//         i=n%10
//         rev=rev*10+i
//         n=Math.floor(n/10)
//     }
//     return rev;
// }

// let a=fun_rev()
// console.log("Reverse Number is:" +a);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2.WRITE A JS FUNCTION THAT CHECK WHEATHER A PASSED STRING IS PALINDROME OR NOT?
// WITH NAME FUNCTION

// ================================================================================
//  google
// function a(str) {
//     let reverse=str.split("").reverse("").join("")
//         if(reverse === str){
//         console.log("String is Palindrome")
//         }
//         else{
//             console.log("String is not Palindrome")
//         }
//     };
//     a("level")
//     a("keval")
//     a("skks")
    // =========================================================================

//  Write a JS function that checks whether a passed string is palindrome or not?  

// **********name function

// let prompt = require("prompt-sync")();

// function Palindro(string) 
// {
//     let len = string.length;
//     for (let i = 0; i < len/2; i++) 
//     {
//         if(string[i] != string[len - 1 - i]) 
//         {
//             return "string is not a palindrome";
//         }
//     }
//     return "string is a palindrome";
// }

// const a = prompt('Enter a string: ');
// console.log(Palindro(a));
// ==============================================================================

// WITH ANONYMOUS**********

// let prompt = require("prompt-sync")();

// let Palindro=()=>{
//     const string = prompt('Enter a string: ');
//     const len = string.length;
//     for (let i = 0; i < len/2; i++) 
//     {
//         if(string[i] === string[len - 1 - i]) 
//         {
//             return "string is a palindrome";
//         }
//         else
//         {
//             return "It is not a palindrome";
//         }
//     }
// }

// console.log(Palindro());


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 3.WRITE A JS FUNCTION THAT GENERATES ALL COMBINATIONS OF A String

/*** Named Function ***/

// const prompt = require("prompt-sync")();

// function combination(str) {
//     let len = str.length;
//     let CombinationArr = [];
//     let i = 0;
//     let j = 0;
//     for (i = 0; i < len; i++) {
//         for (j = 0; j < len; j++) {
//             if (i == j) {
//                 CombinationArr.push(str[i]);
//             }
//             else {
//                 CombinationArr.push(str[i] + str[j]);
//             }
//         }
//     }
//     // console.log(CombinationArr);
//     return CombinationArr;
// }

// let String = (prompt("Enter a value : "));

// console.log(combination(String));

// ====================================================================

// ANONYMOUS*************

// function StringDivide(str) {

//     let len = str.length;
//     let arr = [];
//     for (let i = 0; i < len; i++) {
//         if (i == 0) {
//             arr.push(str[i]);
//         }
//         else {
//             arr.push(arr[i - 1] + str[i]);
//         }
//     }
//     console.log(arr);
//     // return arr;
// }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 4.WRITE A JS FUNCTION THAT RETURNS A PASSED STRING WITH LETTERS IN ALPHABETICAL ORDER

// WITH NAMED FUNCTION 
// =============================================================================
function str(string)
{
    let a=string.split('').sort().join('');
    // a.sort();
    return a
}


let prompt= require("prompt-sync")()
let string=(prompt("Enter String:"));
console.log("String is "+string);
let a=str(string)
console.log("Sorting String is "+a);


// ==================================================================================
// WITH ANONYMOUS FUNCTION 

// let str=(string)=>
// {
//     let a=string.split('').sort().join('');
//     return a;
// }
// let prompt= require("prompt-sync")();
// let string=(prompt("Enter String:"));
// console.log("String is : "+string);
// let a=str(string);
// console.log("Sorting String is : "+a);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 5.WRITE A JS FUNCTION THAT ACCEPTS A STRING AS A PARAMETER AND CONVERTS THE FIRST
// LETTER OF EACH WORD OF THE STRING IN UPPER CASE 
