
function sayMyName(){

    console.log("M");
    console.log("0");
    console.log("0");
    console.log("n");
}

//sayMyName ==>reference ; sayMYName() ==>execution

//sayMyName()

function addTwoNumber(number1, number2){    //Thi sis called parameter
        console.log(number1 + number2);
        
}

// addTwoNumber(3, 4)  //thi is calle darguement

function addition (number1, number2){   
        let result = number1 + number2;
        return result
        
}
// const res = addition(4, 5)
// console.log(res);

function addition2 (number1, number2){   
        return number1 + number2
        
}

// let result = addition2(2, 6)
// console.log(result);

function logginUserMessage(username){
    if(!username){
        console.log("Please enter username"); 
        return 
    }
    
        return `${username} just logged in` 
    
}

// const msg = logginUserMessage("Mayurika")
// console.log(msg);

// console.log(logginUserMessage()); 

function logginUserInfo(username = "No one"){  //If user enters nothing then by default username value will be No one
    
        return `${username} just logged in` 
    
}

// console.log(logginUserInfo());
// console.log(logginUserInfo("Mayurika"));


