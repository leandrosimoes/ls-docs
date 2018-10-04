import * as helpers from '../helpers';

export default class RS {
    constructor() { }

    static validate(value: string): boolean {
        if (helpers.isDifferentFrom(value, 10)) {
            return false;
        }

        let base = helpers.getFirstXDigits(value, 9);
        return helpers.baseCalc(value, base, true);
    }
}