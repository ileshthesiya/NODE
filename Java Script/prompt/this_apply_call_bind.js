// let student ={
//     name:"Ilesh",
//     age:21,
//     course:"Nodejs",
//     getStudentName:function(){
//         console.log(this);
//         return this;
//     }
// }

// console.log(typeof this);
// console.log(typeof student);
// console.log(student.getStudentName())
// console.log(`Age is ${student.age}`)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ======= TO ACCESS PROPERTY OF STUDENT1 TO STUDENT2
// ======= GENERIC METHOD BY CALL

// let student1 ={
//     name:"Ilesh",
//     age:21,
//     course:"Nodejs",
// }

// let student2 ={
//     name:"Keval",
//     age:21,
//     course:"Nodejs",
// }

// let getStudentName=function(){
//     console.log(this.age);
// }

// getStudentName.call(student1);
// getStudentName.call(student2);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ======== CALL,APPLY,BIND

// let student1 ={
//     name:"Ilesh",
//     age:21,
//     course:"Nodejs",
// }

// let student2 ={
//     name:"Keval",
//     age:21,
//     course:"Nodejs",
// }

// let getStudentName=function(city,state,country){
//     console.log(this.name+"-"+city+"-"+state+"-"+country);
//     console.log(this.name)
// }

// getStudentName.call(student1,"Surat","Gujarat","India") // Call Method
// getStudentName.call(student2);   // Call method

// getStudentName.apply(student1,["Surat","Gujarat","India"])  //apply meyhod

// let useAfter=getStudentName.bind(student1)   // bind method
// useAfter()                                   // bind method

