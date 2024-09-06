// /**
//  what is loop ?
//  ==> when we want to  repeat  multiple time of the same  ode inside the same block then we use loop.
//  The repeation of multiple time of the same code until the condition satisfied is called as loop.
//  To use the loop for repeation of the code lets find the same pattern of the code which is going to be repeated then use 1 
//  code for them .
//  for using the loop lets go for a example

//  */

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
// // this will print all them but this have the same pattern and same block of code 
//so now we can implement the loop concept to use the code for them;

// // // for(let i = 5;i<=10;i++){
// // //     console.log("%d",i);
// // }
// // before that let clearfy the syntex for implementing the loop 
// /**
 
//  1. loop initilization:
//                       this is the process of that from what number we want to start the loop. 
//                       on top example this is written that we want the code that must start from 1
//          =====>>>>>> i=1     means to start program from 1
//          if i = 5 then it tells that program must start from no. 5 ie 5 will print first and start checking for remaining 5 
//                   other values.
//                     so if condition is true it execute only 
// 2. loop condition check / expression
//                         this is the condition where all the condition to be verified or to make sure that given condition is true 
//                         or false for execution. if the condition is true then it allows to execute and if condition is false then
//                         it stops the execution and it make terminate the execution.
//         ======>>>>>> i<=10 
// 3. loop update 
//                 this is the condtion given to the code that what kind of pattern to be followed.
//         ===>>>> i++;
//                 this means that the given program must be  increasing each time with 1 and must satisfy the check condition
//                 to execution.
//                 if i+=5 then this means the program must be increase by 5 each time and this also wait the program to be varified
//                 for execution

// this three must be in the code block to start the loop if any of them missed then it wont be executed or program goes for 
// infinity.
// if update i.e. i++ missed then program go for infinity.
/*
we use loop in any web site as the structure is repeated in each blocks as by changing the data only
 
just take an example of daraz , eshewa 

types of loops
there are two types of loop according to control statement 
1. entry control loop
2. exit controlled loop

1.entry controlled loop 
let take an example of the film hall that 
before we going to film hall that there are certain condition to be fullfilled and that condition is checked by the security and
if there is true or all the condition is ok then we can enter the hall but exit have no any condition
     Types of entry controlled are
     1. for loop 

*/
let im=1;
for(; ; ){
    console.log(i);
    if(i===10){
        break;}
    }
    i++;
/*
     2. while loop
 
 
 
 2. exit controlled loop 
     let me take an example of shopping center that before we entering market security do not check but all the rules are check before
     the exit same here also the program can run first and the condotion will be checked before the exit, so called exit 
     controlled loop;
     
     Tyoes of exit controlled loop;
     1. do while loop
       this is also same like as the for loop but difference is that if we need to run the code at lest one time before condition 
       checking then we use do while loop. this is not commonly use in javaScript

    we can use it for repeating the table structure where heading data we want to repeat in our loop data.
*/
//syntex for do while loop
let i=1;// but if here is 11 then it will print one time my name and 11 is not less then 10 so this program will terminate.
 do{
     console.log("my name is bikash bishokarma");  
     i++;
 }
 while(i<=10);

/* there are two types of error in javascript 
1. compilation error:
                    this error will be when the formation of code is not fulfilled 
                like above code if i is not defined then it will give compilation error that "i is not defined"
2. running error
                  this error will give if the conditon update is not given to code 
            in above code if i++ is not given then it will give infinite of execution and this type of error is called as the
            running error 
        logical error is given in the running error as logical error bug is very hard to find  and also to solve or debugging.


        if we want to learn fast the programming we must find the source of error as the message of the error itself give where 
error and also the solution of error.

// */