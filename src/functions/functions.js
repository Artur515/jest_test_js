export function counter() {
    let counter = 0;
    return function () {
        return counter++
    };
}

export function callableMultiplier() {
    // TODO:
    throw 'Not implemented';
}


export function CreateCalculator(operation = 'init', value = 0) {
    this.operation = operation
    this.value = value
    this.log = [{operation: operation, value: this.value}]
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

// console.log(new CreateCalculator())
// console.log(calculator)
// calculator.add(10)
// console.log(calculator.log)
// calculator.subtract(20);
// calculator.add(2);
// calculator.multiply(3);
// calculator.divide(2);
//


// или можно так
// class CreateCalculator {
//     constructor(operation = 'init', value = 0) {
//         this.operation = operation
//         this.value = value
//         this.log = [{operation: operation, value: this.value}]
//     }
//
//     add(number) {
//         this.operation = 'add'
//         this.value = this.value + number
//         this.log.push({operation: this.operation, value: number})
//     }
//
//     subtract(number) {
//         this.operation = 'subtract'
//         this.value = this.value - number
//         this.log.push({operation: this.operation, value: number})
//     }
//
//     multiply(number) {
//         this.operation = 'multiply'
//         this.value = this.value * number
//         this.log.push({operation: this.operation, value: number})
//     }
//
//     divide(number) {
//         this.operation = 'divide'
//         this.value = this.value / number
//         this.log.push({operation: this.operation, value: number})
//     }
//
// }
//
//
// const calculator = new CreateCalculator('init', 10)
//
// console.log(calculator.log)
// calculator.add(10)
// calculator.subtract(20);
// calculator.add(2);
// calculator.multiply(3);
// calculator.divide(2);
//
//
// console.log(calculator)
// console.log(calculator.log)
// console.log(calculator.value)