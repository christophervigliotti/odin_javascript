/*
https://dev.to/tomekbuszewski/module-pattern-in-javascript-56jm

*/

// Module is created as an IIFE (immediately invoked function expression) with a function inside:
const SomeModule = (function() {})();

// a module with a private function inside
const Formatter0 = (function() {
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    // code will executer, but Formatter.log() will not work
})();

const Formatter2 = (function() {
    console.log('Formatter2 is in the house');
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
  
    const makeUppercase = (text) => {
      log("Making uppercase");
      return text.toUpperCase();
    };  
  
    return {
      makeUppercase,
    }
})();
// GTG console.log(Formatter2.makeUppercase("tomek"));

// Modules can house not only functions, but arrays, objects and primitives as well.

const Formatter3 = (function() {
    let timesRun = 0;
  
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    const setTimesRun = () => { 
      log("Setting times run");
      ++timesRun;
    }
  
    const makeUppercase = (text) => {
      log("Making uppercase");
      setTimesRun();
      return text.toUpperCase();
    };
  
    return {
      makeUppercase,
      timesRun,
    }
})();
/*  
console.log(Formatter3.makeUppercase("tomek"));
console.log(Formatter3.timesRun);
*/

// Formatter3.timesRun = 10; // everything publicly exposed can be changed from the outside. This is one of the biggest module pattern drawbacks.
// console.log(Formatter3.timesRun);

// Reference types works differently. Here, you can define it and it will be populated as you go...
const Formatter4 = (function() {
  let timesRun = 0;

  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
  const setTimesRun = () => { 
    log("Setting times run");
    ++timesRun;
  }

  const makeUppercase = (text) => {
    log("Making uppercase");
    setTimesRun();
    return text.toUpperCase();
  };

  return {
    makeUppercase,
    timesRun,
  }
})();
/*
console.log(Formatter4.makeUppercase("tomek"));
console.log(Formatter4.makeUppercase("tomek"));
console.log(Formatter4.makeUppercase("tomek"));
console.log(Formatter4.timesRun);
*/
const Formatter5 = (function() {
  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
  const timesRun = [];

  const makeUppercase = (text) => {
    log("Making uppercase");
    timesRun.push(null);
    return text.toUpperCase();
  };

  return {
    makeUppercase,
    timesRun,
  }
})();

/*
console.log(Formatter5.makeUppercase("tomek"));
console.log(Formatter5.makeUppercase("tomek"));
console.log(Formatter5.makeUppercase("lower case?!"));
console.log(Formatter5.timesRun.length);
*/

// DECLARING MODULE DEPENDENCIES

const documentMock = (() => ({
  querySelector: (selector) => ({
    innerHTML: null,
  }),
}))();

const Formatter = (function(doc) {
  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

  const makeUppercase = (text) => {
    log("Making uppercase");
    return text.toUpperCase();
  };

  const writeToDOM = (selector, message) => {
    doc.querySelector(selector).innerHTML = message;
    log(message);
  }

  return {
    makeUppercase,
    writeToDOM,
  }
// })(document || documentMock);
})((typeof document === 'undefined')? documentMock : document);

Formatter.writeToDOM();