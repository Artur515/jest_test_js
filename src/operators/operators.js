export function add(a, b) {
    // TODO
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b
    } else return null
}

export function subtract(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a - b
    } else return null

    // TODO
    // throw 'Not implemented';
}

export function complex(arr1, arr2) {
    const first = arr1.every((num) => Number.isInteger(num))
    const second = arr2.every((num) => Number.isInteger(num))
    if (first && second) {
        return Math.pow((arr1[0] * arr1[1]), (arr2[0] / arr2[1]))
    } else return null

    // TODO:
    // throw 'Not implemented';
}


