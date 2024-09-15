// there is only one return  statement of the function at a time.
const hello=(a,b)=>{
    let sum = a+b;
    let sub=a-b;
    return sum,sub
    } 
    a=20;// this all syntex is wrong for the execution so we cannot use this syntex 
    b=10;
    let value=hello(a,b);
    console.log(value);
    // as this problem will be solved by the object inside the function;
    // we can use the global variable concept as 
    
    a=20;
    b=10;
    let add,sub,multi,div;
    const total=(a,b)=>{
        add=a+b
        sub=a-b
        multi=a*b
        div=a/b
    
    }
    let allvalue=total(a,b)
    console.log({add});
    console.log({sub});
    console.log({multi});
    console.log({div});