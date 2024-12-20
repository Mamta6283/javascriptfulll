//function
// console.log("function")

// function myname(a,b){
//     console.log("mamta")
//     console.log(a+b,a-b,a*b)
//     return a+b,a-b,a*b
// }
// let num=myname(2,3);
// console.log(num)
// myname(3,4);
// myname(4,"a");//it will show nan when you give string here samne wale var ko string consider kr leta hai


// function login(username){
//     if(username===undefined){//if(!username) ypu writee something like this
//         console.log("enter your name")
//         return 
//     }
//     return `${username} just logged in`
// }
// // let result=login("mamta")
// let result=login()//if arguments not psse then it show undefined
// console.log(result)


//funcction :--
function cal(val1,val2,...num1){ //...this is rest op and spread op //it will convert into one bundle or array 
    return num1
}
let a=cal(100,200,300,400,500)//mulitple values you can pass 
console.log(a)

const user={
    username:"mamta",
    price:199
}
function handleobj(anyuser){
    console.log(`username is ${anyuser.username} and price is ${anyuser.price}`)

}
handleobj(user)//you can pas object here in two ways
handleobj({
    username:"mamta",
    price:199
})

//array using with function 
const arr=[100,30,40,20]
function myarr(getarray){
    return getarray
}
let b =myarr(arr)
console.log(b)



//scope 
var c=300
//this is block if you write within block scop then you cannot use this var out the block bu if you are using variable outside then you can use var withing the block scop 
if(true){
    let a=10
    const b=20
    var c=20
}
//console.log(a)
//console.log(b)
console.log(c)

//node ke through and window ke through scop diff hote hai important