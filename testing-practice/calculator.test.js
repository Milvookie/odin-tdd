const calculator = require('./calculator')

describe('sum', () => {
    test('add two numbers', () => {
        expect(calculator().sum(1,3)).toBe(4)
    })
})

describe('substract', () => {
    test('substract two numbers', () => {
        expect(calculator().sub(7,3)).toBe(4)
    })
})

describe('multiply', () => {
    test('multiple two numbers', () => {
        expect(calculator().mul(2,3)).toBe(6)
    })
})

describe('divide', () => {
    test('divide two numbers', () => {
        expect(calculator().div(10,5)).toBe(2)
    })
})