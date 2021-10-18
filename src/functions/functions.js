export const counter = (function () {
    let counter = 0
    return function (num = 0) {
        counter += num
        return counter++
    }
})()


export function callableMultiplier(...args) {
    if (!args.length) return null;
    const result = args.reduce((accumulator, value) => accumulator * value, 1);
    const sum = (...innerArgs) => {
        if (innerArgs.length === 0) return result;
        return callableMultiplier(...args, ...innerArgs);
    };
    return sum;
}


export function createCalculator(value) {
    function Calculator(initValue = 0) {

        this._value = initValue

        Object.defineProperty(this, 'value', {
            get: function () {
                return this._value
            },
            set: function () {
            }

        })

        this.log = [{operation: 'init', value: this._value}]

        this.add = function (number) {
            this.operation = 'add'
            this._value = this._value + number
            this.log.push({operation: this.operation, value: number})
        }
        this.subtract = function (number) {
            this.operation = 'subtract'
            this._value = this._value - number
            this.log.push({operation: this.operation, value: number})
        }
        this.multiply = function (number) {
            this.operation = 'multiply'
            this._value = this._value * number
            this.log.push({operation: this.operation, value: number})
        }
        this.divide = function (number) {
            this.operation = 'divide'
            this._value = this._value / number
            this.log.push({operation: this.operation, value: number})
        }
    }

    return new Calculator(value)
}
