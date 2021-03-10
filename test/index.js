const cssVars = require('../cjs');
const cssVarsExplicit = require('../cjs/explicit');

globalThis.getComputedStyle = element => ({
  getPropertyValue: name => element.style[name]
});

const element = {
  style: {
    setProperty(name, value) {
      this[name] = value;
    }
  }
};

const vars = cssVars(element);
const explicitVars = cssVarsExplicit(element);

vars.backgroundColor = 'green';
console.assert(vars.backgroundColor === 'green');
console.assert(explicitVars['--background-color'] === 'green');

explicitVars['--color'] = 'red';
console.assert(explicitVars['--color'] === 'red');

console.assert(element.style['--color'] === 'red');
console.assert(element.style['--background-color'] === 'green');
