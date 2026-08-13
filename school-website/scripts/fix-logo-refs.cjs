const fs = require('fs');
const path = require('path');

const dir = 'src';
const files = [];
function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (/\.(astro|jsx|tsx|ts|js)$/.test(f)) files.push(p);
  }
}
walk(dir);

let count = 0;
for (const f of files) {
  let s = fs.readFileSync(f, 'utf8');
  if (s.includes('/logo.svg')) {
    s = s.split('/logo.svg').join('/logo.png');
    fs.writeFileSync(f, s);
    count++;
    console.log('updated', f);
  }
}

const layout = 'src/layouts/Layout.astro';
let l = fs.readFileSync(layout, 'utf8');
l = l.replace('type="image/svg+xml"', 'type="image/png"');
fs.writeFileSync(layout, l);
console.log('fixed favicon mime in', layout);
console.log('total files updated:', count);
