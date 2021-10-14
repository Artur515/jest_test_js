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
        if (typeof args === 'string') {
            return array.sort((a, b) => a[args] - b[args]);
        }
        if (typeof args === 'object') {
            return array.sort((a, b) => (a[args[0]] > b[args[0]]) ? 1 : (a[args[0]] === b[args[0]]) ? ((a[args[1]] > b[args[1]['age']]) ? 1 : -1) : -1)
        }
    }
    // TODO:
    // throw 'Not implemented';
}

export function complex(array,args) {
    return array.filter((elem) => args[0].callback(elem.age)).map((elem) => elem.total)
    // TODO:
    // throw 'Not implemented';
}
