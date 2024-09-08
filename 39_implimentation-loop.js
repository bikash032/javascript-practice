/*
calculate the after_discount of each product and assaign theem in each products. of array inside object
*/

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
for(i=0;i<product.length;i++){// here product.length is size of array which defines until when the 
    // loops of the array must run
    // here i must be always less then (product.length) because
                            // array is starting from always 0 indexing
    product[i].after_discount=product[i].price-product[i].discount*product[i].price/100
}
// product[1].after_discount=product[1].price-product[1].discount*product[1].price/100
// product[2].after_discount=product[2].price-product[2].discount*product[2].price/100
console.log(product);




