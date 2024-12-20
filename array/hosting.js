//nested scop 
function one(){
    const username="mamta"
    function two(){//in this function it can anything from another function 
            const website="youtube"
            console.log(username)
    }
   // console.log(website) //but here you cannot access inner function 
    two()
}
one()

if(true){
    const username="mamta"
    if(username==="mamta"){
        const website=" youtube"
        console.log(website)
    }
   // console.log(website)
}
//console.log(username)


//*****************interesting*************** */
//excution context
// addone(5) here you can write 
function addone(num){
    return num+1
}
addone(5)
//this another way to write a function 
// addtwo() you write this thing here bcz we have store the function in var  this is called hosting how to declare a function
const addtwo=function(num){
    return num+1
}
addtwo()