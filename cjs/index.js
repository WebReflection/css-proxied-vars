'use strict';
/*! (c) Andrea Giammarchi */

const {t} = require('./t.js');

class CSSVarsHandler {
  constructor(_) {
    this._ = _;
  }
  get(_, name) {
    return this._.getPropertyValue(t(name));
  }
  set(target, name, value) {
    target.style.setProperty(t(name), value);
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
