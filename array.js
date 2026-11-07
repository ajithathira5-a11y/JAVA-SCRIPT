const ar = ["pl","sel","jmtr"];

console.log(ar);

console.log(ar[1]);

for(let k of ar)
{
    console.log(k);
}

ar[1] = 43324;
console.log(ar);


const st1 = {
    name : "ac",
    age : 23,
    ql : "bt"
}

const st2 = {
    name : "dsa",
    age : 33,
    ql : "fcscft"
}

const st3 = {
    name : "fgsd",
    age : 123,
    ql : "vfdxv"
}

const ar2 = [st1,st2,st3];

console.log(ar2);

for(let i of ar2)
{
     console.log(i,ar2[i]);

    //  console.log(i);

}


for(let i of ar2)
{
    //  console.log(i,ar2[i]);

     console.log(i);

}

///array operations methods

const aaa = ["mango","kw","ppl","apl"];

console.log(aaa);
console.log(aaa.length);

console.log(aaa.pop());
console.log(aaa);

console.log(aaa.push("carot"));
console.log(aaa);

console.log(aaa.shift());
console.log(aaa);

console.log(aaa.unshift("dfsf"));
console.log(aaa);

delete aaa[1];
console.log(aaa);

aaa[1] = "87687";
console.log(aaa);

const ar3 = [321,34234,2321]
console.log(aaa.concat(ar3));

console.log(aaa.includes("ppl"));
console.log(aaa);

console.log(aaa.includes("34234"));
console.log(aaa);

console.log(aaa.slice(1,2));

console.log(aaa.reverse());

const arr = [3,22,6,5,9,87,4,4,3,5]
console.log(aaa.sort())
console.log(arr.sort((a,b)=>a-b))
console.log(arr.sort((a,b)=>b-a))


//map
const ab = [2,23,5,4,2]
const newar = ab.map(num => num*2)
console.log(newar)

//filter
const fil = ab.filter(num=>num%2==0)
console.log(fil)


//reduce
const sum = ab.reduce(((a,c)=>a+c),0)
console.log(sum);



const exp = [321,32,123123,23]
const new1 = exp.map(num=>num+2000)
console.log("add 2k   "+new1);

console.log("exp   "+exp);


const new2 = exp.map(num=>num<15000?num+2000:num-2000)
console.log("second = "+new2)


const new3 = exp.filter(num => num>40000)
console.log("greater 40k  = "+new3);


const s = exp.reduce(((a,c)=>a+c),0)
console.log("sum  "+s);

const ma = exp.reduce(((a,c)=>a>c?a:c))
console.log("max  "+ma);



















