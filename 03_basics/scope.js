// let a = 10
// const b = 20
// var c = 30

{ 
    //{ } => this is called scope
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a);  //Error, as let will only work inside scope
//console.log(b)   // Error, as const will only work inside scope
console.log(c);    // var can be accessed even outside the scope, which is not desirable

// { } ==> block scope , outside i sglobal scope




