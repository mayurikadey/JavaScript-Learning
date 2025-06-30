const course = {
    courseName: "js",
    coursePrice: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor  //this type of syntax can be used but there is better syntax for acces it

const {courseInstructor} = course    // Destructure 
console.log(courseInstructor); // HItesh 

const {coursePrice: fees} = course  //another way of destructuring
console.log(fees);                  //999
