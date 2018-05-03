// entry point
var path = require('path');
var nsg = require('node-sprite-generator');

var PATHS = {
  source: path.join(__dirname, 'source/'),
  distSprite: path.join(__dirname, 'dist/'),
  distStylus: path.join(__dirname, 'dist/')
};

nsg({
    // Options

    // src: Type: String, Default: []
    src: [
        PATHS.source + '*.png'
    ],

    // spritePath: Type: String, Default: ''
    spritePath: PATHS.distSprite + 'sprite.png',

    // stylesheetPath: Type: String, Default: ''
    stylesheetPath: PATHS.distStylus + 'sprite.styl',

    // stylesheet: Type: String|Function, Default: 'stylus'
    // Build-in formats: 'stylus', 'less', 'sass', 'scss',
    // 'css', 'prefixed-css', 'javascript'
    stylesheet: 'stylus',

    // stylesheetOptions: Type: Object, Default: {}
    stylesheetOptions: {
      // prefix: Type: String, Default: ''

      // nameMapping: Type: Function, Default: Filename

      // spritePath: Type: String, Default: Relative Path

      // pixelRatio: Type: Integer, Default: 1
    },

    // layout: Type: String|Function, Default: 'vertical'
    // Built-in layouts: 'packed', 'vertical', 'horizontal', 'diagonal'
    layout: 'vertical',

    // layoutOptions: Type: Object, Default: {}
    layoutOptions: {
      // padding: Type: Integer, Default: 0
      padding: 10,

      // scaling: Type: Number, Default: 1
      scaling: 1
    },

    // compositor: Type: String|Function, Default: 'canvas'
    // Built-in compositors: 'canvas', 'gm', 'jimp'
    compositor: 'jimp'

}, function(err) {
    console.log('Sprite generated');
});
