import "jasmine";
import { TE } from '../src/ts/index';

describe("TE", () => {
    let _TE: TE;

    beforeAll(() => {
        _TE = new TE()
    })

    it('Must be defined', () => {
        expect(_TE).toBeDefined()
        expect(_TE).not.toBeUndefined()
    })

    it('TE Validations', () => {
        expect(_TE.validate('527614150175')).toBe(true)
        expect(_TE.validate('560354740868')).toBe(true)
        expect(_TE.validate('11111111111')).toBe(false)
        expect(_TE.validate('')).toBe(false)
    })
})