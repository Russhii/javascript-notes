// Primitives 
// 7 types : String ,Number,Boolean,NULL,undefined ,Symbol,BigInt

// Js is Dynamially typed 

const score =100;
const ScoreValue =100.5

const isLoggedIn = false;
let name = undefined;

const id =Symbol('123');
const anotherId =Symbol('123');
console.log(id==anotherId);

 const bigNumber =382488302503480n;
 const myFunction =function(){
    console.log("Hekllo");

 }
 console.log(typeof myFunction)
// Reference Non Premitives

// Array, Objects , Functions

// stack(primitive) //heap (non primitives)

let myName = 'Rushikesh';
let myutube =myName;
myutube ="ffsjfb";

console.log(myName);
console.log(myutube);


let user ={
  email:'rushikesh@gmail.com',
  upi:'@okaxies',
}

let user2 =user;

user2.email='hitesh@gmail.com';

console.log(user.email);
console.log(user2.email);