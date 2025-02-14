function Person(name){
    this.name = name;
}

Person.prototype.sayName = function(){
    console.log(`Muh name is '${this.name}'`);
}

function Player(name, marker){
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function(){
    console.log(`Muh marker is '${this.marker}'`);
}

Object.getPrototypeOf(Player.prototype);

// this line makes Player objects inherit from Person 
Object.setPrototypeOf(Player.prototype, Person.prototype);

/*
console.log([
    'prototype of Player is: ',
    Object.getPrototypeOf(Player.prototype)
]);
*/

const player1 = new Player('Ronald', 'X');
const player2 = new Player('Grimace', '0');

/*
player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();

console.log([
    'Object.getPrototypeOf(Player.prototype) === Object.prototype...',
    Object.getPrototypeOf(Player.prototype) === Object.prototype
]);
*/

console.log([
    player1.hasOwnProperty('valueOf'),
    Object.prototype.hasOwnProperty('valueOf')
]);

// The hasOwnProperty() method of Object instances returns a boolean 
// indicating whether this object has the specified property as its 
// own property (as opposed to inheriting it).