/**
 if else used to give either value is true or false we cannot give any decisionon middle 
  THIS WILL GIVE THE BOOLEAN VALUE RESULT i.e true or false
  ELSE WILL STORE ALL THE FALSEY VALUE LIKE ==> false, null, 0, undefined, "",empty variable,undeclear variable.
  so this type of output condition will be stored in else 

  if will store all the value opposite to else 
  like ==> true, nut null, not 0 ,defined, not "", not empty variable, declear variable 
 */


let science = 84;
let math = 98;
let social = 30;
let nepali = 70;
let total_percentage = ((science + math + social + nepali) / 400) * 100;
if (total_percentage > 70) {
    if (math > 50 && social > 50 && science > 50 && nepali > 50)
        console.log("you are pass ");

}
else {
    console.log("you are fail");

}


