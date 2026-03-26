const name ='Rushikesh'

const repoCount =50;

// console.log(name+" "+repoCount+" Value");

// console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gamename = new String('Rushikesh@')
// console.log(gamename.__proto__)

// console.log(gamename.length);

// console.log(gamename.toLowerCase());

// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('u'));


const newString =gamename.substring(0,4);
console.log(newString);

const anotherString = gamename.slice(1,3);
console.log(anotherString);

const newStringOne ="  hitesh";
// remove extra space 

console.log(newStringOne);
console.log(newStringOne.trim()); // it will remove extra space 

const url ="https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'));


console.log(gamename.split())