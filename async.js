// class teacher
// {
//     constructor(age,name,id)
//     {
//         this.age = age
//         this.name = name
//         this.id = id
//     }
// }

// class member extends teacher
// {
//     constructor(age,name,id,sub)
//     {
//         super(age,name,id,sub)
//         this.sub = sub
//     }
// }

// const m1 = new member(32,"as",98,"bio")
// console.log(m1)

// //async

// console.log("start")
// console.log("order placed")
// for(let i=0;i<1000000000;i++)
// {
//     // console.log("waiting...")
// }
// console.log("end")

// console.log("start")
// console.log("order placed")
// setTimeout(function(){
//     console.log("waiting==")
// },1000)
// console.log("end")


// //promise

// function orderpizza()
// {
//     return new Promise(function(resolve,reject){

//         let pizaready = true;

//         if(pizaready)
//         {
//             resolve("ready pizzza");
//         }
//         else{
//             reject("fail pizzaa")
//         }
//     })
// }

// orderpizza()

//     .then(function(message){
//         console.log(message)
//     })
//     .catch(function(error){
//         console.log(error)
//     })

//     //

    function getdata()
    {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve("done  waiting==")
            },2000)
        })
    }

    async function showdata(){
        console.log("wwaiting")
        const result = await getdata()
        console.log(result)
    }

    showdata()

    function add()
    {
        console.log("addd")
    }

    add()