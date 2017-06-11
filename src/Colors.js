var Colors = function() {
  var palesand = '#e9d4b7';
  var lightPeachSand = '#ffdcba';
}

Colors.prototype.randomColorChannel = function (min, max) {
  return Math.floor((Math.random() * (max-min) + min)).toString(16);
}

Colors.prototype.randomBeachSand = function() {
    var r = this.randomColorChannel(200, 256);
    var g = this.randomColorChannel(200, 220);
    var b = this.randomColorChannel(183, 186);
    return ['#', r, g, b].join('');
}

module.exports = Colors;