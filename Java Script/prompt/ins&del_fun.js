// Array in first insert , last insert , first delete,last delete 
let Arr = [1,2,3,4,5];
function FirstInsert(n)
{ 
    Arr.unshift(n); 
    console.log(Arr);
} 

function FirstDelete() 
{
    Arr.shift(); 
    console.log(Arr);
} 

function LastInsert(k) 
{
    Arr.push(k);
    console.log(Arr);
}

function LastDelete() 
{
    Arr.pop(); 
    console.log(Arr);
} 
                                        

const prompt = require("prompt-sync")();
let FI = parseInt(prompt("Enter a First Insert value : "));
FirstInsert(FI); 
let LI = parseInt(prompt("Enter a Last Insert value : ")); 
LastInsert(LI);
FirstDelete();
LastDelete();