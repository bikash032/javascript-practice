let product=[
    {
        name:"samsung",
        price: 1000,
        discount:10
        
    },
    {
        name:"xiaomi",
        price: 2000,
        discount:10
    },
    {
        name:"iphone",
        price: 3000,
        discount:10
    }
]
product[0].after_discount=product[0].price-product[0].discount/100
//this will add the key:value of object array inside 
console.log(product);
