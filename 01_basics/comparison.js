// console.log(2 > 1);   //true
// console.log(2 >= 1);  //true
// console.log(2 < 1);   //false
// console.log(2 == 1);  //false
// console.log(2 != 1);  //true


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0) //false
// console.log(null == 0) //false
// console.log(null >= 0) //true

/*Note: 
The reason is that an equality check (==) and comparison(>,<,>=,<=) work differently,
Comparison convert null to a Number, treating it as 0.
That's why null>=0 is true and null>0 is false
*/

// console.log(undefined == 0);  //false
// console.log(undefined > 0);   //false
// console.log(undefined < 0);   //false


console.log("2" ===2) //false


