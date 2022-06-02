import test from 'ava';

import { colorParsley } from '../src/colorparsley.js';

test('Hex values with alpha', (t) => {
    t.deepEqual([18, 52, 86, 0.8, true, 'sRGB'], colorParsley('#123456cc'));
});

test('Named color', (t) => {
    t.deepEqual([ 95, 158, 160, 1, true, 'sRGB' ], colorParsley('cadetblue'));
});

test('RGB color with floats and alpha', (t) => {
    t.deepEqual([ 170, 187, 205, 0.7, true, 'sRGB' ], colorParsley('rgb(170.0, 187.0, 205.0,0.7)'));
});

test('Hexidecimal number', (t) => {
    t.deepEqual([ 128, 128, 128, '', true, 'unknown' ], colorParsley(0x808080));
});

test('HLS color with alpha', (t) => {
    t.deepEqual([ 155, 189, 150, 0.8, true, 'sRGB' ], colorParsley('hsl(112,22.8%,66.5%,0.8)'));
});

test('Three digit number', (t) => {
    t.deepEqual([ 123, 123, 123, 1, true, 'sRGB' ], colorParsley('123,'));
});

test('Three digit string', (t) => {
    t.deepEqual([ 221, 238, 255, 1, true, 'sRGB' ], colorParsley('DEF'));
});

test('String with color space', (t) => {
    t.deepEqual([ 0.234, 0.876, 0.656, 0.4, true, 'display-p3' ], colorParsley('color("display-p3" 0.234 0.876 0.656 / 40%)'));
});

test('Object with color keys', (t) => {
    t.deepEqual([ 123, 77, 200, '', true, 'unknown' ], colorParsley({r: 123, g: 77, b: 200, fred: 'hello', nothing: 0,}));
});

test('Arbitrary string', (t) => {
    t.deepEqual([ 0, 0, 0, 0, false, 'parsleyError' ], colorParsley('hello'));
});

test('Arbitrary string starting with hash', (t) => {
    t.deepEqual([ 250, 250, 250, 1, true, 'sRGB' ], colorParsley('#fa'));
});

test('Three digit string - uppercase', (t) => {
    t.deepEqual([ 170, 187, 204, 1, true, 'sRGB' ], colorParsley('ABC'));
});

test('Three digit string - lowercase', (t) => {
    t.deepEqual([ 170, 187, 204, 1, true, 'sRGB' ], colorParsley('abc'));
});
