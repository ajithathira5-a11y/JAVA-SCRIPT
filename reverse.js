let n = 121, s= 0;
let     temp = n;

while(n != 0)
{
    r= n%10;
    s= s*10 + r;
    n = Math.floor(n/10);
}
console.log(s);

if(s == temp )
{
    console.log("pali");
}
else{
    console.log("not");
}

