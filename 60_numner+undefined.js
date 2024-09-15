const func1=(a,b,c)=>{
    d=a+b+c;
    return d;
}
console.log(func1(1,2));
// as we can see here c is not defined here and firstly that two number are alredy defined and if two number are added the it gives
// the number value as "c" is not defined and second the plus sign is add so if we add the numnber and the undefined then there will
// be NaN (Not A Number)
// as the string and the number it will be concatinated 





// VVIP ====>>>  IF WE WANT TO LEARN THE PROGRAMMING THEN WE MUST LEARN THE BUILDING THE LOGIC NOT AS THE CODDING AS THE FIRST
// PRARIOTY SO  WE NEED TO LEARN THE LOGIC BUILD UP RATHER THEN THE CODDING PRARIOTY.


const func2=(a,b,c)=>{
    d=a+b+c;
    return d;
}
console.log(func2(1,2));
// as this is the another sinerio as when we want  use only three parameter but we sending the argument of only two value then we 
// using third parameter as letting 0 ie c=0, which makes that "num+0=num"
const func3=(a,b,c=0)=>{
    d=a+b+c;
    return d;
}
console.log(func3(1,2));