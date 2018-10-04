export default class TE {
    private COMMOM: Array<string> = [
        "000000000000",
        "111111111111",
        "222222222222",
        "333333333333",
        "444444444444",
        "555555555555",
        "666666666666",
        "777777777777",
        "888888888888",
        "999999999999"
    ]

    constructor() { }

    validate(teNumber: string): boolean {
        if (!teNumber) return false;

        teNumber = teNumber.replace(/[^\d]+/g, '');

        if (!teNumber || teNumber.length !== 12 || this.COMMOM.indexOf(teNumber) !== -1) return false;

        var multiplyer = '23456789',
            total = 0,
            rest = 0,
            firstDigit = 0,
            secondDigit = 0;

        for (var i = 0; i < multiplyer.length; i++) {
            total += parseInt(teNumber[i]) * parseInt(multiplyer[i]);
        }

        total = parseInt(((total % 11) + '').split('.')[0]);

        firstDigit = total === 10 ? 0 : total;

        total = (parseInt(teNumber[8]) * 7) + (parseInt(teNumber[9]) * 8) + (parseInt(firstDigit.toString()) * 9);
        total = parseInt(((total % 11) + '').split('.')[0]);

        secondDigit = total === 10 ? 0 : total;

        return parseInt(teNumber[teNumber.length - 2]) === firstDigit && parseInt(teNumber[teNumber.length - 1]) === secondDigit;
    }
}