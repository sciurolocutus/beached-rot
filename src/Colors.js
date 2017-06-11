var Colors = function() {
};

Colors.palesand = '#e9d4b7';
Colors.lightPeachSand = '#ffdcba';

Colors.randomColorChannel = function (min, max) {
  return Math.floor((Math.random() * (max-min) + min)).toString(16);
};

Colors.randomBeachSand = function() {
  var r = Colors.randomColorChannel(200, 256);
  var g = Colors.randomColorChannel(200, 220);
  var b = Colors.randomColorChannel(183, 186);
  return ['#', r, g, b].join('');
};

Colors.randomDarkBeachSand = function() {
  var r = Colors.randomColorChannel(30, 60);
  var g = Colors.randomColorChannel(30, 60);
  var b = Colors.randomColorChannel(120, 146);
  return ['#', r, g, b].join('');
}