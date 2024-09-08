/**
 pattrns in loop
 1
 1 2
 1 2 3
 1 2 3 4
 1 2 3 4 5
 1 2 3 4 5 6                increasing pattern
 1 2 3 4 5 6 7
 1 2 3 4 5 6 7 8 
 1 2 3 4 5 6 7 8 9 
 1 2 3 4 5 6 7 8 9 10

 1 2 3 4 5 6 7 8 9 10 
 1 2 3 4 5 6 7 8 9
 1 2 3 4 5 6 7 8 
 1 2 3 4 5 6 7 
 1 2 3 4 5 6 
 1 2 3 4 5                 decreasing pattern
 1 2 3 4 
 1 2 3
 1 2  
 1  

 P
 P R
 P R O
 P R O G
 P R O G R
 P R O G R A
 P R O G R A M
 P R O G R A M M
 P R O G R A M M I
 P R O G R A M M I N
 P R O G R A M M I N G
 */
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
/*  proedure for operating this syntex;
here i is the initiliazation of the array; and i<=10 id the condition to check and  i++ is the 
update of the operationg value as i++ will gies the value each time adding 1;
so this loop will run until the increasing value of i and which makes true the value while checking
the condition.
*/
for (let j = 1; j <= 10; j++) {// this line will hold as per there mentioned that until when loop
                              // from outer loop can controlled i.e 1==> 10 times
    let html = "";// this is just the starting of the iteration which value is empty every time 
    for (k = 1; k <= j; k++) { // THIS line will run while checking until the limit of i value generation
        html += k + " ";// this will concatinate the value of first loop and second value of second loop 

    }
    console.log(html); // this will print as long as the program terminate 
}

// 
