export default class PIS {
    private COMMOM: Array<string> = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ]

    constructor() { }

    validate(pisNumber: string): boolean {
        if (!pisNumber) return false;

        var baseMultiplyer = "3298765432",
            total = 0,
            rest = 0,
            leftMultiplyer = 0,
            rightMultiplyer = 0,
            digit = 99;

        pisNumber = pisNumber.replace(/[^\d]+/g, '');

        if (pisNumber.length !== 11 || this.COMMOM.indexOf(pisNumber) !== -1) return false;

        for (var i = 0; i < 10; i++) {
            leftMultiplyer = parseInt(pisNumber.substring(i, i + 1));
            rightMultiplyer = parseInt(baseMultiplyer.substring(i, i + 1));
            total += leftMultiplyer * rightMultiplyer;
        }

        rest = 11 - total % 11;
        rest = rest === 10 || rest === 11 ? 0 : rest;

        digit = parseInt('' + pisNumber.charAt(10));

        return rest === digit;
    }
}