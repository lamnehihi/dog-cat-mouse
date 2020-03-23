var Dog = require('./Dog');
var Mouse = require('./Mouse');
var Cat = require('./cat');

var dog = new Dog('Jack');
var cat = new Cat('Tom');
var mouse = new Mouse('Jerry');
try {
    cat.eat(mouse);
    console.log(cat);
    cat.eat(dog);
} catch (error) {
    console.log('This animal is too big for a cat');
}
