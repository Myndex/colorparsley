import test from 'ava';

import { colorParsley } from '../src/colorparsley.js';

console.log("The following tests are a 'pass' if they\ngracefully fail to parse the color string.\nThis also means the expected console.log\noutput is: 'colorParsley error: ...'\n")
test.todo("Testing for parsley rejections\n")

test('Arbitrary string parse -> fail is a pass', (t) => {
    t.deepEqual([ 0, 0, 0, 0, false, 'parsleyError' ], colorParsley('hello'));
});

test('Out of bounds rgb value parse -> fail is a pass', (t) => {
    t.deepEqual([ 0, 0, 0, 0, false, 'parsleyError' ], colorParsley('rgb(123,255.7,123)'));
});

test('Mixed rgb value types parse -> fail is a pass', (t) => {
    t.deepEqual([ 0, 0, 0, 0, false, 'parsleyError' ], colorParsley('rgb(123,88%,123)'));
});

test('Object missing r g b keys -> fail is a pass', (t) => {
    t.deepEqual([0,0,0,0,false,'inputError'], colorParsley({fred: 1, bob: 20, grace: 9,}));
});



