/* what is object distractature function?
This function is used to abstract the value of array or object or json and that value directly assign to the variable. 
for example 
*/

let adminUser ={
    name : "sandesh",
    nationality : "NEPALESE",
    gender:"male",
    occupation : "student"
}
let user = {
   ...adminUser,
    name: "bikash",
    adress : "UDAYAPUR",
    email : "bishokarma1996@gmail.com",
}
let{adress,email, ...other} = user;/* all the value of adress,email will be staraight stored in the variable adress,email 
and the rest of the values of nationality,gender,occupation,name will be assign in the variable "other"==> ...other  */
console.log(other);
/* now we can use adress email and "other" new variable for anywhere
so this helps to distruction of object value into variable , so callled object distructure*/







