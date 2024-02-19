module.exports.sum=(a,b)=>a+b;
module.exports.mul=(a,b)=>a*b;
module.exports.g=9.8;
module.exports.PI=3.14;


//    METHOD 0 
 // we dont use this 
// exports.sum=(a,b)=>a+b;
// exports=4;   // because we declare this style showinng error 
// module.exports=4;  //this is right prectice


//    METHOD 1
// const sum=(a,b)=>a+b;
// const mul=(a,b)=>a*b;
// const g=9.8;
// const PI=3.14;

// module.exports=123;   // output 123   // use module here



//    METHOD 2
// const sum=(a,b)=>a+b;
// const mul=(a,b)=>a*b;
// const g=9.8;
// const PI=3.14;

// const obj={
//     sum:sum,
//     mul:mul,
//     g:g,
//     PI:PI
// };
// module.exports=obj;    // we use module here



// METHOD 3            
// const sum=(a,b)=>a+b;
// const mul=(a,b)=>a*b;
// const g=9.8;
// const PI=3.14;

// module.exports={    // we use  module here
//     sum:sum,
//     mul:mul,
//     g:g,
//     PI:PI
// };