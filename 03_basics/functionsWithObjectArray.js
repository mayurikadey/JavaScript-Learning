//shopping cart real problem, where user keep adding items into cart

function calculateCartPrice(...num1){   //... (rest opearator)
    return num1
}

//console.log(calculateCartPrice(200,400,500,700));  // [ 200, 400, 500, 700 ]

function calculateCartPrice2(val1, val2, ...num1){   //... (rest opearator)
    return num1
}

//console.log(calculateCartPrice2(500,600,700,800));   //[ 700, 800 ], because 500 & 600 has been assign to val1, val2


const user = {
    username: "Mayurika",
    age: 32
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and age is ${anyObject.age}`);
    
}
//console.log(handleObject(user));   //how to pass object inside function
// console.log(handleObject({
//     username: "Saila",
//     age: 32
// }));


const arr1 = [21, "Mayurika", true]            

function arrayHandle(anyArray){
        console.log(`the array values are ${anyArray}`);
         
}
console.log(arrayHandle(arr1));

function arraySecondVAlueReturn(anyArray){
    return anyArray[1]
}
console.log(arraySecondVAlueReturn(arr1));

console.log(arraySecondVAlueReturn([20,30,40]));




