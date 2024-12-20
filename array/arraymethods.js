// const coding=["js","riby","java","python","cpp"]

// const values =coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(values)


const nums=[1,2,3,4,5,6,7,8,9,10]

// const values=nums.filter((num)=>{
//       return num>4
// })
//     console.log(values)

const num1=[]
nums.forEach((num)=>{
    if(num>4)
        num1.push(num)

})
console.log(num1)

const books=[
    {
        title:'book one',
        genre:"fiction",
        publish:1299
    },

    {
        title:'book one',
        genre:"history",
        publish:2222
    }
]

const userbooks=books.filter((bk)=>{
    return bk.genre=="history"
    

})
console.log(userbooks)

const userbooks1=books.filter((bk)=>{
    return  bk.publish=="1299"
})


console.log(userbooks1)

const mynum=[11,12,13,14,15,16,17,18,19]

// let a=mynum.map((item)=>{
//     return item+10
// })

// console.log(a)  

//yhan second method sirf first method wale result ke upper hi work krega 
let newnum=mynum.map((num)=>num*10 )

.map((num)=>num+10)
console.log(newnum)

//reduce method:

const a=[1,2,3,4]

const myvalue=a.reduce((res,cur)=>{
    console.log(`acc${res} and currval:${cur}`)
    return res+cur
},0)
console.log(myvalue)

const shopping=[{
    item:"js course",
    price:2000

},{
    item:"php",
    price:3000

},
{
    item:"mern",
    price:4000

}
]

const newobj=shopping.reduce((res,cur)=>{
    return res+cur.price
},0)
console.log(newobj)