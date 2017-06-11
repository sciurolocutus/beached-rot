var Player = function(x, y) {
    this._x = x;
    this._y = y;
    this._draw();
};
 
Player.prototype._draw = function(display, bgColor) {
    display.draw(this._x, this._y, "@", "#ff0", bgColor);
};
