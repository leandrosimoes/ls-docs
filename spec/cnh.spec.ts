import "jasmine";
import { CNH } from '../src/ts/index';

describe("CNH", () => {
    let _CNH: CNH;

    beforeAll(() => {
        _CNH = new CNH()
    })

    it('Must be defined', () => {
        expect(_CNH).toBeDefined()
        expect(_CNH).not.toBeUndefined()
    })

    it('CNH Validations', () => {
        expect(_CNH.validate('40231348586')).toBe(true)
        expect(_CNH.validate('68850095437')).toBe(true)
        expect(_CNH.validate('11111111111')).toBe(false)
        expect(_CNH.validate('')).toBe(false)
    })
})