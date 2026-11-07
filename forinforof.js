const p1 = {
    name : "athira",
    age : 28
}

console.log(p1);

for(let key in p1)
{
    console.log(key);
}

for(let key in p1)
{
    console.log(key,p1[key]);
}


let dt = "asnajksn";

for(let k of dt)
{
    console.log(k);
}