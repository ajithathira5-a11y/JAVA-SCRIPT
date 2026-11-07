function print()
{
    console.log("sa");
}
print();

function printdet(msg)
{
    console.log(msg);
}
printdet("sdas");

function printsss()
{
   return "hiiii";
}

console.log(printsss());

//arrow fcn 

const add = (a,b) => a+b;
console.log(add(1,3));

const sqr = (n)=> n*n;
console.log(sqr(7));

const p = ()=>"dfsaf";
console.log(p());

const greet = (name)=> `hello ${name}`;
console.log(greet("asd"));

const cube = (n)=> n*n*n;
console.log(cube(3));

// const b = (num)=> (num%2 == 0) ? true : false ;
// console.log(b(3));

const oe = (n)=>n%2 == 0;
console.log(oe(3));

