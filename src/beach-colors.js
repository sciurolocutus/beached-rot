var Colors = {
  'palesand' : '#e9d4b7',
  'light-peach-sand' : '#ffdcba',
  'random-beachsand' : function() {
    var randomColorChannel = function (min, max) {
      return Math.floor((Math.random() * (max-min) + min)).toString(16);
    }
    var r = randomColorChannel(200, 256);
    var g = randomColorChannel(200, 220);
    var b = randomColorChannel(183, 186);
    return ['#', r, g, b].join('');
  }
};
