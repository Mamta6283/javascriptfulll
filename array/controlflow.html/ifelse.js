//control flow 
let username="mamta" //truthy value 
if(username){
    console.log("yes")
}else{
    console.log("no")
}

//truthy  "0" this truthy value if string ke ander hai 0 ,'false'," space",[array ],{object},function(){}
if(username.length===0)
    {
        console.log("array is empty")
    }
    else{
        console.log("no")
    }
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("objet is empty")
}
console.log("no")

 // falsy value false,0,-0,bigint,"",null,undefined ,nan


 //nulish coalescing operator (??)null undefinded 
  let val1
  //val1 =5??10
  val1= null??10??10 //10 hi assign hoga
  console.log(val1)
  //console.log(val1)
