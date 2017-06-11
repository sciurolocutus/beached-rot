var Game = {
    display: null,
 
    init: function() {
        this.display = new ROT.Display();
        document.body.appendChild(this.display.getContainer());

		this._generateMap();
    }
};

Game.map = {};
Game._generateMap = function() {
    var digger = new ROT.Map.Digger();
 
    var digCallback = function(x, y, value) {
        if (value) { return; } /* do not store walls */

		var c = new Cell();
		c.x = x;
		c.y = y;
		c.color = Colors['random-beachsand']();
		c.character = '.';
 
        var key = x+","+y;
        this.map[key] = c;
    }
    digger.create(digCallback.bind(this));

	this._drawWholeMap();
}

Game._drawWholeMap = function() {
    for (var key in this.map) {
        var parts = key.split(",");
        var x = parseInt(parts[0], 10);
        var y = parseInt(parts[1], 10);
		this.map[key].draw(this.display); //invert the responsibility, pass in the display and let the cell draw itself
        //this.display.draw(x, y, this.map[key]);
    }
}
