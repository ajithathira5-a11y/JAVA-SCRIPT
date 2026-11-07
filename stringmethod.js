let st1 = "heYUIlo wel"
let st2 = "  hiii"

console.log(st1.length)

console.log(st1.length)
console.log(st1.concat(" ",st2))
console.log(st1.slice(3,5))
console.log(st1.toLowerCase())
console.log(st1.toUpperCase())
console.log(st1.startsWith("h"))
console.log(st1.endsWith("o"))
console.log(st2.trim())
console.log(st1.includes("e"))

console.log(st1.split(""))
console.log(st1.replace("he","okk"))

//practise

//convet all strings of array to uppercase
const aaa = ["mango","kw","ppl","apl"]
const a1 = aaa.map(el=>el.toUpperCase())
console.log("uppercase  a1 "+a1)

//get length of each word
for(let p of aaa)
{
    console.log("length of word "+p +" "+p.length)
}

aaa.map(s=>console.log(s))  //easyway

//filter words with length greater 4

const fil = aaa.filter(f=>f.length>4)
console.log("filetr  "+fil)

//value 
let value = "welcome t0 JS"
console.log(value.length)
console.log(value.toUpperCase())
console.log(value.replace("JS","java script"))
//extract test from software testing
const dd= "software testing"
console.log(dd.slice(9,13))

// //reverse string, need to split recverse and join
let s = "sun moon"
// const rv = s.split("")
// rv.reverse()
// console.log(rv)
// const t = rv.join("")
// console.log(t)

const r = s.split("").reverse().join("");
console.log(r)

//count vowels in string
let vo = "aepp"
let count = 0
for(let k of vo)
{
//    switch(k)
//    {
//     case "a":
//     case "e" :
//     case "i":
//     case "o":
//     case "u":
//         count++
//    }

if(k=="a" || k=="e" ||k=="i" || k=="o" || k== "u")
{
    count++
}
    
}
console.log("count "+count)

const vov = vo.split("").map((k)=>{
    if(k=="a" || k=="e" ||k=="i" || k=="o" || k== "u")
    {
        count++
    }
})
console.log("count "+count)


//palindrom

let pal = "malayalam"
let s1 = pal.split("").reverse().join("")
if(pal===s1)
{
    console.log("pal "+s1)
}
else{
    console.log("not pal"+s1)
}

//count number of word
let wo = "hi hlo  gd nyyt"
let w1 = wo.split(" ")
console.log("w1 " + w1.length)

//find largest  word 
let w2 = wo.split(" ").reduce((ww,c)=>ww.length>c.length?ww:c)
console.log("l word " + w2)

//search element
let ell = ["kllk","878y","asd"]
let t = ell.includes("kllk0")
if(t)
{
    console.log("pres")

}
else{
    console.log("not pr")

}











