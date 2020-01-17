import * as helpers from '../helpers'

export default class AC {
    constructor() {}

    static validate(value: string): boolean {
        if (helpers.isDifferentFrom(value, 13)) {
            return false
        }

        if (!value.startsWith('01')) {
            return false
        }

        let base = helpers.getFirstXDigits(value, 11)

        let first = helpers.getSubtractionDigit(helpers.getModule(base))
        let second = helpers.getSubtractionDigit(
            helpers.getModule(base + first)
        )

        return value === base + first + second
    }
}
