import * as helpers from '../helpers';

export default class TO {
    constructor() { }

    static validate(value: string): boolean {
        if (helpers.isDifferentFrom(value) && helpers.isDifferentFrom(value, 11)) {
            return false;
        }

        let base;

        if (helpers.isEqualTo(value, 11)) {
            if (['01', '02', '03', '99'].indexOf(value.substring(2, 4)) === -1) {
                return false;
            }

            base = value.substring(0, 2) + value.substring(4, 10);
        } else {
            base = helpers.getFirstXDigits(value);
        }

        let digit = helpers.getSubtractionDigit(helpers.getModule(base));

        return value === value.substring(0, value.length - 1) + digit;
    }
}