const fetch = (...args) =>
  import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs');
const figmaToken = 'figd_zcaXx-ou3zVZX2w5YVvrbuWoO5uVWnzTdk8enhRK';
const figmaFile = 'x8jzD6SmD4RHPh1Jp8xTEw';

getFigmaTree().then(r => console.log(r));

async function getFigmaTree() {
  let result = await fetch('https://api.figma.com/v1/files/' + figmaFile, {
    method: 'GET',
    headers: {'X-Figma-Token': figmaToken}
  });
  let figmaTree = await result.json();
  let colorStyles = '',
    textStyles = '';
  for (const [key, value] of Object.entries(figmaTree.styles)) {
    if (value.styleType === 'FILL') colorStyles += ',' + key;
    if (value.styleType === 'TEXT') textStyles += ',' + key;
  }
  await getFigmaNodes(colorStyles, 'color');
  await getFigmaNodes(textStyles, 'text');
}

async function getFigmaNodes(ids, type) {
  let id = ids.replace(',', '');
  let result = await fetch(
    'https://api.figma.com/v1/files/' + figmaFile + '/nodes?ids=' + id,
    {
      method: 'GET',
      headers: {
        'X-Figma-Token': figmaToken
      }
    }
  );
  let figmaNode = await result.json();
  const colorNodes = [];
  const textNodes = [];
  for (const [, value] of Object.entries(figmaNode.nodes)) {
    if (type === 'color') colorNodes.push(value.document);
    if (type === 'text') textNodes.push(value.document);
  }
  if (colorNodes.length) createColorVariables(colorNodes);
  if (textNodes.length) createTextVariables(textNodes);
}

const createTextVariables = nodes => {
  let data = ':root {\n';
  nodes.forEach(item => {
    let name = item.name.replaceAll(' ', '_');
    name = name.replaceAll('/', '__');
    data +=
      '--' +
      name +
      ': ' +
      item.style.fontWeight +
      ' ' +
      item.style.fontSize +
      'px/' +
      item.style.lineHeightPx +
      'px "' +
      item.style.fontFamily +
      '";\n';
  });
  data += '}';
  const file = fs.createWriteStream('src/static/css/textVars.css');
  file.write(data);
  file.end();
};

const createColorVariables = nodes => {
  let data = ':root {\n';
  nodes.forEach(item => {
    if (item.fills[0].color) {
      let name = item.name.replaceAll(' ', '_');
      name = name.replaceAll('/', '__');
      name = name.replaceAll('%', 'a');
      let cA = item.fills[0].color.a;
      let cR = Math.round(item.fills[0].color.r * 255);
      let cG = Math.round(item.fills[0].color.g * 255);
      let cB = Math.round(item.fills[0].color.b * 255);
      data +=
        '--' + name + ': rgba(' + cR + ',' + cG + ',' + cB + ',' + cA + ');\n';
    }
  });
  data += '}';
  const file = fs.createWriteStream('src/static/css/colorVars.css');
  file.write(data);
  file.end();
};
