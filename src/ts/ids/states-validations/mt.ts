import * as helpers from '../helpers'

export default class MT {
    constructor() {}

    static validate(value: string): boolean {
        if (
            helpers.isDifferentFrom(value, 11) &&
            helpers.isDifferentFrom(value)
        ) {
            return false
        }

        let base = helpers.isEqualTo(value, 11)
            ? value.substring(0, 10)
            : helpers.getFirstXDigits(value)
        return helpers.baseCalc(value, base, true)
    }
}
