export function mapTo(array, args) {
    if (array.every((elem) => Number(elem))) {
        return array.map((num, index) => index)
    }
    if (array.every((obj) => Object(obj))) {
        return array.map(elem => elem[args]).filter(el => el !== undefined)
    }
    // TODO:
    // throw 'Not implemented';
}

export function mapToProfile(array) {
    const outputList = array.map((profile) => {
        return Object.defineProperties(
            {
                name: profile.name || null,
                surname: profile.surname || null,
                fullname:
                    profile.name || profile.surname
                        ? `${profile.name ? profile.name : "_"} ${
                            profile.surname ? profile.surname : "_"
                        }`
                        : null,
                age: profile.age || null,
            },
            {
                isAnonymous: {
                    get: function () {
                        if (this.fullname !== null) {
                            return false;
                        } else return true;
                    }
                },
                isOld: {
                    get: function () {
                        if (this.age < 65) {
                            return false;
                        } else return true;
                    },
                },
            },
        );
    });
    return outputList;
    // TODO:
    // throw 'Not implemented';
}

export function filterBy(array, args) {

    if (array.every((elem) => Number(elem))) {
        return array.filter((elem) => elem >= args);
    }
    if (array.every((obj) => Object(obj))) {
        if (typeof args === 'string') {
            return array.filter((elem) => elem.hasOwnProperty(args));
        }
        return array.filter((elem) => args.filterCb(elem[args.property]))
    }
    // TODO:
    // throw 'Not implemented';
}

export function reduceTo(array, callBack) {
    if (array.every(elem => Number(elem))) {
        return array.reduce((accumulator, currentValue) => accumulator + currentValue)
    }
    if (array.every((obj) => Object(obj))) {
        if (typeof callBack === 'string') {
            return array.reduce((accumulator, currentValue) => {
                return accumulator + currentValue[callBack]
            }, 0)
        } else return array.reduce((accum, currentValue) => {
            accum[0] += currentValue[callBack[0]]
            accum[1] += currentValue[callBack[1]]
            return accum
        }, [0, 0])
    }
    // TODO:
    // throw 'Not implemented';
}


export function sort(array, args) {
    if (array.every((elem) => Number(elem))) {
        return array.sort((a, b) => a - b)
    }
    if (array.every((obj) => Object(obj))) {
        return array.sort((a, b) => {
            let result
            if (typeof args === "string") {
                if (!result) {
                    if (a[args] > b[args]) {
                        result = 1
                    }
                    if (a[args] < b[args]) {
                        result = -1
                    }
                }
            } else {
                args.forEach((elem) => {
                    if (typeof elem === "string") {
                        if (!result) {
                            if (a[elem] > b[elem]) {
                                result = 1
                            }
                            if (a[elem] < b[elem]) {
                                result = -1
                            }
                        }
                    }
                    if (typeof elem === 'object') {
                        if (!result) {
                            if (a[elem.field] > b[elem.field]) {
                                result = elem.order === 'desc' ? -1 : 1
                            }
                            if (a[elem.field] < b[elem.field]) {
                                result = elem.order === 'desc' ? 1 : -1
                            }
                        }
                    }
                })
            }
            return result
        })

    }

// TODO:
// throw 'Not implemented';
}

export function complex(array, args) {
    args.forEach((arg) => {
        if (arg.operation === 'filter') {
            return array = array.filter(elem => arg.callback(elem[arg.property]))
        } else if (arg.operation === 'map') {
            return array = array.map(elem => elem[arg.property])
        } else if (arg.operation === 'reduce') {
            return array = array.map(elem => elem[arg.property]).reduce((prev, current) => prev + current)
        } else if (arg.operation === "sort") {
            return array = array.sort((a, b) => b - a)
        }
    })
    return array
}

// export function complex(data, tasks) {
//     tasks.forEach((task) => {
//         if (task.operation === "filter") {
//             data = data.filter((elem) => {
//                 return task.callback(elem[task.property]);
//             });
//             return data;
//         } else if (task.operation === "map") {
//             data = data.map((elem) => {
//                 return elem[task.property];
//             });
//             return data;
//         } else if (task.operation === "reduce") {
//             data = data
//                 .map((elem) => {
//                     return elem[task.property];
//                 })
//                 .reduce((prev, curr) => {
//                     return prev + curr;
//                 });
//             return data;
//         } else if (task.operation === "sort") {
//             data = data.sort((a, b) => {
//                 return b - a;
//             });
//             return data;
//         }
//     });
//     return data;
// }
