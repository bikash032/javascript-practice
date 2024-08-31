let product = {
    brand:'APPLE',
    model: 'iphone 14',
    discount : 10,
    quantaty : 30,
    price : 120000,
}
let product_1={
    brand:'APPLE',
    model: 'iphone 15',
    discount : 15,
    quantaty : 50,
    price : 130000, 
}

let after_discount=product.price-(product.discount*product.price)/100;
product.after_discount=after_discount
console.log(product);