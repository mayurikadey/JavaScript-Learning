const myArray1 = [0, 1, 2, 3, true,  "Mayurika"]
const myArray2 = ["25","36","42","58"]
const myArray3 = ["Keshav", "Madhav", "Shyam"]


const myArray4 = new Array(1,2,3,4)

//console.log(myArray1[0]);

//Arrays Methods

//myArray1.push(6)       //add to rear end
//myArray1.pop()         //delete the last value
//myArray1.unshift(42)   //add value to start (0th indext) position of array
//myArray1.shift()         //remove value from first(0th) index

// console.log(myArray1.includes(20));  //give true/false answer, if value present then true else false
// console.log(myArray1.indexOf(3));    // give index of the value

const newArray = myArray1.join();       //After joining gives String value not Array

// console.log(myArray1);      // [ 0, 1, 2, 3, true, 'Mayurika' ]   ---> Array
// console.log(newArray);      // 0,1,2,3,true,Mayurika    -----> String

//console.log(myArray1);


console.log("Original Array", myArray1);   //[ 0, 1, 2, 3, true, 'Mayurika' ]

const myNewArray =  myArray1.slice( 1, 3)
console.log("B", myNewArray);              //[ 1, 2 ]
console.log("original after slicing", myArray1); //[ 0, 1, 2, 3, true, 'Mayurika' ]  //Original array would be remain same after slicing opeartion

const myNewArray2 =  myArray1.splice( 1, 3)
console.log("C",myNewArray2);      // [ 1, 2, 3 ]
console.log("Original after splicing", myArray1);  // [ 0, true, 'Mayurika' ] //Original array changed, those value deleted from the original



