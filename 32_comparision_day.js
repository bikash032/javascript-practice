/* 
to print the value by comparision of the day if 
sarurday - sunday==> holyday
monday - wednesday ==>> workday
friday  ==> weekend
*/

let input = "friday"
if (input === "friday" || input ==="sunday") {
    console.log("this day are holyday");
} 
else if (input === "monday" || input=== "tuesday" || input==="wednesday" || input==="thrusday") {
    console.log("this day is work day");
}
else if (input==="friday") 
    {
    console.log("week end");
}
else{
    console.log("you are out of content ");
    
}

