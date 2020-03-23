var Mouse = require('./Mouse');

function Cat(name) {
    this.name = name;
    this.stomatch = [];
}

Cat.prototype.eat = function(animal) {
    if (animal instanceof Mouse){
        this.stomatch.push(animal);
    } else {
        throw new Error('This animal is too big for a cat');
    }
}

module.exports = Cat;