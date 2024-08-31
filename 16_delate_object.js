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
delete product.quantaty;
delete product_1.price;
console.log(product);
console.log(product_1);
