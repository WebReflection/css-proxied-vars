'use strict';
const uhyphen = (m => /* c8 ignore start */ m.__esModule ? m.default : m /* c8 ignore stop */)(require('uhyphen'));

class CSSVarsHandler {
  constructor(_) {
    this._ = _;
  }
  get(_, name) {
    return this._.getPropertyValue('--' + uhyphen(name));
  }
  set(target, name, value) {
    target.style.setProperty('--' + uhyphen(name), value);
    return true;
  }
}

/**
 * @param {Element} target The element where CSS variables will be set.
 * @param {string?} pseudo The optional pseudo element to read variables from.
 */
module.exports = (target, pseudo = null) => new Proxy(
  target,
  new CSSVarsHandler(
    getComputedStyle(target, pseudo)
  )
);
