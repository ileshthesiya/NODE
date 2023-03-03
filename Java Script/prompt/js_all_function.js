// 22/11/2022
// ==================================== THEORY ========================================
// //     function
// //     ****
// //         business logic called as function
// //         functions are used to reuse the business logic
// //         we have following types of functions upto "ES13"
// //         1) named functions
// //         2) anonymous functions
// //         3) rest parameters in functions
// //         4) default parameters in functions
// //         5) optional parameters in functions
// //         6) generators
// //         7) constructor functions
// //         8) IIFE  (Immidiate Invokable functional Expressions)  

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ============= 1.NAMED FUNCTION

//     the function with the particular name called as named function
//     Syntax

//     1) function definition
//     2) function calling

// function definition

//    function functionname(arg1,arg2,arg3,arg4,......argn){
//        business logic
//    }
// function calling

//    functionname(param1,param2,param3,param4,.....paramn);
// ===================================================================================
// ===================================================================================

// TASK 1:-

// function fun_one(){
//     return "welcome to named functions";
// }
// console.log( fun_one() );  

// =======================================================================

// function fun_one(){
//     return "welcome";
// }
// console.log( fun_one );
// ===================================================================

// TASK 2:-

// function fun_one(arg1, arg2, arg3) {
//   console.log(arg1, arg2, arg3);
// }
// fun_one("Angular13","NodeJS","MongoDB");
// fun_one("ReactJS","NodeJS");
// fun_one();
// fun_one(undefined, "NodeJS");
// fun_one(null, null, null);
// fun_one(null, " ",null);
// fun_one(null, {},[]);
// ===========================================================================

// TASK 3:-

// function fun_zero() {
//   console.log("inside  fun_zero()");
//   return "Hello";
// }
// function fun_one() {
//   console.log("inside  fun_one()");
//   return fun_zero();
// }
// function fun_two() {
//   console.log("inside  fun_two()");
//   return fun_one();
// }
// console.log(fun_two());
// =========================================================================

// TASK 4:-

// function fun_one() {
//     return "Hello";
//   }
//   function fun_two() {
//     return fun_one;
//   }  
//   console.log(fun_two()());

// =================================================================================

// TASK 5:-
  
  // function fun_one(arg1, arg2, arg3) {
  //   console.log(arg1(), arg2(), arg3());
  //   // console.log(arg1, arg2, arg3);
  // }
  // function fun_two() {
  //   return "Hello_1";
  // }
  // function fun_three() {
  //   return "Hello_2";
  // }
  // function fun_four() {
  //   return "Hello_3";
  // }
  // fun_one(fun_two, fun_three, fun_four);
//  ==============================================================================

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  ============ 2. ANONYMOUS FUNCTION
//  The function without name called as anonymous function.
//  Anonymous function also called as "Arrow function","Lamda function","Callback function"
//  We will represent arrow function with "=>"

//  Syntax:
//  1.Function defination 
//   var/let/const variablename=(arg1,arg2...argN)=>{ statements }

//  2.Function Calling
//  variablename(para1,para2....paraN)

// console.log(()=>{})

// Task 1:
    // let fun_one=()=>{
    //   return 'Hello';
    // }

    // console.log(fun_one());

// ==============================================================================

// Task 2: Single statement
    // let fun_one=()=>"Hello"
    // console.log(fun_one());

// ==============================================================================

// Task 3: Syntax with Parameter
    // let fun_one=(str)=>`World ${str}`;
    // let str="Hello";
    // console.log(fun_one(str));

// ==============================================================================

// Task 4: Function into function / Chaining function
    // let fun_one=()=>{
    //   return ()=>{
    //     return ()=>{
    //       return "Hello"
    //     }
    //   }
    // }

    // console.log(fun_one()()());

// ==============================================================================

// Task 5:
    // let fun_two=()=>'Hello_fun_2';
    // let fun_one=(arg1,arg2,arg3)=>{
    //   // console.log(arg1);
    //   console.log(arg1(),arg2(),arg3());
    // }
    
    // fun_one(()=>{return "Hello1"},
    //         fun_two,
    //         ()=>"Hello_3");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ======= 3. DEFAULT PARAMETER IN Function
//  While defining the function ,we will initilize argument's with default value
// This concept introduce in ES6

//  TASK:1
// function fun_one(arg1="hello_1",arg2="hello_2",arg3="hello_3")
// {
//     console.log(arg1,arg2,arg3);
// }
// fun_one();
// fun_one("Skill");
// fun_one("H-1","H-2","H-3");
// fun_one("Welcome_1","Welcome_2","Welcome_3","Welcome_4");
// fun_one(undefined,undefined,undefined)
// fun_one(null,null,null)
// fun_one(undefined,undefined,"H-3");

// =================================================================================
// TASK:2
// function fun_one(arg1,arg2="Hello_2")
// {
//     console.log(arg1,arg2);
// }

// fun_one();
// fun_one("hello_1");
// fun_one(undefined,undefined);
// fun_one(null,null);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ======= REST PARAMETER IN FUNTION / SPREAD OPERATOR

// By using rest parameter ,we can hold/store more than one value 
// Introduce in ES6
// We will represent rest parameter with "..." operator
// "..." Operator called as spread operator 
// We can only have "ONE" spread operator per function.
// Position of spread operator should be last in occurences. 

// TASK:1
// function fun_one(arg , ...arg1)
// {
//     console.log(arg);
//     console.log(arg1);
// }

// fun_one();
// fun_one("hello_1");
// fun_one("hello_1","hello_2");
// fun_one("hello_1","hello_2","hello_3");
// fun_one(undefined,undefined);
// fun_one(undefined,null)

// ==============================================================================

// =======TASK:2
let arr1=[10,20,30];
let arr2=[100,200,300];
let copy_array;
// console.log(copy_array=[...arr1,arr2]);
// console.log(copy_array=[...arr1,...arr2]);
// console.log(copy_array=arr1);
// console.log(copy_array=arr1.slice(0));
arr1.push(40);
// copy_array.push(50);
console.log(arr1);
console.log(copy_array);
console.log(arr1==copy_array);