'use strict';
const test = require('ava');
const compose = require('../src');

test('without args', t => {
	const fn = compose();
	t.is(fn.name, 'identity', 'the identity function should be returned');
	t.is(fn(fn), fn, '...which should return the first argument');
});

test('one argument', t => {
	const double = a => a * 2;
	const fn = compose(double);
	t.is(fn, double, 'the given function should be returned');
});

test('two arguments', t => {
	const add = (a, b) => a + b;
	const double = a => a * 2;
	const fn = compose(double, add);
	t.is(fn.length, add.length, 'the composed function should have the same length as the rightmost one');
	t.is(fn.name, 'double \u2218 add', '...and have a descriptive name');
	t.is(fn(1, 2), 6, '...and return the correct result');
});

test('more arguments', t => {
	const add = (a, b) => a + b;
	const double = a => a * 2;
	const decrease = a => a - 1;
	const fn = compose(double, decrease, double, add);
	t.is(fn.length, add.length, 'the composed function should have the same length as the rightmost one');
	t.is(fn.name, 'double \u2218 decrease \u2218 double \u2218 add', '...and have a descriptive name');
	t.is(fn(1, 2), 10, '...and return the correct result');
});

