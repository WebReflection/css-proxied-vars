# css-proxied-vars

The easiest way to set, read, or update, CSS variables per each element.

**[Live Demo](https://codepen.io/WebReflection/pen/GRNXrEK?editors=0010)**

```js
import proxiedVars from '//unpkg.com/css-proxied-vars?module';

// example => handle all :root CSS variables
const htmlCSSVars = proxiedVars(document.documentElement);

// set CSS variables with ease
htmlCSSVars.bgColor = 'green';

// or apply a whole theme via import or literals
Object.assign(htmlCSSVars, {
  bgColor: 'red',
  color: 'gray'
});
```

### Not compatible with IE

If you are targeting this obsolete browser, forget about this module 👍
