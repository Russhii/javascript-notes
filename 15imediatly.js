//imediately invoked function expression 
//Named ifi
(function chai(){
  console.log('DB connected');
})();

// due to global scop pollution will occure to remove that golble scop varible or polution we 
// (function aurcode(){
//    console.log(`DB connected two`)
// })()


//Unamed ifi
((NAME)=>{
   console.log(`EF${NAME}`)
})('rushikesh');