function one(){
    const username = "Mayurika"
    console.log("parent function");
    
    function two(){
        const password = "mayu";
        console.log(username);
        
    }
    //console.log(password);  // will give error
    two()
    
}
 //one()

 //In nested function, child function can access all variable of parent function like one child can ask toys from
 //an older person but an older person cannot ask from child


 if(true){
    const user = "Mayu"
    if(user==="Mayu"){
        const password = "Saila"
        //console.log(user + password);
   }
   //console.log(password);  // will give error , as we tried to access inner scope's variable from paren't scope
   
 
}
//console.log(user);  // will give error as user scope is only defined inside parent and child if scope 

console.log(addone(5))
function addone(num){   // this normal declaration of a function so it can be call before declaration
    return num + 1

}


const addTwo = function(num){   // But in this case it is called expression, so here we can not access function before declaration
    return num + 2
}

console.log(addTwo(5))
console.log("Mayurika");
