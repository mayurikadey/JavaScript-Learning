const name = "Mayurika"
const repoCount = 50

//console.log(name + repoCount + "value");   //old style

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //new style

const gameName = new String('Mayurika-Pistol-Whipe')
// console.log(gameName[0]);
//console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf("r"));
// console.log(gameName.toLowerCase());

const newString = gameName.substring(0,4) //return till index 3 or before index of 4
//console.log(newString)

const anotherString = gameName.slice(-6, 4)
//console.log(anotherString);

const trimPractice = "        Mayurika      ";
const withTrim = trimPractice.trim();
const withStartTrim = trimPractice.trimStart();
const withEndTrim = trimPractice.trimEnd();
//console.table([trimPractice, withTrim, withStartTrim, withEndTrim]);

const url = "https://mayurika.com/mayurika%20dey"
// console.log(url.replace('%20','-'));
// console.log(url.includes('dey'));
// console.log(url.includes('Saila'));

//console.log(gameName.split('-'));









