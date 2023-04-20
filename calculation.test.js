const mathOperations = require('./calculation')
describe('Test Calculation Methods', () => {
    test('Addition of 2 numbers', () => {
        let result = mathOperations.sum(3, 4)
        expect(result).toBe(7)
    })
})