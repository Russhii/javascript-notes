// let var const

{}//called scop curly braces

var c = 300;
//outside scop == global scop 

let a =300;
if(true){
       let a =10;
       const b =20;
       var c =30; //not follow scop avoid var verible  
       console.log(a);
}
  console.log(a);
// console.log(b);
console.log(c);

