import hyphe from 'uhyphen';

export const t = n => n[0] === '-' ? n : ('--' + hyphe(n));
