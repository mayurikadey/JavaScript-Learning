// singleton , literal 


// const jsUser = {} // one process to creat object

// Object.create() //another process to create object

const mySym = Symbol("key1")

const jsUser = {
    name :  "Mayurika",           //system process the key as a string, i.e like "name" : "Mayurika"
    "full name": "Mayurika Banerjee",  //If key is declaired in this way, they to access it you can't use jsUser.full name,
                                      //for that you must use jsUser["full name"], then only value of this key can be accessed
    age : 13,
    location : "Hyderabad",
    email : "mayu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    [mySym]: "mykey"   //This is the syntax to use symbol as a key, if we don't use [], then althought we can access
                       //the value but actually the data type of the key will act as a String not Symbol
}

//How to access object

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log((jsUser["full name"]));
// console.log(jsUser[mySym]);     //mykey 

// console.log(jsUser);
// jsUser.email = "mayusaila@ gmail.com"  // to change the value
// console.log(jsUser);
// Object.freeze(jsUser)                  //to freeze the object, after freezing no one can change the any value of obect
// jsUser.name = "Manu"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello User");
    
}

jsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}` );
    
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());




