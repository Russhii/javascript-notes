function saynmyname(){
  console.log(saynmyname);
}
//saynmyname();


// function addtownum(a, b){//parameter value passed
//   console.log(a+b);
// }
// function addtownum(a, b){//parameter value passed
//   let res =a+b;
//   return res;
// }
// const res = addtownum(2,3);//arguments when call

// console.log(res)



function loginUserMessage(username){
  if(username===undefined){
     console.log('plz Enter a user name ');
     return;
  }
  return `${username} just logged in`
}

//const res = loginUserMessage('rushikesh');
//console.log(res);

const res = loginUserMessage();
console.log(res);


// when parameters are not know in advance
// rest aoprators for too many values
function calculateCartPrice(val1,val2,...num1){
  return num1;
} 
console.log(calculateCartPrice(2,200,400,3000,3))


const user={
  username:"Rushikesh",
  price:199
}

function handelObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handelObject(user);
handelObject({
  username:"sam",
  price:399
});


const myNewArr =[200,800,4000,300,600]
function returnSecondValue(getArray){
   return getArray[1];
}
console.log(returnSecondValue(myNewArr));