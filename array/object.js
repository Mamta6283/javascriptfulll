//object 
//sinleton :koi bhi constructor then single become object e:g (object.create) but we use literals then ye nhi bnata

const mysm=Symbol("key1")//you have to this symbol as key in object
//this object literals 
const user={
    name:"mamta",
    age:18,
    location:"punajb",
    email:"mamtarani@334",
    islogin:true,
    lasts:"monday",
    [mysm]:"mykey1"//you can use symbol by applying square braces
}
console.log(user.email)//with point 
console.log(user["email"])//with sqauare
console.log(user[mysm])

user.email="riyaa2344"//you can change something like this 
console.log(user.email)
//Object.freeze(user)///this is used 
user.email="riya@456"
console.log(user.email)







//object with function 

user.greetings=function(){
    console.log("helo js user")
}
user.greetingTwo=function(){
    console.log(`helo js user,${this.name}`)//here this keyword is used to print any key value of object..
}
console.log(user.greetings());
console.log(user.greetingTwo());






//objects 2
//const tinder=new Object //=this signleton object  //  (you can use both way to create object)
const tinder ={} //this is non singleton object

tinder.id="1233"
tinder.name="mamta"
tinder.islogin=false
//console.log(tinder);
//objects ke ander objects

const regularuser={
    email:"some23",
    fullname:{
        username:{
                   firstname:"mamta",
                   lastname:"rani",
        }
    }
}


console.log(regularuser.fullname.username)







// // combine the two object
const obj={
    1:"a",2:"b",3:"c"
}
const obj2={
    4:"d",
    5:"t"
}
const obj3={obj,obj2}//it will give output in diff obj row 
const obj4=Object.assign({},obj,obj2) //using assing function you can combine (target and source you define in this fucntion )
const obj5={...obj,...obj2}
console.log(obj3)






//as array ki trah use kr skte hai
const users=[
    {
        id:1,
        email:"mamta@86ygy"
    },
    {
        id:1,
        email:"mamta@86y"
    },
    {
        id:1,
        email:"mamta@86jhiuy"
    },
    {
        id:1,
        email:"mamta@86j"
    }
]
console.log(users[3].email)
console.log(tinder)

console.log(Object.keys(tinder))//you can take all key using this method it will give output in array you can appy lopp here
console.log(Object.values(tinder))//and values
console.log(Object.entries(tinder))

console.log(tinder.hasOwnProperty('islogin'))//it will show the property availble 






//object de-structur

const course={
    coursename:"js in hindi",
    pirce:"999",
    inst:"mamta"
}
const {inst}=course
console.log(inst)

const navbar=({company})=>{
    //console.log(company)

}
navbar(company="hitesh")

//API json  random api and json format 
// {//this will treat as json...
//     name:"mamta",
//     coursename:"js ",
//     price:"99"
// }
