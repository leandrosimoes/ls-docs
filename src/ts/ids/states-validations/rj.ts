import * as helpers from '../helpers';

export default class RJ {
    constructor() { }

    static validate(value: string): boolean {
        if (helpers.isDifferentFrom(value, 8)) {
            return false;
        }

        let base = helpers.getFirstXDigits(value, 7);
        let digit = helpers.getSubtractionDigit(helpers.getModule(base, helpers.arrayFromTo(2, 7)));

        return value === base + digit;
    }
}