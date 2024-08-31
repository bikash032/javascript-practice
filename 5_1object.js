
//this is the object data type 
//syntex is let/var identifier={key:value,key:value}
//object is defined as the key value pair that defined inside curley braces 
// 

let  a = {
    name: "bikash bishokarma",
    age : 29,
    sex : "MALE",
    adress : "udayapur",
    contact : 9706607843,
    email : "bishokarma1996@gmail.com",
    isEmployed : true,


greet:function(){
console.log("hello this is my name: " + this.name)}
}
console.log(a.isEmployed);
a.greet();
console.log(typeof isemployed);