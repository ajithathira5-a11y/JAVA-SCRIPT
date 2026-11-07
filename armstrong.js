let n = 13, s= 0;
let temp = n;
while(n != 0)
{
    // temp = n;
    // r= n%10;
    // s= s*10 + r;
    // n = Math.floor(n/10);

    r = n%10;
    s = s + (r*r*r);
    n = Math.floor(n/10);


}
console.log(s);

if(s == temp )
{
    console.log("arm");
}
else{
    console.log("not");
}