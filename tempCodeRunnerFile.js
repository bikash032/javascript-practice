let clothes=[
    {
      brand : "gucci",
      price:2000,
      sale:20  
    },
    {
        brand : "zara",
        price:3000,
        sale:20 // so this is the case that we cannot implement the loop logic if therer is 1 
        // undefined 
    },
    {
        brand : "nike",
        price:4000,
        sale:20
    }
]
let after_sale
for(let l=0;l=clothes.length;l++){
     clothes[l].after_sale=clothes[l].price-(clothes[l].price*clothes[l].sale)/100
}