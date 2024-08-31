// comparision operator is use to compare two or more than two variable.
//      <,>,<=,>=,==,===,!=,!==
//     ==  use to compare the value of the variables
//     ===  use to compare value and data type 
//    != it is as 5!=4 ==> true 
//    !==   it is 5!=="5" ==> true because value 5 integer is not eqauls to data type string "5"

// 1 === '1';   // false, because 1 (number) is not the same type as '1' (string)
// 0 === false; // false, because 0 (number) is not the same type as false (boolean)
// null === undefined; // false, because null and undefined are different types
// '5' !== 5;   // true, because '5' (string) is not the same type as 5 (number)



// 1 == '1';    // true, because '1' is converted to 1 before comparison
// 0 == false;  // true, because false is converted to 0 before comparison
// null == undefined; // true, both are considered equal in loose equality
// '5' != 5;    // false, because '5' is converted to 5 before comparison

// let a = '5';    //The output is false because '5' (string) is converted to 5 (number)
// let b = 5       // for the comparison, and since 5 is not unequal to 5, the result is false
// console.log(a!=5)
// 5. comparision operator 
let x=10;
let y = "10";
console.log(x==y);// true because here the number string value will straight converted into number "10"=10
console.log(x===y);//false because 3 symbol compare data type and value 
console.log(x!=y);//false
console.log(x!==y); // true
console.log(x<y); // false
console.log(x<=y); //true
console.log(x>y);//false
console.log(x>=y);//true