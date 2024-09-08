let products = {
    product1: {
        name: "samsung",
        price: 1000,
        discount: 10
    },
    product2:{
        name: "xiaomi",
        price: 2000,
        discount: 10
    },
    product3: {
        name: "iphone",
        price: 3000,
        discount: 10
    },

}
let product5 = {
    name: "xperia",
    price: 4000,
    discount: 20
}

let product4 = {
    name: "xenon",
    price: 3500,
    discount:15
}
products.product5 = product5
products.product4=product4
products={
   product1:products.product1,
   product2:products.product2,
   product3:products.product3,
   product4:products.product4,
   product5:products.product5,
   
}
// let new_arrivals=[]
// new_arrivals.product5=product5
// products.new_arrivals.push(product5)

let arr = Object.values(products)

// console.log('sgffs',arr);
let after_discount
let HtmlTable="";
let j = 1;
for(let i in arr){
let brand = arr[i]
console.log('dkbndhh',brand);

    brand.after_discount=brand.price-(brand.price*brand.discount)/100
    HtmlTable+=`<tr>
    <td>${j++}</td>
    <td>${brand.name}</td>
    <td>Npr. ${brand.price}</td>
    <td>${brand.discount}</td>
    <td>Npr. ${brand.after_discount}</td>
    <tr>`
}
// console.log("aaaaa",brand);
document.getElementById("Tablebody").innerHTML=HtmlTable














