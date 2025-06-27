let myDate = new Date()
// console.log(myDate);                  //2025-06-27T12:03:47.510Z
// console.log(myDate.toString());      //Fri Jun 27 2025 12:03:47 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());  // Fri Jun 27 2025
// console.log(myDate.toLocaleString()); // 6/27/2025, 12:06:24 PM
// console.log(typeof myDate);           //object


let myCreatedDate = new Date(2025, 0, 21, 5, 3)   //Jan - 0, Feb : 1, Mar: 2 ...... Dec: 11
// console.log(myCreatedDate);                 //2025-01-21T00:00:00.000Z
// console.log(myCreatedDate.toDateString());  //Wed Jan 21 2026
// console.log(myCreatedDate.toLocaleString());  //1/21/2025, 5:03:00 AM

let myCreatedDate2 = new Date("2025-03-20")
//console.log(myCreatedDate2.toLocaleString());    //3/20/2025, 12:00:00 AM

let myCreatedDate3 = new Date ("07-20-2025")
// console.log(myCreatedDate3.toLocaleDateString());   //7/20/2025
// console.log(myCreatedDate3.toLocaleString());       //7/20/2025, 12:00:00 AM

/*To design any hotel app or quiz game or so on we need millisecond value, below are some method*/

let myTimeStamp = Date.now();
// console.log(myTimeStamp);                  //1751026902172
// console.log(myCreatedDate.getTime());     //1737435780000
// console.log(Date.now()/1000);                //1751027067.189  //Here we get fraction value to overcome it we can use Math.floor()
// console.log((Math.floor(Date.now()/1000)));  //1751027336


let newDate = new Date();
// console.log(newDate);                     //2025-06-27T13:25:43.132Z
// console.log(newDate.getDate());           //27
// console.log(newDate.getMonth());          //5
// console.log(newDate.getDay());            //5

// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);

newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(newDate);  //2025-06-27T13:58:58.298Z
















