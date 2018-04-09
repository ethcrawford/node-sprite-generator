// entry point
var nsg = require('node-sprite-generator');

nsg({
    src: [
        'images/sprite/*.png'
    ],
    spritePath: 'images/sprite.png',
    stylesheetPath: 'stylus/sprite.styl',
    stylesheet: 'stylus',
    stylesheetOptions: {
      prefix: '',
      pixelRatio: 1
    },
    layout: 'vertical',
    layoutOptions: {
      padding: 0,
      scaling: 1
    },
    compositor: 'canvas',
    compositorOptions: {
      compressionLevel: 6, // 0-9
      filter: 'all'
    }
}, function (err) {
    console.log('Sprite generated!');
});
