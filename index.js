var cssProxiedVars = (function (exports) {
                             'use strict';

                             var uhyphen = camel => camel.replace(/(([A-Z0-9])([A-Z0-9][a-z]))|(([a-z])([A-Z]))/g, '$2$5-$3$6')
                                                          .toLowerCase();

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
                             var index = (target, pseudo = null) => new Proxy(
                               target,
                               new CSSVarsHandler(
                                 getComputedStyle(target, pseudo)
                               )
                             );

                             exports.default = index;

                             return exports;

}({}).default);
