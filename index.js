var cssProxiedVars = (function (exports) {
                             'use strict';

                             var hyphe = camel => camel.replace(/(([A-Z0-9])([A-Z0-9][a-z]))|(([a-z])([A-Z]))/g, '$2$5-$3$6')
                                                          .toLowerCase();

                             const t = n => n[0] === '-' ? n : ('--' + hyphe(n));

                             /*! (c) Andrea Giammarchi */

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
                             var index = (target, pseudo = null) => new Proxy(
                               target.style,
                               new CSSVarsHandler(
                                 getComputedStyle(target, pseudo)
                               )
                             );

                             exports["default"] = index;

                             return exports;

})({}).default;
