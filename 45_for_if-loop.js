// products = [
//     {
//         name: "samsung",
//         price: 1000,
//         discount: 10,

//     },
//     {
//         name: "xiaomi",
//         price: 2000,
//         discount: 10
//     },
//     {
//         name: "iphone",
//         price: 3000,
//         discount: 10
//     }]
// let after_discount;

// for (let i = 0; i < products.length; i++) {
//     products[i].after_discount = products[i].price - (products[i].discount * products[i].price) / 100;

// }
// console.log(products);
// so for this we can use any loop if only there is no any empty or any undefined values located.
// suppose if there is
let clothes=[
    {
        brand : "Gucci",
        price:2000,
        sale:30 
    },
    {
        brand : "Zara",
        price:3000,
        sale:10 // so this is the case that we cannot implement the loop logic if therer is 1 
        // undefined 
    },
    {
        brand : "Nike",
        price:4000,
        sale:10
    }
]
let j=1;
let HtmlTable="";
let after_discount;
for(let i in clothes)
{
    let prod=clothes[i]
prod.after_discount=prod.price-(prod.price*prod.sale)/100
    HtmlTable+=`<tr>
    <td>${j++}</td>
    <td>${prod.brand}</td>
    <td>Npr. ${prod.price}</td>
    <td>${prod.sale}</td>
    <td>Npr. ${prod.after_discount}</td>
    <tr>`
}
document.getElementById('tbody').innerHTML=HtmlTable
//

// so over come this we check either there is defined all object or not 

