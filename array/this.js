// const user={
//     username:"mamta",
//     price:199,

//      welcomeMsg:function(){
//         console.log(`${this.username},welcome to website`)//here this meaning is currernt 
//         console.log(this)//current value show here 
                
//      }

// }
// user.welcomeMsg()
// user.username="rita"//we have changed value 
// user.welcomeMsg()
//console.log(this)//if you are in console then it will show window but in node it will not show 

// function chai (){
//     let username="mmata"
//     console.log(this.username);//again it will show window object but in node it will lot values this will not work 
// }
// chai()

//arrow function 
// const a=()=>{
//     let username="mamtaq"
//     //console.log(this)
//     console.log(this.username)//it will show undefined
// }
// a()


//this is explicity return
// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// let c=addtwo(2,4)
// console.log(c)

//impplicit retrun is man leta hu this is another way o
// const addtwo=(num1,num2)=>  num1+num2

//object ke sath kam kar skte hai 
// const addtwo=(num1,num2)=>  ({username:"mamta"})

// let c=addtwo(2,4)
// console.log(c)
//immediately invoked fucntion expressionn (IIFE)

(function code(){
  console.log("db connect ")
})();

((name)=>{
   console.log(`db connect 3 ${name}`)
})("mamta")


