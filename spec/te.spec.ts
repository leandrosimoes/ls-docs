import "jasmine";
import { TE } from '../src/ts/index';

describe("TE", () => {
    it('Must be defined', () => {
        expect(TE).toBeDefined()
        expect(TE).not.toBeUndefined()
    })

    it('TE Validations', () => {
        expect(TE.validate('527614150175')).toBe(true)
        expect(TE.validate('560354740868')).toBe(true)
        expect(TE.validate('11111111111')).toBe(false)
        expect(TE.validate('')).toBe(false)
    })
})