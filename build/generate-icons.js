const path = require('path');
const fs = require('graceful-fs');
const changeCase = require('change-case');

const patch = require('patch-module');
const _ = require('lodash');

const svgfont2js = patch('./node_modules/svgfont2js/index.js', [
  {
    find: '(!g.$.d)',
    replace: '(!g.$.d || !g.$.unicode)',
    expect: 1
  }
]);

const iconTemplate = 'export default <%= data %>;\n';
const icons = svgfont2js(
  fs.readFileSync(
    require.resolve('font-awesome/fonts/fontawesome-webfont.svg'),
    'utf-8'
  )
);

function loadAliases(less) {
  const pairs = _.compact(_.map(less.split('\n'), line => {
    // Line is `@fa-var-dropbox: "\f16b";`
    if (line.indexOf('@fa-var-') !== 0) {
      return;
    }
    // Now it is `dropbox: "\f16b";`
    line = line.split('@fa-var-', 2)[1];
    // Split the line by the `: ` delimiter
    line = line.split(': ');
    // Now we have a line array that looks like:
    // [0] = `dropbox`
    // [1] = "\f16b";`

    // clean up the first key
    line[1] = line[1].split('"')[1].substring(1);
    return {
      name: line[0],
      unicode: line[1]
    };
  }));

  return _.zipObject(
    _.map(pairs, 'name'),
    _.map(pairs, 'unicode')
  );
}
const aliases = loadAliases(
  fs.readFileSync(
    require.resolve('font-awesome/less/variables.less'),
    'utf8'
  )
);

function stringify(data) {
  return JSON.stringify(data)
    .replace(/"/g, '\'')
    .replace(/'([a-zA-Z]+([a-zA-Z0-9]+)?)':/g, '$1:')
    .replace(/:/g, ': ')
    .replace(/,/g, ', ')
    .replace(/{(?!\s)/g, '{ ')
    .replace(/(?<!\s)}/g, ' }')
}

const filenames = [];
const sourceDir = path.join(__dirname, '../src/icons');
for (const i in icons) {
  if (Object.prototype.hasOwnProperty.call(icons, i)) {
    const icon = icons[i];
    const names = Object.keys(aliases).filter(name => {
      return aliases[name] === icon.unicode_hex;
    });
    for (const j in names) {
      if (Object.prototype.hasOwnProperty.call(names, j)) {
        const name = names[j];
        const data = {};
        data[name] = {
          width: icon.width,
          height: icon.height,
          paths: [{
            d: icon.path
          }]
        };
        const contents = _.template(iconTemplate)({data: stringify(data)});
        fs.writeFileSync(path.join(sourceDir, `${name}.js`), contents);
        filenames.push(name);
      }
    }
  }
}

function convertStringToVariable(str) {
  if (!isNaN(str.charAt(0))) {
    str = "fa" + str;
  }
  let numEndingStr = str.replace(/^([a-z0-9\\-]+)-([0-9]+)$/g, '$1$2');
  return changeCase.camelCase(numEndingStr);
}

let index = '';
for (const i in filenames) {
  if (Object.prototype.hasOwnProperty.call(filenames, i)) {
    const filename = filenames[i];
    index += `export { default as ${convertStringToVariable(filename)} } from './${filename}';\n`;
  }
}
fs.writeFileSync(path.join(sourceDir, 'index.js'), index);
