
const mydate =new Date();
// console.log(mydate)

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

// let myCreatedDate =new Date(2023,0,23);
// console.log(myCreatedDate);


let createdDate =new Date(2023,0,23,5,3);
console.log(createdDate.toDateString());
console.log(createdDate.toLocaleString());
let myTimeStamp =Math.floor(Date.now());
console.log(myTimeStamp);


let newdate = new Date();
console.log(newdate.getDate());
console.log(newdate.getMonth())

newdate.toLocaleString('default',{
  weekday:"long",
  
})