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

export function mapToProfile() {
    // TODO:
    throw 'Not implemented';
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

export function reduceTo() {
    // TODO:
    // throw 'Not implemented';
}

export function sort() {
    // TODO:
    throw 'Not implemented';
}

export function complex() {
    // TODO:
    throw 'Not implemented';
}
