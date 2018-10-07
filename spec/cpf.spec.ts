import "jasmine";
import { CPF } from '../src/ts/index';

describe("CPF", () => {
    let _CPF: CPF;

    beforeAll(() => {
        _CPF = new CPF()
    })

    it('Must be defined', () => {
        expect(_CPF).toBeDefined()
        expect(_CPF).not.toBeUndefined()
    })

    it('CPF Validations', () => {
        expect(_CPF.validate('776.948.954-70')).toBe(true)
        expect(_CPF.validate('41572466758')).toBe(true)
        expect(_CPF.validate('11111111111')).toBe(false)
        expect(_CPF.validate('')).toBe(false)
    })
})