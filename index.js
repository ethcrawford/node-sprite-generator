// entry point
var path = require('path');
var nsg = require('node-sprite-generator');

var PATHS = {
  source: path.join(__dirname, 'source/images/'),
  distSprite: path.join(__dirname, 'dist/sprite/'),
  distStylus: path.join(__dirname, 'dist/stylus/')
};

nsg({
    src: [
        PATHS.source + '*.png'
    ],
    spritePath: PATHS.distSprite + 'sprite.png',
    stylesheetPath: PATHS.distStylus + 'sprite.styl',
    layoutOptions: {
      padding: 10,
      scaling: 1
    },
    compositor: 'jimp'
}, function (err) {
    console.log('Sprite generated!');
});
