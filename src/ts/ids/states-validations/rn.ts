import * as helpers from '../helpers'

export default class RN {
    constructor() {}

    static validate(value: string): boolean {
        if (
            helpers.isDifferentFrom(value) &&
            helpers.isDifferentFrom(value, 10)
        ) {
            return false
        }

        if (!value.startsWith('20')) {
            return false
        }

        let base = value.substring(0, value.length - 1)

        let multipliers = helpers.arrayFromTo(2, 9)
        if (helpers.isEqualTo(value, 10)) {
            multipliers.push(10)
        }

        let rest = (helpers.getModule(base, multipliers) * 10) % 11
        let digit = rest === 10 ? 0 : rest

        return value === base + digit
    }
}
