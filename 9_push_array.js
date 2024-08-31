

let student_information=[];
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
let student_3 ={
    name : "sandesh",
    age :25,
    sex : "male",
    adress : "butwal",
    contact : 908765432,
    isEmployed : true
}
student_information.push(students,student_1,student_detail_1,student_1);
console.log(student_information);
student_information.unshift(student_1);
console.log(student_information);
student_information[2]=student_detail_1;
console.log(student_information);
student_information[1]= student_information.push(student_3);