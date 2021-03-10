'use strict';
const hyphe = (m => /* c8 ignore start */ m.__esModule ? m.default : m /* c8 ignore stop */)(require('uhyphen'));

const t = n => n[0] === '-' ? n : ('--' + hyphe(n));
exports.t = t;
