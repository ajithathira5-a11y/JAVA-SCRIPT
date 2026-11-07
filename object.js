//literals

const ob = {
    name:"athira",
    id:900,
    "course det":"testing"
}

console.log(ob)

for(let k in ob)
{
    console.log(k,ob[k])

}

console.log(ob.name)

ob.name = "sdasdf"

console.log(ob)
console.log(ob["course det"])


delete ob.name
console.log(ob)

//nested object
const p2 = {
    name :"sad",
    id:90,
    ads:{
        city :"koci",
        state:"ker"
    }
}

console.log(p2)
console.log(p2.ads)
console.log(p2.ads.city)

for(let k in p2.ads)
{
    console.log(k,p2.ads[k])

}

console.log("city " in p2)

console.log(Object.keys(p2))


//function

const p3 = {
    name :"sad",
    id:90,
    ads:{
        city :"koci",
        state:"ker"
    },

    salary:function()
    {
        console.log(`salary of ${this.name} is 5k`)
    }
}

console.log(p3)
p3.salary()

for(let i in p3)
{
    console.log(i," ",p3[i])
}

//create objct for student details with properties id name qlfn crs.print all prop. add new prop poy .
// update value of course prop.
// delet prop. 
// iterate all prop and value using for in. 
// add a nested ob, atendence to student detail ansd its prop is ofline and online.
// count the num of prop

const sd = {
    id : 908,
    name : "sdad",
    qlfn : "btech",
    course : "testing"
}

console.log(sd)
sd.poy = 2020
sd.course = "mba"
delete sd.id
console.log(sd)

for(let k in sd)
{
    console.log(k,sd[k])
}

sd.atdc = {
    online : 4,
    ofline : 56
}
console.log(sd)
let count =0
for(let i in sd)
{
    count++
}

console.log(count)

console.log(Object.keys(sd).length)



