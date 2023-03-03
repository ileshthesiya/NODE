// window.onload=function(){
//     let arr=[]

//     const txt1=document.getElementById("txt1")
//     const btn=document.getElementById("btn")
//     const ans=document.getElementById("ans")

//     btn.addEventListener('click',()=>{
//     arr.push(txt1.value);
//     console.log(arr);
//     ans.value=(arr);
//     })
// }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


window.onload=function(){
    let arr=[];
    const txt1=document.getElementById("txt1");
    const btn=document.getElementById("btn")
    const ans=document.getElementById("ans")

    let counter=1;
    let object={};
    btn.addEventListener('click',()=>{
        object={
            "key":counter++,
            "value":txt1.value
        }
        arr.push(object);
        console.log(arr);
        ans.value=(arr);
    })
}