const fs =require("fs");
// fs.readFile("file.txt","utf8",(err,data)=>{
//     if(err) console.log(err);
//     else {console.log(data);}
// });

// let content="Having Fun!!!!!!! writeFileSync";      //create new file
// fs.writeFile("file1.txt",content,"utf8",(err)=>{
//     if(err) console.log(err);
//     else console.log("file writing done....");
// });

// data=fs.readFileSync("file1.txt","utf8");
// console.log(data);

// let content = "hello";
// fs.writeFileSync("file1.txt",content,"utf8");       // change file content(in file1.txt)

// fs.rename("file1.txt","file12.txt",(err)=>{            // change file name
//     if(err) console.log(err);
//     else console.log();
// })

// fs.unlink("file.txt",(err)=>{               // delete file
//     if(err)console.log(err);   
// });

// fs.stat("file.txt",(err,data)=>{            // file nu Statastic ava like file detail,file size
//     if(err)console.log(data)
//     else 
//     console.log(data);
// });

fs.copyFile("file1.txt","file2.txt",(err)=>{        // create copy file of another file
    console.log("opss",err);
})