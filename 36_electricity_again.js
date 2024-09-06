let bill = 0;
units = 150;
if(units<=50){
    bill=80
}
else if (units<=70){
    bill=80+(units-50)*5
}
else if (units>=100)
    bill=80+(20*5)+(units-100)*8
else  (units<150)
    bill=80+(20*5)+(30*8)+(50*10)
    console.log(`total amount to be paid for ${units} the bill is RS ${bill}`)
    