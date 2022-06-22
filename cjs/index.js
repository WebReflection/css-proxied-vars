'use strict';
/*! (c) Andrea Giammarchi */

const {t} = require('./t.js');

class CSSVarsHandler {
  constructor(_) {
    this._ = _;
  }
  deleteProperty(style, name) {
    style.removeProperty(t(name));
    return true;
  }
  get(_, name) {
    return this._.getPropertyValue(t(name));
  }
  has(style, name) {
    return [...style].includes(t(name));
  }
  ownKeys(style) {
    return [...style];
  }
  set(style, name, value) {
    style.setProperty(t(name), value);
    return true;
  }
}

/**
 * @param {Element} target The element where CSS variables will be set.
 * @param {string?} pseudo The optional pseudo element to read variables from.
 */
module.exports = (target, pseudo = null) => new Proxy(
  target.style,
  new CSSVarsHandler(
    getComputedStyle(target, pseudo)
  )
);
