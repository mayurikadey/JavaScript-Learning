/*
There are two types of memory: Stack memory and Heap memory

All primitive datatype use stack memory
All non primitive datatype use heap memory


*/

let myName = "Mayu"
let myFatherName = myName
console.log(myFatherName);
myFatherName = "Swapan"
console.log(myFatherName);
console.log(myName);


/* In case of Non Primitive*/

let myUser1 = {
    name : "Saila",
    mailId : "Saila@gmail.com"
}

let myUser2 = myUser1
//console.log(myUser2);

myUser2.mailId = "SailaMayu@gmail.com"
console.log(myUser1);  // when we change in myUser2 data, it also changed myUser1 data,
                       //  as myUser2 gets reference of myuser1 not copy as primitive datatype



