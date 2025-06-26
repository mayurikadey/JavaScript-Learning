/* Primitive Datatype : 
 1. String
 2. Number
 3. Boolean
 4. null
 5. Undefined
 6. Symbol
 7. BigInt

 Reference type (Non Primitive) :
 1. Arrays
 2. Objects
 3. Functions

 */

 /*
Notes:: typeOf
=================
123 : number
"Moon": string
true/false : boolean
undefined : undefined
Null : object
symbol : symbol
123456789n : bigint
Array : object
object : object
function : function

*/

 const score = 100
 const scoreValue = 100.3
 const isloggedIn = false
 const outSideTem = null
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')
 //console.log((id === anotherId));  //false

 const bigNumber = 357841244556662247855877411200000000652441789632541789524n
 //console.log(typeof bigNumber);


 const heros = ["Shaktiman", "naagraj", "Junior G"]  //Array


 //Object
 let myObj= {
    name: "Mayurika",
    age: 22,
 }

 //Functions
 const myFunctions1 = function(){
    console.log("Hello World");
 }

 //console.log(typeof myObj);

 const number = 123
 console.log(typeof number); // Number
 const myName = "Mayurika"
 console.log(typeof myName); // String
 const isMarried = true
 console.log(typeof isMarried); //boolean
 let moneyHas;
 console.log(typeof moneyHas);  //undefined
 const temp = null
 console.log(typeof temp)       //Object
 const dob = Symbol("28/02/1993")
 console.log(typeof dob);       //Symbol
 const bigNumberr = 123456n
 console.log(typeof bigNumberr); //bigint

const states = ["West Bengal", "Telegana", "Gujarat", "Sikkim"]
console.log(typeof states);   // Object


let myDataObject = {
    name : "Mayurika",
    Spouse : "Sailajananda"

}
console.log(typeof myDataObject);  //Object


const myFunctions = function(){
    
}
console.log(typeof myFunctions);  //function



 



