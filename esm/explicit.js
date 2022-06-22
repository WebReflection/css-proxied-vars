/*! (c) Andrea Giammarchi */



class CSSVarsHandler {
  constructor(_) {
    this._ = _;
  }
  deleteProperty(style, name) {
    style.removeProperty(name);
    return true;
  }
  get(_, name) {
    return this._.getPropertyValue(name);
  }
  has(style, name) {
    return [...style].includes(name);
  }
  ownKeys(style) {
    return [...style];
  }
  set(style, name, value) {
    style.setProperty(name, value);
    return true;
  }
}

/**
 * @param {Element} target The element where CSS variables will be set.
 * @param {string?} pseudo The optional pseudo element to read variables from.
 */
export default (target, pseudo = null) => new Proxy(
  target.style,
  new CSSVarsHandler(
    getComputedStyle(target, pseudo)
  )
);
