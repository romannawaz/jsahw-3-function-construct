function CoffeeMake() { }
CoffeeMake.prototype = {
    on: function () {
        return `${this.model} is on`;
    },
    off: function () {
        return `${this.model} is off`;
    }
}

function DripCoffeeMaker(model) {
    this.model = model;
    this.createCoffee = function () {
        return 'Create Drip Coffee';
    }
}
DripCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);

let dripCoffeeMaker = new DripCoffeeMaker('Drip Coffee');

console.log(dripCoffeeMaker.on());
console.log(dripCoffeeMaker.off());
console.log(dripCoffeeMaker.createCoffee());

function CorabCoffeeMaker(model) {
    this.model = model;
    this.createCoffee = function () {
        return 'Create Corab Coffee';
    }
}
CorabCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);

let corabCoffeeMaker = new CorabCoffeeMaker('Corab Coffee');

console.log(corabCoffeeMaker.on());
console.log(corabCoffeeMaker.off());
console.log(corabCoffeeMaker.createCoffee());

function CoffeeMachine(model) {
    this.model = model;
    this.createCoffee = function () {
        return 'Coffee Machine';
    }
}
CoffeeMachine.prototype = Object.create(CoffeeMake.prototype);

let coffeeMachine = new CoffeeMachine('Coffee Machine');

console.log(coffeeMachine.on());
console.log(coffeeMachine.off());
console.log(coffeeMachine.createCoffee());