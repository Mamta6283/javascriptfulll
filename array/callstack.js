//java script execution context (important for interview )
//1 {} first global ec (execution context sabke node window object and browsser mein diff hota hai ) it will excute in thread 
//sec is function execution context
//eval EC 


//2)
//{ } memory  creation phase  ismein var ko memory allocat hoti hai 
//-execution phase value define 
/*eg let val=2; 
let val=5;
function add(num1,num2){
    let total=num1+num2;
    return total 
}   
let result=add(val,val) 
console.log(result)
let result2=add(12,34)                  
*/

/* 1phase is global ec 
2 is memory phase memory allocate ismein 
val1=undefined val2=undefined 
3 is add =defintion  
6 memory creation
7 result =undefined result2=undefined 

3 phase exectuion val1=10 val2=5
add=execution context bnta hai it will make new executional context +thread  and sath mien delee ho jata hai memory, execution phase dono honge 

memory phase 
val1=undefined val2=undefined total=undefined 
 
exeution context num1=10 num2=5 total=15 it will return to gloabal ec context */

//callstack ......
function one(){
    console.log("one")
    two()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}
one()
two()
three()