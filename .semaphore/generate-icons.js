import path from 'path';
import fs from 'graceful-fs';
import changeCase from 'change-case';

import patch from 'patch-module';
import _ from 'lodash';

const svgfont2js = patch('./node_modules/svgfont2js/index.js', [
  {
    find: '(!g.$.d)',
    replace: '(!g.$.d || !g.$.unicode)',
    expect: 1
  }
]);

const iconTemplate = `import type { IconData } from '$lib/components/Icon.svelte';
const <%= name %>: Record<string, IconData> = <%= data %>;
export default <%= name %>;
`;
const icons = svgfont2js(
  fs.readFileSync(
    './node_modules/font-awesome/fonts/fontawesome-webfont.svg',
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
    './node_modules/font-awesome/less/variables.less',
    'utf8'
  )
);

function stringify(data) {
  return JSON.stringify(data, null, 2)
    .replace(/"/g, '\'')
    .replace(/'([a-zA-Z]+([a-zA-Z0-9]+)?)':/g, '$1:');
}

const filenames = [];
const sourceDir = './src/lib/icons';
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
        const variableName = convertStringToVariable(name);
        const contents = _.template(iconTemplate)({data: stringify(data), name: variableName});
        fs.writeFileSync(path.join(sourceDir, `${variableName}.ts`), contents);
        fs.writeFileSync(path.join(sourceDir, `${variableName}.json`), JSON.stringify(data));
        filenames.push(variableName);
      }
    }
  }
}

function convertStringToVariable(str) {
  if (!isNaN(str.charAt(0)) || _.indexOf(["try"], str) !== -1) {
    str = "fa" + _.capitalize(str);
  }
  let numEndingStr = str.replace(/^([a-z0-9\\-]+)-([0-9]+)$/g, '$1$2');
  return changeCase.camelCase(numEndingStr);
}

let index = 'import type { IconData } from \'$lib/components/Icon.svelte\';\n';
let iconsTs = 'import type { IconData } from \'$lib/components/Icon.svelte\';\n';
let iconIndex = [];
for (const i in filenames) {
  if (Object.prototype.hasOwnProperty.call(filenames, i)) {
    const filename = filenames[i];
    let dataContents = fs.readFileSync(path.join(sourceDir, `${filename}.json`)).toString();
    let fileData = JSON.parse(dataContents);
    // index += `export { default as ${convertStringToVariable(filename)} } from './${filename}';\n`;
    index += `export const ${convertStringToVariable(filename)}: Record<string, IconData> = ${dataContents};\n`;
    iconIndex.push({
      fileName: filename,
      iconName: Object.keys(fileData)[0]
    })
  }
}
fs.writeFileSync(path.join(sourceDir, 'index.ts'), index);
fs.writeFileSync(path.join(sourceDir, 'icons.ts'), iconsTs);
fs.writeFileSync(path.join(sourceDir, 'icons.json'), JSON.stringify(iconIndex, null, 2));
