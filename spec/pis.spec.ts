import "jasmine";
import { PIS } from '../src/ts/index';

describe("PIS", () => {
    let _PIS: PIS;

    beforeAll(() => {
        _PIS = new PIS()
    })

    it('Must be defined', () => {
        expect(_PIS).toBeDefined()
        expect(_PIS).not.toBeUndefined()
    })

    it('PIS Validations', () => {
        expect(_PIS.validate('120.4797.827-2')).toBe(true)
        expect(_PIS.validate('12021262326')).toBe(true)
        expect(_PIS.validate('11111111111')).toBe(false)
        expect(_PIS.validate('')).toBe(false)
    })
})