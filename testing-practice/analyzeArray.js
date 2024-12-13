module.exports = function analyzeArray(array) {
    const avg = array.reduce((prev, cur) => {
        let results = prev + cur
        return results 
    }) / array.length
    const min = Math.min(...array)
    const max = Math.max(...array)
    const length = array.length

    return ({
        average: avg,
        min: min,
        max: max,
        length: length
    })
}