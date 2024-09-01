// let totalUnit=150;
// let money=0;
// if(totalUnit>30){
//     money=money+10*(totalUnit-30)
//     totalUnit=30
// }
// if(totalUnit>20){
//     money=money+8*(totalUnit-20)
//     totalUnit=20
// }
// if(totalUnit>50){
//     money=money+5*(totalUnit-50)
//     totalUnit=50
// }
// money=money+80
// console.log("total money to paid for 150 unit is:",money);

// let totalUnit=150;
// let money = 0;
// if(totalUnit>30){
//     money+=10*(totalUnit-30)
//     totalUnit=30

// }
// if(totalUnit>20){
//     money+=8*(totalUnit-20)
//     totalUnit=20
// }
// if(totalUnit>50){
//     money+=5*(totalUnit-50)
//     totalUnit=50
// }
// money+=80
// console.log("total money:"+money);
let units = 150;
let bill = 0;

// Fixed charge for the first 50 units
if (units > 0) {
    bill += 80;
}

// Charge for the next 20 units at NPR 5 per unit
if (units > 50) {
    if (units <= 70) {
        bill += (units - 50) * 5;
    } else {
        bill += 20 * 5; // Full charge for the next 20 units
    }
}

// Charge for the next 30 units at NPR 8 per unit
if (units > 70) {
    if (units <= 100) {
        bill += (units - 70) * 8;
    } else {
        bill += 30 * 8; // Full charge for the next 30 units
    }
}

// Charge for any remaining units at NPR 10 per unit
if (units > 100) {
    bill += (units - 100) * 10;
}

console.log(`Total electricity bill for ${units} units is: Npr. ${bill}`);
