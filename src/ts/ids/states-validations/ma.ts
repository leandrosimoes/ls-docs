import * as helpers from '../helpers';

export default class MA {
    constructor() { }

    static validate(value: string): boolean {
        if (helpers.isDifferentFrom(value)) {
            return false;
        }

        if (!value.startsWith('12')) {
            return false;
        }

        return helpers.baseCalc(value, '', false);
    }
}