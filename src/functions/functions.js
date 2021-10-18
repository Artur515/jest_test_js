export const counter = (function () {
    let counter = 0
    return function (num = 0) {
        counter += num
        return counter++
    }
})()


export function callableMultiplier(number = null) {
    let total = number

    function multiple() {
        if (arguments.length) {
            let arr = Array.prototype.slice.call(arguments)
            total = total * arrayAdder(arr);
            return multiple;
        } else {
            return total;
        }
    }

    if (arguments.length) {
        let arr1 = Array.prototype.slice.call(arguments)
        let myTotal = arrayAdder(arr1);
        return multiple(myTotal);
    } else {
        return multiple();
    }

    function arrayAdder(arr) {
        let x = 0;
        for (let i = 0; i < arr.length; i++) {
            x = x + arr[i];
        }
        return x;
    }
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
