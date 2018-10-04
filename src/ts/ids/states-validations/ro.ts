import * as helpers from '../helpers';

export default class RO {
    constructor() { }

    static validate(value: string): boolean {
        let base, digit, resultadoMod;

        if (helpers.isEqualTo(value, 9)) {
            base = value.substring(3, 8);
            digit = helpers.getSubtractionDigit(helpers.getModule(base));

            return value === value.substring(0, 3) + base + digit;
        } else if (helpers.isEqualTo(value, 14)) {
            base = helpers.getFirstXDigits(value, 13);
            resultadoMod = helpers.getModule(base);
            digit = resultadoMod <= 1 ? 1 : 11 - resultadoMod;

            return value === base + digit;
        } else {
            return false;
        }
    }
}