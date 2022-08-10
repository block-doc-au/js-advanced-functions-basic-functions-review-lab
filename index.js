// Your code here

function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
};


function wrapAdjective(myString = "*"){
    return function(myAdjective = "special") {
        return `You are ${myString}${myAdjective}${myString}!`;
    }
}

var Calculator = {
       add: (function(a,b){
        return a+b;
    }),

       subtract: (function(a,b){
        return a-b;
    }),
       multiply: (function (a,b){
        return a*b;
    }),
       divide: (function (a,b){
        return a/b;
    })
     
  };

  function actionApplyer(a, b) {
    //if (b.length==0) return a; else return b;
    if (b.length==0) return a; else {
       //c = b [0]();
       let c = b[0](a);
       console.log(`c is ${c}.`);
        //console.log(`After 1st function, a is : ${a}.`);
        c = b [1](c);
        console.log(`c is now ${c}.`);
        //console.log(`After 2nd function, a is : ${a}.`);
        c = b [2](c);
        console.log(`c is finally ${c}.`);
        //console.log(`After the 3rd function, a is : ${a}.`);
        //return a;
        return c;
    }
    };
            

                
            
            



    arrayOfTransforms = [
        function(a){ return a * 2 },
        function(a){ return a + 1000},
        function(a){ return a % 7 }
      ]

    let testVar;
let testA = 13;
let testB = arrayOfTransforms;
console.log(`testB just set to ${testB}...`)
//  testB = new Array();
// let testB = Array();

testVar = actionApplyer(testA,testB);
console.log(`After function, testA is ${testA} and testB is ${testB}.`);
console.log(`testVar is ${testVar}`);
console.log(`testB is ${typeof testB}`);
  console.log(`Function result is ${testVar}.`);









