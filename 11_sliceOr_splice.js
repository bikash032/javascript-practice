// SPLICE ==> TO DELATE THE ARRAY VALUE 
const student_ID = ["s1", "s2",undefined, "s3", "s4", "s5", "s6", "s7"];
console.log(student_ID); 
let student_detail_1 = [
    "RAM",
    "sarlahi",
    "nepal",
    9842852699,
    "sarlahi112@gmail.com"]
student_ID.splice(2, 3,student_detail_1);// THIS WILL DELATE THE INDEX POSITION 2  2==> declear posiotion of index of array(C0OUNTING LIKE 0,1,2)
// and 3 REPREASENT THE NUMBER OF DATA AFTER POSITION 2
// i.e position 3, position 4 and position 5
console.log(student_ID);

// SLICE ==> TO TAKE OUT THE VALUE OF ARRAY OR 
// SLICE IS THE FNCTION FOR ARRAY TO SPLIT THE VALUE AND TO MAKE SEPEERATE 
{
    const student_ID = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s7", "s8"]
    console.log(student_ID)
}
console.log(student_ID)