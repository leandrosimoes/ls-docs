import * as helpers from '../helpers'

export default class AP {
    constructor() {}

    static validate(value: string): boolean {
        if (helpers.isDifferentFrom(value)) {
            return false
        }

        if (!value.startsWith('03')) {
            return false
        }

        let base = helpers.getFirstXDigits(value)

        let p, d

        if (helpers.IsBetween(parseInt(base), 3000001, 3017000)) {
            p = 5
            d = 0
        } else if (helpers.IsBetween(parseInt(base), 3017001, 3019022)) {
            p = 9
            d = 1
        } else {
            p = 0
            d = 0
        }

        let rest = helpers.getModule(p + base, [2, 3, 4, 5, 6, 7, 8, 9, 1])

        let digit
        if (rest === 1) {
            digit = 0
        } else if (rest === 0) {
            digit = d
        } else {
            digit = 11 - rest
        }

        return value === base + digit
    }
}
