export default class CNH {
    private COMMON: Array<string> = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
        '12345678909',
        '12345678910',
    ]

    constructor() {}

    validate(cnhNumber: string): boolean {
        cnhNumber = (cnhNumber || '').toString().replace(/[^\d]/g, '')

        if (
            !cnhNumber ||
            cnhNumber.length !== 11 ||
            this.COMMON.indexOf(cnhNumber) >= 0
        ) {
            return false
        }

        var multiplier = 9,
            total = 0,
            firstDigit = 0,
            secondDigit = 0,
            module = 0,
            firtDigits,
            verifierDigits

        if (
            !cnhNumber ||
            this.COMMON.indexOf(cnhNumber) !== -1 ||
            cnhNumber.length < 11
        )
            return false

        firtDigits = cnhNumber.substring(0, 9)
        verifierDigits = cnhNumber.substring(9, cnhNumber.length)

        for (var i = 0; i < 9; i++) {
            total += parseInt(firtDigits[i]) * multiplier--
        }

        firstDigit = parseInt(((total % 11) + '').split('.')[0])

        module = firstDigit === 10 ? -2 : module

        firstDigit = firstDigit > 9 ? 0 : firstDigit

        total = 0
        multiplier = 1

        for (var i = 0; i < 9; i++) {
            total += parseInt(firtDigits[i]) * multiplier++
        }

        total = (total % 11) + module

        secondDigit = total < 0 ? 11 + total : total
        secondDigit = secondDigit > 9 ? 0 : secondDigit

        if (verifierDigits == '' + firstDigit + '' + secondDigit) {
            return true
        } else {
            return false
        }
    }
}
