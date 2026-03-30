const coding =['js','ruby','py','cpp','java'];
coding.forEach(
  function (i) {
     // body
     console.log(i);
  }
)
//                                                              //\Rushikesh\OneDrive\Desktop\JAVASCRIPT\21intretingloop.js"     
// js
// ruby
// py
// cpp
// java


coding.forEach( (i)=>{console.log(i)})
// \Rushikesh\OneDrive\Desktop\JAVASCRIPT\21intretingloop.js"     
// // js
// // ruby
// // py
// // cpp
// // java
// function printMe(item){
//   console.log(item)
// }
// coding.forEach(printMe);

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr);

})
// js 0 [ 'js', 'ruby', 'py', 'cpp', 'java' ]
// ruby 1 [ 'js', 'ruby', 'py', 'cpp', 'java' ]
// py 2 [ 'js', 'ruby', 'py', 'cpp', 'java' ]
// cpp 3 [ 'js', 'ruby', 'py', 'cpp', 'java' ]
// java 4 [ 'js', 'ruby', 'py', 'cpp', 'java' ]


const myCoding =[
  {
    lang:'javascript',
    langfile:'js'
  },
    {
    lang:'java',
    langfile:'java'
  },
    {
    lang:'python',
    langfile:'py'
  },
]

myCoding.forEach((item)=>{

  console.log(item.lang);
  console.log(item.langfile);
})
// javascript
// js
// java
// java
// python
// py

