import * as helpers from '../helpers'

export default class AL {
    constructor() {}

    static validate(value: string): boolean {
        if (helpers.isDifferentFrom(value)) {
            return false
        }

        if (!value.startsWith('24')) {
            return false
        }

        let base = helpers.getFirstXDigits(value)

        let rest = helpers.getModule(base) * 10
        rest = rest - parseInt((rest / 11).toString(), 10) * 11
        let digit = rest === 10 ? 0 : rest

        return value === base + digit
    }
}
