/*
https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern
takeaways
  let   global scope or 'window scope'
  var   function scope
  const block scope
*/
let globalAge = 23; // This is a global variable

// This is a function - and hey, a curly brace indicating a block
function printAge (age) {
  var varAge = 34; // This is a function scoped variable

  // This is yet another curly brace, and thus a block
  if (age > 0) {
    // This is a block-scoped variable that exists
    // within its nearest enclosing block, the if's block
    const constAge = age * 2;
    console.log('(calling var scoped variable declared outside-of/before this if block) varAge = ' + varAge);
    console.log(constAge);
  }

  // ERROR! We tried to access a block scoped variable
  // not within its scope
  // console.log(constAge);
}

printAge(globalAge);

// ERROR! We tried to access a function scoped variable
// outside the function it's defined in
// console.log(varAge);

console.log('fin');