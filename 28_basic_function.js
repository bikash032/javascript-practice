let all_users =["apple","ball","cat",123]
all_users[2]="elephant"// this will replace the value indside of array
console.log(all_users);
all_users.unshift("happy")// this will push the value to the 0 index of the array values 
console.log(all_users);
console.log(all_users.length);// this will show the number of values inside the array
 console.log(all_users.includes("apple"))// this will tell either the value is inside array or not and if inside got then returens true
let first_element = all_users.shift();// this will take out the fist(0 index) element of the array
console.log(first_element);
console.log(all_users);
let last= all_users.pop()//this will take  out the last value of array
console.log(last);
all_users.push(123)// this will push the value in array in 0 index value
console.log(all_users);
let mid_data =all_users.splice(2,1)// take out the data of array (2,1)==> 2 is third position data and 1 is how many data from there starting to take out 
console.log(mid_data);
let teke_out =all_users.slice(1,2)
console.log(teke_out);




