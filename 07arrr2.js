const marvel =["thor",'spider man','iron man','captain america'];
const dc =['aqua man','batman','superman','wanda'];

// marvel.push(dc);
// console.log(marvel[4]);

// const allh =marvel.concat(dc);
// console.log(allh);

// sprade oprator
const all =[...marvel,...dc];
console.log(all);

const anotherAar =[1,2,3,[4,5,6],7,[6,7,[4,5]]];

// flat
const  real =anotherAar.flat(Infinity)
console.log(real);

console.log(Array.isArray("rushikesh"))
console.log(Array.from("rushikesh"))


console.log(Array.from({name:"Rushikesh"}))//interesting case


let score1 =100;
let score2 =200;
let score3 =300;
console.log(Array.of(score1,score2,score3));