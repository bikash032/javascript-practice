
/**
 we cannot use loop operation inside the object inside
 */ 

let student_details={
    student1:{
     name:"aaa",
     adress: "vvv",
     email : "fff"
    },
    student2:{
    name:"dddd",
    adress: "dfff",
    email: "fgggd"
    }
}


let student_details2=[
    student1={
     name:"aaa",
     adress: "vvv",
     email : "fff"
    },
    student2={
    name:"dddd",
    adress: "dfff",
    email: "fgggd"
    }
]
// we use this type of operator while we upload the big file in the facebook .

// now we want either value or keys from the object data type 
// so to take out the values or key from object we can do
let keys1=Object.keys(student_details)
console.log(keys1);
let values=Object.values(student_details)
console.log(values);
/**
 if we want to run loop inside object to object then it is almost not possible 
 but to operate with them fist we must need to make them as the 
===>> array to object 
after this only we can run loop

so to make from object to object ===>> array to object we can do
 */
/*
*********************************************
*  let keys=Object.keys(student_details)     *
*  console.log(keys);                        * 
*  let values=Object.values(student_details) *
*  console.log(values);                      *
*********************************************/
// this is the important syntex for converting from object to object ===>> array to object 


console.log("helo",student_details.student2)// this symtex is used to take out object to object
                                                // data


console.log("hello2" , student_details2[0].adress);// this syntex will use to take out data from array
                                                  // to object 
