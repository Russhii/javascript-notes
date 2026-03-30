const user ={
  username:'rushikesh',
  price:999,
  welcomemessage: function(){
      console.log(`${this.username} welcome to website`);
      console.log(this);
  }
  
}
// user.welcomemessage()
// user.username='sam';
// user.welcomemessage();

console.log(this)


// function chai(){
//   let usernme ='hitesh'
//   console.log(this.username)
// }

// chai();

// const chai = funtion(){
//    let username ='Rushikesh'
//    console.log(this.username)
// }

// const addtwo =(nums1,num2)=>{
//   return num1+num2
// }
// console.log(addtwo(3,4));


//const addtwo=(num1,num2)=> num1+num2

//const addtwo =(num1,num2)=>(num1+num2)

const addtwo =(num1,num2)=>({username:rushikesh})

console.log(addtwo(3,4));


const myArray =[2,5,3,7,8]

myArray.forEach(()=>{})