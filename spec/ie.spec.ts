import "jasmine";
import { IE } from '../src/ts/index';

describe("IE", () => {
    let _IE: IE;

    beforeAll(() => {
        _IE = new IE()
    })

    it('Must be defined', () => {
        expect(_IE).toBeDefined()
        expect(_IE).not.toBeUndefined()
    })

    it('IE Validations', () => {
        expect(_IE.validate('072.255.334.991', _IE.STATES.SAO_PAULO)).toBe(true)
        expect(_IE.validate('16783284-0', _IE.STATES.CEARA)).toBe(true)
        expect(_IE.validate('11111111111', _IE.STATES.SAO_PAULO)).toBe(false)
        expect(() => { _IE.validate('', _IE.STATES.SAO_PAULO) }).toThrowError("ieNumber must be informed")
        expect(() => { _IE.validate('072.255.334.991') }).toThrowError("Invalid state")
        expect(_IE.getValidState('072.255.334.991')).toBe(_IE.STATES.SAO_PAULO)
        expect(_IE.hasValidState('072.255.334.991')).toBe(true)
        expect(_IE.hasValidState('11111111111')).toBe(false)
    })
})