function Mouse(name) {
    this.name = name;
    this.isAlive = false;
}

Mouse.prototype.die() = function() {
    this.isAlive = false;
}

module.exports = Mouse;