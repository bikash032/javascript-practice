/* when we write program, we calculate the costing to the program . The costing of programs are
1. HOW MANY WE USE RESOURCES 
2. HOW MANY LOOPS THAT WE USE IN PROGRAM
3. HOW MANY ITERATION WE USE IN PRIGRAM
4. HOW MANY SIZES OF RESOURSES WE USES 
then we finalize all of above and we calculate them. 

based on the cost of program we catogoriez them into two types
1. BEST CASE SENERIO

2. WORST CASE SENERIO==> THIS BELOW CASE IS WE USED AS THE WORST CASE OF SENERIO
 

 */
let marks_obtain=400;
let per = marks_obtain / 500 * 100;
if (per >= 80) {
    console.log("first division with distinction");
} else {
    if (per >= 60) {
        console.log("first division");
    } else {
        if (per >= 45) {
            console.log("second devision");
        }
        else {
            if (per >= 32) {
                console.log("third devision");
            }
            else {
                if (per < 32) {
                    console.log("sorry you are fail");

                }
            }

        }
    }

}

/* THIS ABOVE CASE IS CALLED AS THE WORST CASE SRNARIO
TO OVER COME THIS WE USE 



IF ELSE IF LADDER

 */

