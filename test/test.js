var postcss = require('postcss'),
	conditionals = require('../'),
	assert = require('assert');

var test = function (input, output) {
    assert.equal(postcss(conditionals()).process(input).css, output);
};

test('@if a == a { success {} }', 'success {}');
test('@if a == b { success {} }', '');
test('@if a != b { success {} }', 'success {}');
test('@if a != a { success {} }', '');
test('@if 2 > 1 { success {} }', 'success {}');
test('@if 1 > 2 { success {} }', '');
test('@if 2 >= 2 { success {} }', 'success {}');
test('@if 1 >= 2 { success {} }', '');
test('@if 1 < 2 { success {} }', 'success {}');
test('@if 2 < 1 { success {} }', '');
test('@if 2 <= 2 { success {} }', 'success {}');
test('@if 2 <= 1 { success {} }', '');
test('@if a == a AND b == b { success {} }', 'success {}');
test('@if a == a AND a == b { success {} }', '');
test('@if a == b OR b == b { success {} }', 'success {}');
test('@if a == b OR b == c { success {} }', '');
test('@if a == b OR b == c { success {} }', '');
test('@if a == a OR (c == b AND b == d) { success {} }', 'success {}');
test('@if NOT (a == b) { success {} }', 'success {}');
test('@if 1 + 1 == 2 { success {} }', 'success {}');
test('@if (1 + 2) + 3 == 6 { success {} }', 'success {}');
test('@if (1 + 2) + 3 == 7 { success {} }', '');
test('@if 1px + 2 == 3px { success {} }', 'success {}');
test('@if 1 + 1px == 2px { success {} }', 'success {}');
test('@if 3 - 2 == 1 { success {} }', 'success {}');
test('@if (3 - 2) + 1 == 2 { success {} }', 'success {}');
test('@if (3 + 2) + 1 == 3 { success {} }', '');
test('@if 3px - 2px == 1px { success {} }', 'success {}');
test('@if 2 - 1px == 1px { success {} }', 'success {}');
test('@if 1 * 2 == 2 { success {} }', 'success {}');
test('@if (1 * 2) * 3 == 6 { success {} }', 'success {}');
test('@if (1 * 2) * 3 == 7 { success {} }', '');
test('@if 3px * 2px == 6px { success {} }', 'success {}');
test('@if 2 * 2px == 4px { success {} }', 'success {}');
test('@if 2 / 2 == 1 { success {} }', 'success {}');
test('@if (4 / 2) / 2 == 1 { success {} }', 'success {}');
test('@if (4 / 2) * 2 == 2 { success {} }', '');
test('@if 4px / 2px == 2px { success {} }', 'success {}');
test('@if 4 / 2px == 2px { success {} }', 'success {}');
test('@if aqua - blue == lime { success {} }', 'success {}');
test('@if lime + rgb(0, 0, 255) == #00ffff { success {} }', 'success {}');
test('@if #0ff == #00ffff { success {} }', 'success {}');
test('@if #0ff == #00ffffff { success {} }', 'success {}');
test('@if #0fff == #00ffff { success {} }', 'success {}');
test('@if #0fff == #00ffffff { success {} }', 'success {}');
test('@if hsl(0, 0%, 100%) == white { success {} }', 'success {}');
test('@if hsla(0, 0%, 100%, .5) == white { success {} }', '');
test('@if rgb(0, 255, 255) == aqua { success {} }', 'success {}');
test('@if rgba(0, 255, 255, .5) == aqua { success {} }', '');
test('@if rgb(0, 255, 255) == rgb(0, 100%, 100%) { success {} }', 'success {}');
test('@if rgba(0, 100%, 100%, 1) == rgb(0, 100%, 100%) { success {} }', 'success {}');