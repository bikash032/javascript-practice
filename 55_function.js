/**
 There are two types of repetation in the code block 
 1. There are multiple time of repeation of logic in same time
 2. There are multiples time logic for multiple time. 
 for eg 
 loop 
 when we want to use multiple time the same task to repeatly done for diffrent places or pages 
 of the program then we make one block of logical code , that block is called finction.
 function are called different name some are methods, macro, events,
 
There are two types of function 
a. built in function===>> the function that are already pre defined 
b. custom function ===>> function that are defined by the users . 
 */
// let takes one examples for declearing the function


function functionName(a, b) {
    // fuction body
    return restult;
}

// lets go by each line 

/* 1. functionName===>> the function name is the unique name or called as the identifier that take as
                    refrence for the calling of the function
                as we can declear the name as like taking the refrence that we are going to operate in
                the body of the function 
                    they are any name but cannot start with number but can be used the number at the
                    end of the name.
 2. parameters  or parenthesis===>> it act as the place holders that allow you to pass the values or
                    or argument into the function when it is called.
                    they are specified inside the parenthesis of the function
      Types of  the parameters
       a. single parameters 
            we can define the function in the single parameter            
*/
function greet(name) {
    console.log("hello," + name);

}
greet("bikash");// as here name is the parameters and bikash is the arguments passed when the function
// is called .
/**
 b. MULTIPLE PARAMETERS===> function can hold multiple parameters that must be seperated by commas
 */
function add(a, b) {
    return a + b;
}
console.log(add(3, 4));
/**
 c.DEFULT PARAMETERS====>> We can assaign defult values to the patrameters. if no argument is  provided for that 
 parameter when the function is called, the defult is will be used.
 */
function greet(name = "bikash") {
    console.log("hello," + name);

}
greet();
greet("sandesh");
/**
 D. REST PARAMETERS===>> Rest parameters allow you to pass an indefinite number of arguments as an array.
            this is useful when we don't know how many arguments will be passed in
            syntex === use ... before the name of the name of parameters.
 */
function sum(...number) {
    return number.reduce((total, number) => total + number, 0);
}
console.log(sum(1, 2, 3, 4));
// here, ...numbers collects all the arguments passed into the function into an array called numbers ,which can be processed
/**
 E. PASSING FUNCTIONS AS THE PARAMETERS(CALL BACK FUNCTION)
 =======>>>> In the java script we can pass the function as the parameters to the other function.
 */
function execute(callback) {
    callback();
}
function sayHello() {
    console.log("Hello!");

}
execute(sayHello);
/**
 what is difference between parameters and arguments ?

 parameters are defined when a function is decleared 
 example==> in function multiply(a,b), a and b are parameters

 arguments are the values passed when the function is called
 example ===> in multiply(2,3), 2 and 3 are arguments

 

 */

/**
 3. FUNCTION BODY 
             the function body contains the actual code that runs when 
             the function is called. As it is included within { }.
             in summary ,
             the funciion body is where all the action happens , containing 
             the logic that defines what the function does. it includes variables
             expression, controls flow statements ,function cells and the returns 
             statement to send back to the calllers.
             Example
let go for the syntex of the function ;
there are three components  of the function they are 
1. function decleration
2. function defination
3. function calling 
in js decleration and defination are together, not same like in c programming 
//1. function decleration 
        */
function name(a, b) {  // this is the function decleration that we start by writing the function and followed by function name 
    // same like the definer as that is to be called at when we want to use and last inside small braces is 
    // paranthisis or argument that must be passed through, that will be anything 
    let sum = a + b;
    return sum;
}



// there are four way for decleration of function they are ;
// 1. Method1:-
function name(a, b) {
    let sum = a + b;
    return sum
}



// 2. Method2:-
const functionName = function (a, b) {
    let sum = a + b;
    return (a + b);
}


// 3. Method3
const functionName1 = () => {  //this is called as the arrow function
let sum =a+b;
return (a+b);
}

// 4. Method4
const anyname={         // this is the object inside the function decleration using the arrow function .
    addnumber:(a,b)=>{
let sum =a+b;
return sum;
    }
}
// or  can add  multiple of the function inside the object let see example
const anyname1={
    addnumber2:(a,b) =>{
        return (a+b)
    },                    // this is making multiple function inside the object
    addnumber3:(c,d)=>{
        return(c+d)
    }
}
// now to access the function inside the object we need use dot function for eg  :-
let callFunctionFromObject= anyname1.addnumber2(10,20); // this is the method for calling of object inside function.
console.log(callFunctionFromObject);


// 2.function defination 
// this is the actual operation or code that we want to do for the program . this is every time inclosed 
// with curley braces . for above let sum = a+b is the drfination of the function.
// also must be followed by the return with sum.
// 3. function calling ;
let a = 20;// this is not the "a" that we make in above function as the function's code block value we can repeat again as the 
// value inside function code block is used for once but we can assume same that name is in anywhere else too.
let b = 30;// this is also same as also for the var also as "var" value inside block scope and global scope are same but this concept 
// is exactly opposite as function follow the block code rules.
let result = name(a, b)// this  is the calling of the fuction that is functionName is "name"
console.log(result);
/* thre are four types of function based on the argument and return
as we already discuss that we need the return function if we want to show something result to the end user.
so some of them are



1. funcuion with argument and return value;



*/
function hello(a, b) { // this consist of arguments as "a" and "b"
    let sum = a + b;
    return sum    // this is the return value

}
let s = 10;
let f = 20;
let success = hello(s, f)
console.log(success);// so the end user can see the value of code that is success=30




// 2. function with no argument and result value:




function sandesh() {  // as this inside that we never put arguments 
    let add = a + b;
    return add     //  but we return the value
}
a = 10; // as this is  the globally value that can be later we can as per as our need 
b = 40;
let end = sandesh()
console.log(end);
/* this is use in js for 
1. encapsulation = they can encapsulate logic or data, providing results based on internal
or global variables without requiring inputs.

2. reusablity = these function can be called multiple times to get consistent results, 
improving code reuse
 
3. simplicity = they simplify the function interferance making the function easy to understand 
and use since no argument is needed.

4. access to global variable= they can leverage globally available data without needing it
passed explicity.
 */


// 3. function with argument and no return value
function apple(t, u) {
    let sum = t + u;
    console.log(sum);
}
t = 20;
u = 30;
apple(t, u)






