const fa = require('font-awesome-assets');
const icons = fa.icons;
const aliases = fa.aliases;
const template = require('lodash.template');
const cassandraMap = require('cassandra-map');
const path = require('path');
const fs = require('graceful-fs');

const iconTemplate = "import Icon from '../components/Icon.html'\n\nIcon.register(<%= data %>)\n"

const aliasesByUnicode = Object.keys(aliases).reduce((obj, key) => {
  obj[aliases[key]] = key;
  return obj;
}, {})

const filenames = [];
const sourceDir = path.join(__dirname, '../src/icons');
for (let i in icons) {
  const icon = icons[i];
  const unicode = icon.unicode_hex;
  const name = aliasesByUnicode[icon.unicode_hex];
  if (name) {
    const data = {
      width: icon.width,
      height: icon.height,
      paths: [{
        d: icon.path
      }]
    }
    const contents = template(iconTemplate)({data: cassandraMap.stringify(data)});
    fs.writeFileSync(path.join(sourceDir, `${name}.js`), contents);
    filenames.push(name);
  }
}

let index = "";
for (let i in filenames) {
  const filename = filenames[i];
  index += `import './${filename}'\n`
}
fs.writeFileSync(path.join(sourceDir, "index.js"), index);
