// https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern


/*
1.
    The makeAdding function takes an argument, firstNumber, declares a constant first with the value of firstNumber, 
    and returns another function.
2. 
    When an argument is passed to the returned function, which we have assigned to add5, it returns the result of 
    adding up the number passed earlier to the number passed now (first to second).
*/
function makeAdding (firstNumber) {
    // "first" is scoped within the makeAdding function
    const first = firstNumber;
    return function resulting (secondNumber) {
      // "second" is scoped within the resulting function
      const second = secondNumber;
      return first + second;
    }
  }
  // but we've not seen an example of a "function"
  // being returned, thus far - how do we use it?
  
  const add5 = makeAdding(5);
  console.log(add5(2)) // logs 7

// https://wesbos.com/javascript/03-the-tricky-bits/closures
console.log('A closure is the ability to access a parent level scope from a child scope, even after the parent function has been terminated.');