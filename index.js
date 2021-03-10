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
                             var index = (target, pseudo = null) => new Proxy(
                               target,
                               new CSSVarsHandler(
                                 getComputedStyle(target, pseudo)
                               )
                             );

                             exports.default = index;

                             return exports;

}({}).default);
