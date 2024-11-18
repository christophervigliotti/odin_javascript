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

Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype);

const player1 = new Player('Ronald', 'x');
const player2 = new Player('Grimace', '0');

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();