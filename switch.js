let c=0, a=10, b=2;

key = "/";

switch(key)
{
    case '+' : c = a+b;
    break;
    case '-' : c = a-b;
    break;
    case '*' : c = a*b;
    break;
    case '/' : c = a/b;
    break;
    default : break;
}
console.log(c);