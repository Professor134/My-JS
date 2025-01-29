function show(n,s)
{
    console.log("hello show",n,"and",s);
    console.log(`hi ${n} and ${s}`);
}
    
const display=()=>
{
    console.log("hellp display");
    return 10;
}
show("peter","parker");
console.log(display()+"hi");