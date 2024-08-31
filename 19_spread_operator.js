
// spread operator is used to call the all value from the desired object,array or json to the wanted location
let adminUser ={
    name:"bikash",
    adress: "udayapur",
    email: "bishokarma1996@gmail.com",
    age : 29

}
let user = {
    ...adminUser, // this will recall the all  value from first object container
    contact : 987654321,
    position:"manager"
}
console.log(adminUser);
console.log(user);

