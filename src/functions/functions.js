export function counter(x = 0) {
    let count = 0
    count += x
    return function () {
        return count++
    }
}

export function callableMultiplier() {
    // TODO:
    throw 'Not implemented';
}

export function createCalculator() {
    // TODO:
    // throw 'Not implemented';
}
// в моем представлении вот так и как ты думаешь ето правильно,
// class CreateCalculator {
//     constructor(operation = 'init', value = 0) {
//         this.operation = operation
//         this.value = value
//         this.log = [{operation: this.operation, value: this.value}]
//     }
//
//     add(number) {
//         this.operation = 'add'
//         this.value += number
//         this.log.push({operation: this.operation, value: number})
//     }
//
//     subtract(number) {
//         this.operation = 'subtract'
//         this.value -= number
//         this.log.push({operation: this.operation, value: number})
//     }
//
//     multiply(number) {
//         this.operation = 'multiply'
//         this.value *= number
//         this.log.push({operation: this.operation, value: number})
//     }
//
//     divide(number) {
//         this.operation = 'divide'
//         this.value /= number
//         this.log.push({operation: this.operation, value: number})
//     }
//
// }
//
//
// const calculator = new CreateCalculator('init', 10)
//
//
// calculator.add(10)
// calculator.subtract(20);
// calculator.add(2);
// calculator.multiply(3);
// calculator.divide(2);
//
//
// console.log(calculator)
// console.log(calculator.log)
