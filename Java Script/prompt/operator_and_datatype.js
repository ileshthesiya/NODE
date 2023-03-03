// console.log(10+20);
// console.log(10 + "200");
// console.log(10 + '20');
// console.log(10 + + '20');
// console.log(10 + +"20" +20);
// console.log(10 * '20');
// console.log(true+true);
// console.log(true+false);
// console.log(false+false);
// console.log(true + 1);
// console.log(true+10+20/5*false);
// console.log(10+20/5*4-1);
// console.log(20*5/false);
// console.log(true/false);

// = assignment operator
// == comparision operator. compare data
// ===  strickly comparision operator. compare data and datatype
// console.log(10 == 10);
// console.log(10 === 10);
// console.log(10 == '10');
// console.log(10 ==='10');
// console.log(0.1 + 0.2 == 0.3);
// console.log(0.2 + 0.2 == 0.4 );

// Datatypes
// console.log(typeof('Skill'));
// console.log(typeof(10));
// console.log(typeof(10.5));
// console.log(typeof(true));
// console.log(typeof(undefined));
// console.log(typeof(NaN));
// console.log(typeof(null));
// console.log(typeof([]));
// console.log(typeof({}));
// console.log(typeof(100n));
// console.log(typeof(function(){}));
// console.log(typeof(Symbol('A')));


// ============================== 16/11/22 ===========

// console.log("0"==false);
// console.log(false=="0");
// console.log(false==="0");

// var a=1,b=2;
// console.log(a+b);
// console.log(a + +b); // a+ (+b)

// var a=2,b=2,c;
// console.log(a++);
// console.log(++a);
// c=--a && b++;
// console.log(a," - ", b," - ",c);

// =======XOR -> Exclusive OR ^ ==============
// 1 ^ 1 = 0
// 1 ^ 0 = 1
// 0 ^ 1 = 1
// 0 ^ 0 = 0
// console.log(1^1);
// console.log(1^0);
// console.log(0^1);
// console.log(0^0);

// console.log(1^0^1);
// console.log(0^1^0);
// console.log(0^0^0);
// console.log(1^1^1);

// ===========STRING============ 
// var a=10,b=30;
// var str1="ILESH" + a + " THESIYA" + "Str1";
// var str2='ILESH THESIYA' + 'Str2';
// var str3=`ILESH ${a}
//           THESIYA ${"str3"}`;  // Backtick. ES6-templete literal

// console.log(str1);
// console.log(str2);
// console.log(str3);


// ==========VARIABLE==========
// Declare Variable Using -> var , let, const Keyword

// 1.CONST
// const a=10;
// a=20;
// console.log(a);

// 2.LET
// let a=10;
// console.log(a + '10');
// console.log(typeof(a + '10'));
// console.log(a + true);
// console.log(typeof(a + true));

// let a=10;
// let b="10" + "a";
// console.log(b);


// undefined null NaN

// console.log(undefined == undefined);
// console.log(undefined === undefined);
// console.log(null == null);
// console.log(null === null);
// console.log(NaN == NaN);
// console.log(NaN === NaN);
// console.log(null==undefined);
// console.log(null===undefined);
// console.log(null==null);
// console.log(null===null);

// console.log(a);
// const a;

// =================================17/11/2022

// console.log(typeof 0);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof NaN);

// console.log(10*"s"); //NaN

// console.log(); //NaN

// ======================================================================================

// ====================== undefined   NaN     null

// console.log(null == 0);
// console.log(undefined == 0);
// console.log(NaN == 0);
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(undefined == NaN);
// console.log(NaN == null);
// console.log(NaN === null);

/*
            var                                             let

    var keword introduced in "ES1"                let keyword introduced in "ES6"

    var keyword allows the duplicate              let keyword wont allows the duplicate
    variables                                     variables

    variable hoisting issue raised                we can overcome variable hoisting
    with var keywors                              with let keyword

    scope rule break by var keyword               let keyword obeys the scope rule

    global polluting issue raised                 we can overcome global polluting issue
    because of var keyword                        by using let keuword

*/



// var a=10;
// console.log(a);
// var a=20;
// console.log(a);

// let a=10;
// console.log(a);
// let a=20;
// console.log(a);

// let a=10;
// {
//     let a=100;        
// }
// console.log(a);


// let findSimpleInterest; //camel case


// ==================================== 19/11/2022

// =====================Array

// let arr=[10,11,12,13,14,15,16,17];                                
// console.log(typeof (arr));
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[5]);
// console.log(arr["10"]);
// console.log(arr[3.1]);


// ================= LENGHT METHOD
// The length property of an Array object represents the number of elements in that array

// let arr=["ten",11,"twelve",13,14,"15",16,"17"];                                
// console.log(arr);
// console.log(arr.length);
// console.log(arr[1]);
// arr.length = 10;
// console.log(arr);
// console.log(arr.length);
// console.log(arr[9]);
// console.log(arr[5]);
// arr[9]=undefined;
// arr[5]=undefined;
// arr[3.1]=3.1;
// arr["A"]="a";
// console.log(arr);
// console.log(arr[9]);

// let arr=["ten",11,"twelve",13,14,"15",16,"17"];                                
// arr.length=100;
// console.log(arr.length);
// arr['50']="fifty";
// arr[51]=undefined;
// console.log(arr);
// console.log(arr.length);


// let arr1={"A":"a","B":"b"};
// let arr11=["A":"a","B":"b"];
// console.log(arr1);
// console.log(arr11);

// ================================================
//        Push(),pop(),shift(),unshift() Method

// arr_new=[10,11,12,13,14,15,16,17,18,19,20];
// console.log(arr_new[-2]);
// arr_new.push(18);
// arr_new.pop();
// arr_new.shift();
// arr_new.unshift(8);
// console.log(arr_new);


// ===================================
// ================= SPLICE METHOD
// -syntax
    // splice(start,deletecount,item1,item2...itemN)

    // IT SHOW REAL ARRAY
// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];
// arr_new.splice(5);
// arr_new.splice(5,1);
// arr_new.splice(-4,2);
// arr_new.splice(-4,-2);
// arr_new.splice(4,-2);
// arr_new.splice(-3);
// arr_new.splice(0,2,30,31);
// arr_new.splice(0,2,30,31,32,33);
// arr_new.splice(0,arr_new.length,30,31,32,33);
// arr_new.splice(0,0,30,31,32,33);
// arr_new.splice(5,30,31,32,33);
// arr_new.splice(0,5,30,31,32,33);
// arr_new.splice(5,0,30,31,32,33);
// console.log(arr_new)

// IT SHOW DELETED ELEMENT
// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];                                
// console.log(arr_new.splice(2));
// console.log(arr_new.splice(3));
// console.log(arr_new.splice(3,3));
// console.log(arr_new.splice(3,100,21,22,23));


// ================ 21/11/22

//                slice() Method
// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];
// arr_new.slice(2);
// console.log(arr_new.slice(3));
// console.log(arr_new.slice(3,12));
// console.log(arr_new.slice(-3,2));
// console.log(arr_new.slice(-3,-5));
// console.log(arr_new.slice(-5,-3));
// let new_arr=arr_new.slice();
// console.log(new_arr);


//           at() Method
// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];
// console.log(arr_new.at(3));


//          join() Method()
// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];
// console.log(arr_new.join());
// console.log(arr_new.join(""));
// console.log(arr_new.join("-"));
// console.log(arr_new.join("#"));
// console.log(typeof(arr_new.join()));