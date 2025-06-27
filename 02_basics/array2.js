const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros);  //in this case first array will take dc_heros as an array on its 3rd index

// console.log(marvel_heros);     //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1])  // flash

const allHeros = marvel_heros.concat(dc_heros)   //concat will return new Array with both the arrays
//console.log(allHeros);                          //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const allNewHeros = [...marvel_heros,...dc_heros]
//console.log(allNewHeros);                          //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const allArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const oneArray = allArray.flat(Infinity);              //It will make above aray in a single one, 
                                                       // but we need to define that how long will be converted,thats why infinity used
//console.log(oneArray);

const myName = "Mayu"
//console.log(Array.isArray(myName));         //false
console.log(Array.from(myName));          // ['M','a','y','u']
console.log(Array.from({name: myName}));  // [] //will give empty array 
                                                // because method will be confused that either Key or value which one need to be converted into array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));  //[ 100, 200, 300 ]









