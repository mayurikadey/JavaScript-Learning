// console.log(Math)

// console.log(Math.abs(-4)); // 4
// console.log(Math.abs(4));  //4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.6));  //5
// console.log(Math.floor(4.6)); //4  [For 4.6, Celing value is 5 as we do always in Math, if the value is greater than 5 after fraction ]
//                                    //[floor value is 4 for 4.6]

// console.log(Math.min(14, 3, 8, 5, ));   //3
// console.log(Math.max(15, 56, 23, 4, 45));  //56


console.log(Math.random());  //value will be changed everytime, and it will give value in between 0 & 1

console.log((Math.random()*10) + 1);

console.log(Math.floor((Math.random()*10)) + 1); //this method is used when we make any lucky draw or dice type game

//here is a precised formula
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
