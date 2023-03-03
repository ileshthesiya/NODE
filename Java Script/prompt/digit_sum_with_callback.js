// =========================================RECURSUN==================================

// function getSum(n)
// {
//     var sum = 0;
//     while (n != 0) 
//     {
//         sum = sum + n % 10;
//         n = parseInt(n / 10);
//     }
//     function finsum()
//     {
//         var nn = sum
//         var nsum = 0;
//         while (nn != 0) 
//         {
//             nsum = nsum + nn % 10;
//             nn = parseInt(nn / 10);
//         }
//         return nsum
//     }
//     return finsum()
    
// }

// console.log(getSum(9898745848))



// ===========================CALL BACK FUN===============================
// // =====================================

let total = (number, callback) => 
{
    return callback(number);
}

let sum = (number1) => 
{
    
    let sum1 = 0;
    console.log(number1);
    while (number1 != 0) 
    {
        sum1 = sum1 + number1 % 10;
        number1 = parseInt(number1 / 10);
    }
    return check(sum1);

}

let check = (value) => 
{
    
    if (value <= 9) {
        return value;

    }                          //vimo***
    else {
       return sum(value);
    }
}


let number = 9510543636;
console.log(total(number, sum));


// ==================================////true///=========================
// ===========================


// let sum = (number1) => 
// {
//     let sum1 = 0;
//     console.log(number1);
//     while (number1 != 0) 
//     {
//         sum1 = sum1 + number1 % 10;
//         number1 = parseInt(number1 / 10);
//     }
//     if (sum1 > 9)
//     {
//         return sum(sum1);
//     }
//     return sum1;
// }

// let total = (number, callback) => 
// {
//     if(number <= 9)
//     {
//         return number;
//     }
//     return callback(number);
// }
// console.log(total(9999999988, sum));
// console.log(total(1, sum));
// console.log(total(12, sum));