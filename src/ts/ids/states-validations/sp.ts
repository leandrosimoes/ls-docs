import * as helpers from '../helpers';

export default class SP {
    constructor() { }

    static validate(value: string): boolean {
        value = value.toUpperCase();

        let secondBase;

        if (value.substr(0, 1) === 'P') {
            if (helpers.isDifferentFrom(value, 13)) {
                return false;
            }

            let base = value.substring(1, 9);
            secondBase = value.substring(10, 13);
            let rest = helpers.getModule(base, [10, 8, 7, 6, 5, 4, 3, 1]).toString();
            let digit = rest.length > 1 ? rest[1] : rest[0];

            return value === 'P' + base + digit + secondBase;
        } else {
            if (helpers.isDifferentFrom(value, 12)) {
                return false;
            }

            let firstBase = helpers.getFirstXDigits(value);
            secondBase = value.substring(9, 11);

            let firstRest = helpers.getModule(firstBase, [10, 8, 7, 6, 5, 4, 3, 1]).toString();
            let first = firstRest.length > 1 ? firstRest[1] : firstRest[0];

            let secondRest = helpers.getModule(firstBase + first + secondBase, helpers.arrayFromTo(2, 10)).toString();
            let second = secondRest.length > 1 ? secondRest[1] : secondRest[0];

            return value === firstBase + first + secondBase + second;
        }
    }
}