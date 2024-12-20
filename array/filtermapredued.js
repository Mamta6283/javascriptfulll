// const coding=[10,20,30,40,50,60,70,80,90]
// const value=coding.forEach((item)=>{
//           // console.log(item)
//               return item       //for each will return anything 
// })
// console.log(value)


// let nums=coding.filter((num)=>{
//          if(num<=70){
//             console.log(num)
//          }
//          else{
//             console.log("they are bigger",num)
//          }
//          return num<70

// })




//new array mein is tarrek se fill kar skte hai 
// const newnums=[]

// coding.forEach((num)=>{
//     if(num<70){
//         newnums.push(num)
//     }
// })
// console.log(newnums)



//maps
let nums=[1,2,3,4,5,6,7,8,9]

// let a=nums.map((num)=>{
// return num+10

// })
// console.log(a)
// let newnums=nums.map((num)=>{
//     console.log(num*10)
// }).map((num)=>{
//     console.log(num+10)
// })

const n=nums
.map((num)=>num*10)
                .map((num)=>num+10)
                .filter((num)=>num<=7)

                console.log(nums,n);

 //reduced three ways to writee the funito
 
 const a=nums.reduce((res,curr)=>{
    console.log("res",res,"+","curr",curr)
    return res+curr
 },0)//this accumalator
 console.log(a)
  const b=nums.reduce(function(res,curr){
    return res+curr
  },0)
  console.log(b)

  const total=nums.reduce((res,curr)=>res +curr ,0)
  console.log(total)

  const shopping=[
    {
        item:"ip",
        price:12
    },
    {
        item:"ip",
        price:13
    },
    {
        item:"ip",
        price:12
    },
  ]
  const result=shopping.reduce((res,curr)=>{
    console.log("res",res,"curr",curr)
    return res+curr.price
,0})

console.log(result)