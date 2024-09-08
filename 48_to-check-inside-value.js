let products= [
        {
            name: "samsung",
            price: 1000,
            discount: 10,
    
        },                         // here index starting from 0 - 2
        {
            name: "xiaomi",
            price: 2000,   
            discount: 10
        },
        {
            name: "iphone",
            price: 3000,
            discount: 10
        }]
        let new_stock={
            name:"nokia",
            price:4000,
            discount:20
        }
        let new_arraival={
            name:"xaperia",
            price:5000,
            discount:20
        }
        products.push(new_stock)// this will push object inside array
        products[4]=new_arraival

        /*but if we assaign another undefined object inside array then we need to identify that
            either the given product is inside array or not so for that
        */
       let after_discount
       for(i=0;i<products.length;i++){
        let prod=products[i];//// this prod will clearfy for whic index we want to use 
    if(prod){
        prod.after_discount=prod.price-prod.price*prod.discount/100
    }
       }
       console.log(products);

    let keys=Object.new_arraival
    console.log(keys);
    

       
       