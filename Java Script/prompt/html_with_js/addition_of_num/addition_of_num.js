
window.onload=function(){

    const txt1= document.getElementById("txt1");
    const txt2= document.getElementById("txt2");
    const ans= document.getElementById("ans");
    const btn= document.getElementById("btn");
    
    btn.addEventListener('click',()=>{
        console.log("Button clicks");
        console.log(`${txt1} and ${txt2} `);
        // console.log(+txt1.value + +txt2.value )
        ans.value=(+txt1.value + +txt2.value);
    })
}