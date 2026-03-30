const arr =[1,2,3,4,5];
for(const num of arr){
  console.log(num);
}

const greetings ='hello world';
for(const i of greetings){
  console.log(`each letter ${i}`);
}
const map = new Map()
map.set('In','India');
map.set('Ame','America');
map.set('fr','France');
console.log(map);

for(const [key,value] of map){
  console.log(key);
}



const myObject ={
  js:'javascript',
  cpp:'c++',
  rb:'ruby',
}
for(const key in myObject){
  console.log(`${key}=>${myObject[key]}`)
}


const programming =['js','py','ruby','cpp'];
for(const key in programming){
  console.log(key);
}
for(const key of programming){
  console.log(key);
}