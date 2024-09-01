let science = 84;
let math = 98;
let social = 30;
let nepali = 70;
let total_percentage = ((science + math + social + nepali) / 400) * 100;
if (total_percentage > 70) {
    if (math > 50 && social > 50 && science > 50 && nepali > 50)
        console.log("you are pass ");

}
else 
{
    console.log("you are fail");
    
}