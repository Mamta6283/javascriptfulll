//here you can get an elemnet by idname or wiriting down .id
// document.getElementById("title").id
// document.getElementById("title")

// document.getElementById("title").class
// document.getElementById("title").getAttribute("title",or,"id")
// document.getElementById("title").setAttribute("title","newone")



//here you can apply style using this format in js on getting element id and .id 
// title.style.backgroundColor="green"
// title.style.padding="10px"


//it will  show the content of element
//here textcontent this will the show the hidden conteent but innertext will show only the visible content it just depend on use case
// title.textContent
// title.innerText

//title.innerHTML it will give html value html tags ko support krta hai 


//document.getElementsByClassName("heading"):this is used to get an element by class name

//query selector :
//document.queryselector("h1")
//it will show first h1 of html pagee and 
//queryselecotrALL:IT WILL SHOW THE all the h1(all the node list similiar) in html pagwe document.queryselectorall("h1")
//you can select element by using tags, id using #idname ,classname using.classname to get the content...

//document.querySelector('p:first-child')//you can take child as well

//color change:you can do changes something like that
// let ul=document.querySelector("ul")
// console.log(ul)
// const myul=document.querySelector("ul")
// console.log(myul.querySelector("li"))
// const turn=myul.querySelector("li")
// turn.style.backgroundColor="red"
// turn.innerText="five"



//queryselectorAll 
let ul=document.querySelectorAll("li")
console.log(ul)
ul[0].style.backgroundColor="green" //you have to index here to apply your color

//your  node list andd html collection are not exactly array but to apply anything you to pretend like array 

let myh1=document.querySelectorAll("h1")
console.log(myh1)
myh1[0].style.backgroundColor="red";//indexing use here  node list mein indexing se changing kar skte ho 

//you can do in this way 
myh1.forEach(function(l){
    l.style.backgroundColor="green"
})

//you can select element by classname by attribute name which is class attr first ypu have to convert html collection into array

let item=document.getElementsByClassName("item")
console.log(item)
 let a=Array.from(item)//you can use this mehtod 
 console.log(a)
 a.forEach(function(i){
    i.style.backgroundColor="red"
 })

