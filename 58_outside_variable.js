const myName=(a,b,c)=>{
    return(a+b+c);
}
console.log(a); 
// as we think that "a","b","c" is already defined on function but this is not defined because the arguments name that we 
// used inside function is inatialize but  will work within the function block inside only as we cannot use that name outside so, a,b,c are also 
// can be use as the new variable.
// it is because it works as particualr varable that need to define at the function inside only



// AS IT WORKS AS THE BLOCK SCOPE THAT OUTSIDE OF THE BLOCK ITS VALUE WILL BE DIFFERENCE
 // but if we let that particular variable before the execution then the value of execution will be accessiable 
 let a=10;
 let b=20;
 let c= 30;
 const functionName=(a,b,c)=>{
    return(a+b+c)
 }
 console.log(a+b+c);
 // now we can access the value of that function.
 
 
 let result=ball(10,20);// as if we put this before the function then this time it will throw error because it works as the quoe system
 const ball=(a,b)=>{
     let add= (a+b)
     return add;
    }
    // but if we call 24 line here then it will proceed the correct.
console.log(result);


//////   VVIP ==> WE MUST DECLEAR ANY VARABLE BEFRE THE CALLING OF THE FUNCTION.

const addition =(a,b)=>{
let c =a+b;
return c;
}
a=10;
b=20;
 c;// this time the value of c is undefined as here the whole block of funcution works functional variable, which is not accessiable
let sum=addition(a,b)
console.log(c);
// functional variable wroks as like the scope variable which is not accesiable alothough we using "var" insted of "let" 




