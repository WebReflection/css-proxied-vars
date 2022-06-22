const cssVars = require('../cjs');
const cssVarsExplicit = require('../cjs/explicit');

globalThis.getComputedStyle = element => ({
  getPropertyValue: name => element.style[name]
});

const element = {
  style: {
    removeProperty(name) {
      delete this[name];
    },
    setProperty(name, value) {
      this[name] = value;
    },
    *[Symbol.iterator]() {
      for (const [key, value] of Object.entries(this)) {
        if (typeof value !== 'function')
          yield key;
      }
    }
  }
};

const vars = cssVars(element);
const explicitVars = cssVarsExplicit(element);

console.assert(!('backgroundColor' in vars));
vars.backgroundColor = 'green';
console.assert(vars.backgroundColor === 'green');
console.assert('backgroundColor' in vars);
console.assert(explicitVars['--background-color'] === 'green');
delete vars.backgroundColor;
console.assert(!('backgroundColor' in vars));
vars.backgroundColor = 'green';
console.assert(Object.keys(vars).join(',') === '--background-color');

console.assert(!('--color' in explicitVars));
explicitVars['--color'] = 'red';
console.assert('--color' in explicitVars);
console.assert(explicitVars['--color'] === 'red');
delete explicitVars.backgroundColor;
explicitVars['--color'] = 'red';

console.assert(element.style['--color'] === 'red');
console.assert(element.style['--background-color'] === 'green');
console.assert(Object.keys(explicitVars).join(',') === '--background-color,--color');
