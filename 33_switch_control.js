/**
  what is switch case of controle structure ?
 ==> this  is also the alternative use as the if else case
 this is  not commonly use as the if else case 
 */


let marks_obtain = 500;
let per = marks_obtain / 500 * 100;
switch (true) {  //====> THIS IS FRAME OF SYNTEX 
    case (per >= 80):// ===> DONT FORGET FULL COLON
        console.log("first division with distinction")
        break;       // ===> THIS BREAK WILL THROW PROGRAM TO CHECK ANOTHER CONDITION OR IT WILL STOP THAT CONDITIO TO BE WAIT
    case (per >= 60):
        console.log("first division");// ====> THIS WILL PRINT THE DESIRED STATEMENT 
        break;
    case (per >= 45):
        console.log("second division");
        break;
    case (per >= 32):
        console.log("third division");
        break;
    default:     //=====> THIS IS ALSO SAME LIKE ELSE STATEMENT THAT WILL THROW THE ELSE RESULT 
        console.log("you are failed");   
               // ===> NO NEED TO USE THE BREAK AS IT IS THE LAST EXECUTION OF THE CODE
}


