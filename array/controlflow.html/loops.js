//loops 
for(let i=0; i<10;i++){
   console.log("outer loop",i)
    for(let j=0; j<10; j++){
       console.log("inner lopp",j);
       console.log(i+"*"+j+"="+i*j)

   }
}

let arr=[10,20,30,40,50,60,70]
for(let index=0; index<arr.length; index++){
    console.log(arr[index])
}

//break and continue

for(let i=0; i<10; i++){
    if(i==5){
        console.log("5 detected")
        break;
    }
    console.log("vlaue is",i)
}
for(let i=0; i<10; i++){
    if(i==5){
        console.log("5 detected")
        continue;
    }
    console.log("vlaue is",i)
}

//while loops and do - while loop 
let i=0;
while(i<10){
    console.log("value is",i)
    i++
}
 let ar=[10,20,30,40]
let b=0
 while(a<arr.length)
    {
        console.log("value is ",a,arr[a])
        // a=a+1
        // console.log(a)
        a++
    }
let j=11;
 do{
         console.log("hello",j)
j++
 }while(j<10);



 //high order

 //for of 
 const ao =[10,20,30,40,50]
 

 for(let val of arr){
   // console.log(val)

 }

 for(let key in arr){
    console.log(key,arr[key])
 }


 const greetings="hello world"
 for (let a of greetings)
    {
        //console.log(a)
    }

    //maps
    const map=new Map()
    map.set("in","india")
    map.set("in","india")//repeat entry is no availble order ke according work krta hai 
    map.set("usa","united state of america")
    console.log(map)

    for(let [key,value] of map){//in this way you can write
        console.log(key,value)
    }

    for(let key in map){ //here iteration is availble
        console.log(key)
    }
    const obj={
        name:"mamta",
        age:22,
        study:"mern"
}
for(let val in obj){
    console.log(val,obj[val])
}
for(let val of obj){  //here object is not itrablee
    console.log(`value is ${val}is obj ${obj}`)
 }
 

//for each 
let myarr=[10,20,30,40,50]
console.log(myarr)
// const a=myarr.forEach( function (val){
//     console.log("hello",val)
// })
const a=myarr.forEach((val,index)=>{
    console.log("hello",val,index)
})


const mycoding=[
    {lang:"javascript",
    langname:"java"
    },
    {lang:"javascript",
    langname:"java"
    },
    {lang:"javascript",
    langname:"java"
    },
]
const l=mycoding.forEach((item)=>{
    console.log(item.langname)
})

mycoding.forEach((key,value)=>{
    console.log(key,value)
})

