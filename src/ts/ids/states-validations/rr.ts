import * as helpers from '../helpers';

export default class RR {
    constructor() { }

    static validate(value: string): boolean {
        if (helpers.isDifferentFrom(value)) {
            return false;
        }

        if (!value.startsWith('24')) {
            return false;
        }

        let base = helpers.getFirstXDigits(value);
        let digit = helpers.getModule(base, [8, 7, 6, 5, 4, 3, 2, 1], 9);

        return value === base + digit;
    }
}