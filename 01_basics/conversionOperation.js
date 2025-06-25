/* 
After converting to Number, followings are the output

| 0       | '33'      | 33    
│ 1       │ '33abc'   │ NaN
│ 2       │ null      │ 0
│ 3       │ undefined │ NaN
│ 4       │ true      │ 1
│ 5       │ false     | 0

*/

/* After converting to boolean 
  1 = true
  0 = false
  121 = true
  ""  = false
  "Moon" = true

*/

//Scenario 1
let score = "33"
let valueInNumber = Number(score)
// console.log(typeof(score));
// console.log(typeof valueInNumber);
// console.log(valueInNumber)

//Scenario 2
let score1 = "33abc"
let valueInNumber1= Number(score1)
// console.log(typeof(score1));
// console.log(typeof valueInNumber1);
// console.log(valueInNumber1)

//Scenario 3
let score2 = null
let valueInNumber2= Number(score2)
// console.log(typeof score2 );
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2);

//Scenario 4
let score3 = undefined
let valueInNumber3= Number(score3)
// console.log(typeof score3 );
// console.log(typeof valueInNumber3);
// console.log(valueInNumber3);

//Scenario 5
let score4 = true
let valueInNumber4= Number(score4)
// console.log(typeof score4 );
// console.log(typeof valueInNumber4);
// console.log(valueInNumber4);

//Scenario 6
let score5 = false
let valueInNumber5= Number(score5)
// console.log(typeof score5 );
// console.log(typeof valueInNumber5);
// console.log(valueInNumber5);

// console.table([score,score1,score2,score3,score4,score5])
// console.table([valueInNumber,valueInNumber1,valueInNumber2,valueInNumber3,valueInNumber4,valueInNumber5])

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let num1 = 330;
let num2 = 1;
let num3 = 0;
let str1="";
let str2="Mayurika"
let booleanOfNum1 = Boolean(num1)
let booleanOfNum2 = Boolean(num2)
let booleanOfNum3 = Boolean(num3)
let booleanOfstr1 = Boolean(str1)
let booleanOfstr2 = Boolean(str2)
//console.table([booleanOfNum1,booleanOfNum2,booleanOfNum3,booleanOfstr1,booleanOfstr2]);
//console.log(typeof booleanOfNum)



