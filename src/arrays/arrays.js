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
                        if (this.fullname!==null) {
                            return false;
                        } else return true;
                    }},
                isOld: {
                    get: function () {
                        if (this.age<65) {
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
