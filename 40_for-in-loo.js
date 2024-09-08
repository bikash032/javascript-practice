/*
As we can add key:value element inside of the object of the array by 
3 of the above discussed loop but this will be happen if there is not empty object.
as we can make arary empty  by assaigining empty object also.
*/
let array=[1,2,3,4,5,6,7]
array[10]=10// this will make 3 items empty
console.log(array);
// so here we cannot perform that loop operation. for this we can use 
// for in and for loop out operation