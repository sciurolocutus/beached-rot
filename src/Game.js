/* global ROT */
/* global Colors */
/* global Cell */
/* global Player */

var Game = {
    display: null,
 
    init: function() {
        this.display = new ROT.Display();
        document.body.appendChild(this.display.getContainer());

		this._generateMap();
		this._createPlayer 
    }
};

var groundTypes = ['.', ':', '\u2234'];
require('./Colors');
var bgColor = Colors.palesand;
Game.map = {};
Game._generateMap = function() {
    var digger = new ROT.Map.Digger();
 
    var digCallback = function(x, y, value) {
        if (value) { return; } /* do not store walls */

        require('./Cell');
		var c = new Cell();
		c.x = x;
		c.y = y;
		c.color = Colors['random-beachsand']();
		c.character = groundTypes.random();
 
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
		this.map[key].draw(this.display, bgColor); //invert the responsibility, pass in the display and let the cell draw itself
        //this.display.draw(x, y, this.map[key]);
    }
}

Game._createPlayer = function(freeCells) {
    var index = Math.floor(ROT.RNG.getUniform() * freeCells.length);
    var key = freeCells.splice(index, 1)[0];
    var parts = key.split(",");
    var x = parseInt(parts[0]);
    var y = parseInt(parts[1]);
    require('./Player.js');
    this.player = new Player(x, y);
};
