function grade(score)
{
    if(score>=90)
    {
        console.log("A grade");
    }    
    else if(score>=80)
    {
        console.log("B");
    }        
    else
    {
        console.log("C");
    }   
}

let s1=87;
console.log(`grade of s1= ${grade(s1)}`);
let s2=45;
console.log(`grade of s2= ${grade(s2)}`);
let s3=95;
console.log(`grade of s3= ${grade(s3)}`);