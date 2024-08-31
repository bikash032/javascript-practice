let student_information = [];
let students = [
    [1, 2, 3, 4, 5, 6, 7],
    ["bikash", 
        "udayapur",
        "NEPAL",
        97066907843,
        "bishokarma1996@gmail.com"]]
let student_detail_1 = [
    "RAM",
    "sarlahi",
    "nepal",
    9842852699,
    "sarlahi112@gmail.com"
]
let student_1 = {
    name: "bikash bishokarma",
    age: 29,
    sex: "MALE",
    adress: "udayapur",
    contact: 9706607843,
    email: "bishokarma1996@gmail.com",
    isEmployed: true
}
let student_3 = {
    name: "sandesh",
    age: 25,
    sex: "male",
    adress: "butwal",
    contact: 908765432,
    isEmployed: true
}
student_information.push(students, undefined, student_detail_1, student_1, undefined)// this undefined value is in (1,1) position of
console.log(student_information);                                                // so later we can push in that position 
console.log("______________")
console.log('') // is to create gap between                                                   //  another array or object

student_information[3];
console.log(student_information);
console.log("-------------")
student_information.splice(1, 1, student_3);// first delate the item of position (1,1)and add that place student_3
console.log(student_information); // at desirable position 
console.log(student_information);
console.log("*********************")
let student_4=[
    1,2,3,4,5,6,7,8,9,10
]
student_information.splice(1,4,student_4);
console.log(student_information);