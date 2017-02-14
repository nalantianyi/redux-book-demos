/* eslint-disable */

//该例子需要手动创建webpack-assets.json
/*
 {
 "assets":{
 "./Counter.png":"/dist/Counter.png"
 }
 }
 */
var WebpackIsomorphicTools = require('webpack-isomorphic-tools');

var config = {assets: {images: {extensions: ['png']}}};

new WebpackIsomorphicTools(config)
  .development()
  .server(__dirname, function () {
    console.log(require('./Counter.png'))
  });
