let products ={
    name:"iphone",
    price: 123000,
    discount: null,

}
 let after_discount =products.price-products.discount*products.price/100
if(products.discount){
  

    console.log("actual_price:",after_discount);
  
}
console.log("original price:",products.price);

// else{
//     console.log("product_price:",products.after_discount= products.price)// this will execute because if we never give discount then 
//                                                                        //the price must be original price 
// }
/* if we want to execute only else then we can ddefine on if place about the condition of else
for eg !(product.discount) the print the original price 

we can make plenty of if else statement inside either if or else 

*/
if(expression){
    if(expression1){
        if(expression2){
            if(expression3){
                if(expression4){
                    if(expression5){
                        if(expression6){
                            if(expression7){
                                //THIS IS CALLED NESTING BUT THIS MAKES PROGRAM SLOW 
                                //EXAMPLE GIVEN BY SANDESH TEACHER ABOUT E-KANTIPUR
                            }
                        }
                    }
                }
            }
        }
    }
}