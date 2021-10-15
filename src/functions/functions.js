export const counter = (function () {
    let counter = 0
    return function (num = 0) {
        counter += num
        return counter++
    }
})()


export function callableMultiplier() {
    // TODO:
    throw 'Not implemented';
}


export function createCalculator(value) {
    function Calculator(value = 0) {
        this.value = value
        this.log = [{operation: 'init', value: this.value}]
        this.add = function (number) {
            this.operation = 'add'
            this.value = this.value + number
            this.log.push({operation: this.operation, value: number})
        }
        this.subtract = function (number) {
            this.operation = 'subtract'
            this.value = this.value - number
            this.log.push({operation: this.operation, value: number})
        }
        this.multiply = function (number) {
            this.operation = 'multiply'
            this.value = this.value * number
            this.log.push({operation: this.operation, value: number})
        }
        this.divide = function (number) {
            this.operation = 'divide'
            this.value = this.value / number
            this.log.push({operation: this.operation, value: number})
        }
    }

    return new Calculator(value)
}
