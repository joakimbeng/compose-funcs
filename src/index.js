'use strict';
const mimicFn = require('mimic-fn');
const renameFn = require('rename-fn');

const identity = x => x;

const fAfterG = (f, g) => {
	const name = `${f.name} \u2218 ${g.name}`;
	const fn = (...args) => f(g(...args));
	mimicFn(fn, g);
	renameFn(fn, name);
	return fn;
};

const compose = (...args) => {
	if (args.length === 0) {
		return identity;
	}
	if (args.length === 1) {
		return args[0];
	}
	return args.reduce(fAfterG);
};

module.exports = compose;
