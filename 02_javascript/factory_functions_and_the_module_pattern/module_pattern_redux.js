/*
Module is created as an IIFE 
(immediately invoked function expression) 
with a function inside
*/

const SomeModule = (function() {})();

/*
Everything within the body of said function 
is bound to that module and can be seen by each other. 
Modules emulates „public” and „private” methods 
by creating mentioned earlier scope and exposing 
only those things that are declared.
*/