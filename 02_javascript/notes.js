/*
JavaScript Course
    Introduction
        How This Course Will Work
            A Quick Review
                rewiewed 
                    https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
                    https://learnxinyminutes.com/docs/javascript/ 
    Organizing Your JavaScript Code
        Intro
        Objects and Object Constructors   
            Intro
            */
                // object literal syntax ('the best way to define objects')
                const myObject = {
                    property: 'value',
                    anotherProperty: 77,
                    "verbose property": function() {
                        // do stuff
                    }
                }

                // 2 ways of getting info out of an object
                    // dot notation
                    myObject.property; // 'value'

                    // bracket notation
                    myObject['verbose property']; // [Function]
                    // bracket notation required here bc property name has a space in it

                    // dot notation is preferred for the above, but bracket notation is required here...
                    const variable = 'property';
                    myObject.variable; // undefined
                    myObject[variable]; // resolves to 'myObject.property' and returns 'value'
            /*
            Lesson Overview
                will learn 
                    how to write an object constructuctor and instantiate the object
                    describe what a prototype is and how it can be used
                    explain prototypal inheritance 
                    understand the basic dos and donts of prototypal inheritance 
                    explain what the this keyword is
            Objects as a design pattern              
            */
                // example one
                const playerOneName = "tim";
                const playerTwoName = "jenn";
                const playerOneMarker = "X";
                const playerTwoMarker = "O";

                // example two
                const playerOne = {
                name: "tim",
                marker: "X"
                };

                const playerTwo = {
                name: "jenn",
                marker: "O"
                };           

                // resume at https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors#objects-as-a-design-pattern