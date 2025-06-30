//const tinderUser = new Object()   ===>Singleton Object

//const tinderUser = {}   ====>Non singleton Object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Jack"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "ravi@gmail.com",    
    fullname: {                           //We can define object inside an
        userfirstname : "Ravi",
        userLastname : "Teja"

    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userLastname);


const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "a",
    4 : "b"
}

const obj3 = {
    5 : "a",
    6 : "b"
}

// const obj4 = {obj1, obj2}
// //console.log(obj4)         //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj5 = Object.assign({}, obj1 , obj2, obj5)   // {} is optional, but it is a goo dpractice, 
// console.log(obj5);          //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//console.log({...obj1, ...obj2, ...obj3}) //spread operator // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


//When value comes from database

const databaseUser = [
    {
        id : 1,
        email : "mayu@google.com"           //Objet inside array
    },
     {
        id : 2,
        email : "saila@google.com"
    },
]

// console.log(databaseUser[1].email)   //saila@google.com
// console.log(databaseUser.at(0).email);  //mayu@google.com

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));   //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));  //[ '123abc', 'Jack', false ]

console.log(Object.entries(tinderUser));   //[ [ 'id', '123abc' ], [ 'name', 'Jack' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))  //true











