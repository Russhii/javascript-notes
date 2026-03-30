// nested scop

function one(){
  const userName ='Rushikesh'
  function two(){
    const webSite ='Youtube'
    console.log(userName);
  }
  console.log(webSite);

  //two()
}
//one();


if(true){
  const username ='hitesh'
  if(username==='hitesh'){
    const website ='youtube';
    console.log(username+" "+website);
  }
  // console.log(website);
}
//console.log(username);

// ++++++++++++++++++ intresting +++++++
console.log(addone(5));
function addone(value){
   return value+1;
}


addTwo(5)
const addTwo = function(num){
  return num+2
}

