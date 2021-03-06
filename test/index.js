const cssVars = require('../cjs');

globalThis.getComputedStyle = element => ({
  getPropertyValue: name => element.style[name]
});

const vars = cssVars({
  style: {
    setProperty(name, value) {
      this[name] = value;
    }
  }
});

vars.backGroundColor = 'green';
console.assert(vars.backGroundColor === 'green');
