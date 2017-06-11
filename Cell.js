var Cell = function() {
    this.x = null;
	this.y = null;
	this.color = null;
	this.character = null;

};

Cell.prototype.draw = function(display) {
	display.draw(this.x, this.y, this.color);
}
