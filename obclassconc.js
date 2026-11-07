//object class concept

class sd
{
    constructor(fname,lname,age,qfcn)
    {
        this.fname = fname
        this.lname = lname
        this.age = age
        this.qfcn = qfcn
    }
dispaly()
{
    console.log(`fname:${this.fname}  lname:${this.lname} age:${this.age} qfcn:${this.qfcn}`)
}

}

let s1 = new sd("ab","cd",9,"btech")
console.log(s1)

s1.dispaly()


//by new keyword. 3 method

const st3 = new Object()
st3.name = "arya"
st3.age = 9
console.log(st3)