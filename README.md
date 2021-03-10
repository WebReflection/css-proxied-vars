# css-proxied-vars

The easiest way to set, read, or update, CSS variables per each element.

**[Live Demo](https://codepen.io/WebReflection/pen/GRNXrEK?editors=0010)**

```js
// explicit only variant
// import proxiedVars from 'css-proxied-vars/explicit';

import proxiedVars from 'css-proxied-vars';

// example => handle all :root CSS variables
const htmlCSSVars = proxiedVars(document.documentElement);

// set CSS variables automatically
htmlCSSVars.bgColor = 'green';

// or explicitly
htmlCSSVars['--bg-color'] = 'green';

// or apply a whole theme via import or literals
Object.assign(htmlCSSVars, {
  bgColor: 'red',
  color: 'gray',
  '--other': 'value'
});
```

### Exports

  * **css-proxied-vars** recognizes explicit variable names, or automatically make *--hyphen-case* any *camelCase* property
  * **css-proxied-vars/explicit** accepts only explicit *--property-name*, without needing dependencies to do work

### Not compatible with IE

If you are targeting this obsolete browser, forget about this module 👍
