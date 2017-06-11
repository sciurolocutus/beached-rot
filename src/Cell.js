var Cell = function() {
    this.x = null;
	this.y = null;
	this.color = null;
	this.character = null;

};

Cell.prototype.draw = function(display, bgColor) {
	display.draw(this.x, this.y, this.character, this.color, bgColor);
};