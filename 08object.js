// singleton 


// object literals 
//Object.create()
const mySym =Symbol("key1");

const jsUser ={
  name :'RUshikesh',
  fullname:'Rushikesh parit',
  age:21,
  [mySym]:"mysym1",
  location:"pune",
  email:"dkhabwfkef",
  isLoggedIn:false,
  lastLoginDays:['monday','tuesday']
}

console.log(jsUser.name);
console.log(jsUser['age'])

console.log(jsUser.fullname);
console.log(jsUser[mySym]);

jsUser.email="Rushieksh@gmail.com";
Object.freeze(jsUser);;
console.log(jsUser["email"])