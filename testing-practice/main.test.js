const tests = require('./main');
const capitalize = tests.capitalize
const reverseString = tests.reverseString

describe('Capitalize', function() {
  test('return string with first letter capitalize', function() {
    expect(capitalize('hello')).toEqual('Hello');
  });
});

describe('Reverse', function() {
    test('return reversed string', function() {
        expect(reverseString('Hello')).toEqual('olleH');
    })
})