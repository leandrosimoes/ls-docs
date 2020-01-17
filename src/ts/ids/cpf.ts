export default class CPF {
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

    private verifyDigit(numbers: string): number {
        let currentNumbers = numbers.split('').map(number => {
            return parseInt(number, 10)
        })

        var modulo = currentNumbers.length + 1,
            total = currentNumbers.map((number, index) => {
                return number * (modulo - index)
            }),
            mod =
                total.reduce((buffer: number, number: number) => {
                    return buffer + number
                }) % 11

        return mod < 2 ? 0 : 11 - mod
    }

    validate(cpfNumber: string): boolean {
        cpfNumber = cpfNumber.toString().replace(/[^\d]/g, '')

        if (
            !cpfNumber ||
            cpfNumber.length !== 11 ||
            this.COMMON.indexOf(cpfNumber) >= 0
        ) {
            return false
        }

        var numeros = cpfNumber.substr(0, 9)
        numeros += this.verifyDigit(numeros)
        numeros += this.verifyDigit(numeros)

        return numeros.substr(-2) === cpfNumber.substr(-2)
    }
}
