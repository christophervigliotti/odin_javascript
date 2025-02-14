// if this is declared at the top of the file, you are in "strict mode" and cannot refer to 'this'
// scope in your methods
// "use strict";

let counter = {
    count: 0,
    next: function () {
        return ++this.count;
    },
};

// GLOBAL CONTEXT
    // Inside the next() function, the this references the counter object. See the following method call:
    /*
    console.log(counter.next());
    console.log(counter.next());
    console.log(counter.next());
    */
    // If you assign a property to this object in the global context, JavaScript will add the property to the global object as shown in the following example:
    // this.color= 'Red';
    // console.log(window.color);
    // ^ does not work in terminal because 'window' is not a thing in this context

// FUNCTION CONTEXT > Simple Function Invocation
    /*
    function show(){
        console.log(this);
    }
    show();
    */
    function bruh(){
        "use strict";
        console.log(this === undefined);
        function bro(){
            console.log(this === undefined);
        }
    }
    bruh();
// FUNCTION CONTEXT > Method Invocation
    // When you call a method of an object, JavaScript sets this to the object that owns the method.
    /*
    let car = {
        brand: 'Honda',
        getBrand: function () {
            return this.brand;
        }
    }
    console.log(car.getBrand());
    let brand = car.getBrand;
    console.log(brand()); // undefined
    */
// FUNCTION CONTEXT > Constructor Invocation
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.getBrand = function () {
        return this.brand;
    }
    /* 
    let car = new Car('VW');
    console.log(car.getBrand());
    // JavaScript creates a new object and sets this to the newly created object. 
    // This pattern works great with only one potential problem...
    // Now, you can invoke the Car() as a function or as a constructor. If you omit the new keyword as follows
    // an error will happen
    var bmw = Car('BMW');
    console.log(bmw.brand);
    */
    // the fix...
    function Car(brand) {
        if (!(this instanceof Car)) {
            throw Error('CUSTOM ERRORS R COOL Must use the new operator to call the function');
        }
        this.brand = brand;
    }
    var bmw = Car('BMW');
    // console.log(bmw.brand);
// // FUNCTION CONTEXT > Indirect Invocation