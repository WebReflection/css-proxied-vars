const descriptor = value => ({
  value,
  configurable: true,
  enumerable: true,
  writable: true
});

class Handler {
  /** @type {CSSStyleDeclaration} */
  #computed;

  /**
   * @param {string} name
   * @returns 
   */
  #value(name) {
    return this.#computed.getPropertyValue(name);
  }

  /**
   * @yields {[string, string]}
   * @param {CSSStyleDeclaration} style
   */
  *#iterator(style) {
    for (const name of style)
      yield [name, this.#value(name)];
  }

  /**
   * @param {CSSStyleDeclaration} computed
   */
  constructor(computed) {
    this.#computed = computed;
  }

  /**
   * @param {CSSStyleDeclaration} style
   * @param {string} name
   * @returns {boolean}
   */
  deleteProperty(style, name) {
    style.removeProperty(name);
    return true;
  }

  /**
   * @param {CSSStyleDeclaration} _
   * @param {string | symbol} name
   * @returns {PropertyDescriptor?}
   */
  getOwnPropertyDescriptor(_, name) {
    const value = this.#value(name);
    return value ? descriptor(value) : void 0;
  }

  /**
   * @param {CSSStyleDeclaration} style
   * @param {string | symbol} name
   * @returns {string}
   */
  get(style, name) {
    return name === Symbol.iterator ?
      this.#iterator.bind(this, style) :
      this.#value(name);
  }

  /**
   * @param {CSSStyleDeclaration} style
   * @param {string} name
   * @returns {boolean}
   */
  has(style, name) {
    return [...style].includes(name);
  }

  /**
   * @param {CSSStyleDeclaration} style
   * @returns {string[]}
   */
  ownKeys(style) {
    return [...style];
  }

  /**
   * @param {CSSStyleDeclaration} style
   * @param {string} name
   * @param {string} value
   * @returns {boolean}
   */
  set(style, name, value) {
    style.setProperty(name, value);
    return true;
  }
}

/**
 * @param {Element} target
 * @param {string} [pseudo]
 * @returns {CSSStyleDeclaration}
 */
export default (target, pseudo = null) => new Proxy(
  /** @type {CSSStyleDeclaration} */(target.style),
  new Handler(getComputedStyle(target, pseudo))
);
