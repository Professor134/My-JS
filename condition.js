//condition
// let a=9;
// console.log(a);
// if(a==2)
// {
//     console.log(a);
// }
// else
// {
//     console.log("no match"); 
// }

//loop
// for(let i=0;i<10;i++)
//     console.log(i);
// console.log(".");

// let i=1;
// while(i<=10)
// {
//     console.log(i);
//     i++;
// }

// function show(n,s)
// {
//     console.log("hello show",n,"and",s);
//     console.log(`hi ${n} and ${s}`);
// }
    
// const display=()=>
// {
//     console.log("hellp display");
//     return 10;
// }
// show("peter","parker");
// console.log(display()+"hi");

function Mcu()
{
    console.log("hellp mcu");

    function dc()
    {
        console.log("hellp dc");
    }
    return dc;
}
Mcu()();
