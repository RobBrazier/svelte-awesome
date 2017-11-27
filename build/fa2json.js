var fs = require('fs');
var path = require('path');
var Promise = require('bluebird');
var glob = require('glob');

var fa2svg = require('font-awesome-svg-png/index.js');
var assets = path.resolve(__dirname, '../assets');
var svgDir = `${assets}/svg`;
fa2svg.generate({
  png: false,
  svg: true,
  dest: svgDir,
  color: 'black'
}).then(() => {
  return new Promise((resolve, reject) => {
    var files = glob.sync(svgDir + '/**/*.svg');
    if (files !== undefined && files.length > 0) {
      return resolve(files)
    } else {
      return reject(new Error(`svg files not found in ${svgDir}`))
    }
  })
})
.then(files => {
  var icons = {};
  for (i in files) {
    var file = files[i];
    var svg = fs.readFileSync(file, 'utf8');
    var sizeMatch = svg.match(/ viewBox="0 0 (\d+) (\d+)"/);
    var dMatch = svg.match(/ d="([^"]+)"/);
    if (!sizeMatch || !dMatch) {
        return;
    }
    var icon = {};
    var name = path.parse(file).name;
    icons[name] = {
        width: parseInt(sizeMatch[1], 10),
        height: parseInt(sizeMatch[2], 10),
        paths: [{
            d: dMatch[1]
        }]
    };
  }
  return Promise.resolve(icons)
}).then(icons => {
  fs.writeFileSync(`${assets}/icons.json`, JSON.stringify(icons, null, '  '));
})
