module.exports = function Calculator() {
    const sum = (a,b) => {
        return a + b
    }

    const sub = (a,b) => {
        return a - b
    }

    const mul = (a,b) => {
        return a * b
    }

    const div = (a,b) => {
        return a / b
    }

    return {sum, sub, mul, div}
}