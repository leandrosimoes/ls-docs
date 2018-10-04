import * as helpers from '../helpers';

export default class PA {
    constructor() { }

    static validate(value: string): boolean {
        if (helpers.isDifferentFrom(value)) {
            return false;
        }

        if (!value.startsWith('15')) {
            return false;
        }

        return helpers.baseCalc(value, '', false);
    }
}