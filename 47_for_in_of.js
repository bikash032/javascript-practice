let products=[
    {
        name :"iphone",
    price : 20000,
    discount: 10
    }
]
// 0 index 
products[4]={
    name:"samsung",
    price:30000,
    discount:20
}
console.log(products);// this will give all the object value including the empty slots also

// products ===>> now we got 0 123 4 together 5 index inside products variable
// before going further lets have a look to clearfy about 
 for (let i in products){ 
     let prod=products[i] /// this is the key syntex for === for in loop
     console.log(prod);//==>> from this we can starting the loop 

//     if we print only "i" then it will gives the total number of index after elemenating empty 
//     and undefined index 
}
/* this syntex will give all the keys and values inside the objects of array after elemenating 
 all the undefined or empty index values
 and after we doing this we will perform the loop operation without any error

 ==>>null is also the value so it will shows the index value

conclusion for in loops ===>> this is the syntex that will elemate all the ondefined value to start
for the establishing  clear loop implementation

 */



// for of loops  

for(let prod of products ){
    if(prod){  
        console.log(prod);
        
    }
}
// this syntex will straightly print all the key value of the array

// so this syntex will be more useful to operation  for the loops 

