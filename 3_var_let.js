let a = 10;
console.log(a);// ===> 10 
{
    let a = 20
    console.log(a);// ==> 20
}
{
    let a = 40;
    console.log(a)//  ==> 40
}
// console.log(a); // ==> 10
// here we can see that let inside the block value doesnt change the value of a ouside the block i.e 20
// The process here inside is that when we use console inside the block it execcute inside defined value 
// but lets see using the var krywords
// var a = 10;
// console.log(a);// ==> 10
// {
//     var a = 20;
//     console.log(a)// ==> 20
// }
// {
//     var a = 30;
//     console.log(a)// ==> 30
// }
// console.log(a)// ===> 30 this is the value that is not changable after passing through the block
// so we use var also for the block inside to minimige the storage capacity.


