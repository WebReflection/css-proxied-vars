# css-proxied-vars

<sup>**Social Media Photo by [Michael Dziedzic](https://unsplash.com/@lazycreekimages) on [Unsplash](https://unsplash.com/)**</sup>

The easiest way to set, read, or update, CSS properties and variables per each element.

**[Live Demo](https://codepen.io/WebReflection/pen/GRNXrEK?editors=0010)**

```js
import proxiedVars from 'css-proxied-vars';

// example => handle all :root CSS variables
const htmlStyle = proxiedVars(document.documentElement);

// or pseudo
// const pseudoStyle = proxiedVars(element, ':before');

// set CSS properties explicitly
htmlStyle.color = 'blue';

// get CSS properties explicitly (always computed)
htmlStyle.color; // rgb(0, 0, 255)

// set CSS variables explicitly
htmlStyle['--bg-color'] = 'green';

// get CSS variables explicitly (always computed)
htmlStyle['--bg-color']; // green

// iterate as key/value pairs
for (const [key, value] of htmlStyle) {
  console.log({ key, value });
  // { key: 'color', value: 'rgb(0, 0, 255)' }
  // { key: '--bg-color', value: 'green' }
}

// or apply a whole theme via import or literals
Object.assign(htmlStyle, {
  '--bg-color': 'red',
  'color': 'gray',
  '--other': 'value'
});
```
