import { BRAZIL_STATES } from './enums';
import {
    AC, AL, AM, AP, BA, CE, DF, ES,
    GO, MA, MG, MS, MT, PA, PB, PE, PI,
    PR, RJ, RN, RO, RR, RS, SC, SE, SP, TO
} from './states-validations';

export default class ieNumber {
    STATES: any;

    constructor() {
        this.STATES = { ...BRAZIL_STATES }
    }

    validate(ieNumber: string, state: BRAZIL_STATES = BRAZIL_STATES.NONE): boolean {
        if (state === undefined) {
            throw new Error('Invalid state');
        }

        if (!ieNumber) {
            throw new Error('ieNumber must be informed');
        }

        if (typeof ieNumber !== 'string') {
            throw new Error('ieNumber deve ser string ou array de strings');
        }

        if (ieNumber.match(/^ISENTO$/i)) {
            return true;
        }

        ieNumber = ieNumber.replace(/[\.|\-|\/|\s]/g, '');

        if (/^\d+$/.test(ieNumber) || state === BRAZIL_STATES.SAO_PAULO) {
            switch (state) {
                case BRAZIL_STATES.ACRE:
                    return AC.validate(ieNumber)
                case BRAZIL_STATES.ALAGOAS:
                    return AL.validate(ieNumber)
                case BRAZIL_STATES.AMAPA:
                    return AP.validate(ieNumber)
                case BRAZIL_STATES.AMAZONAS:
                    return AM.validate(ieNumber)
                case BRAZIL_STATES.BAHIA:
                    return BA.validate(ieNumber)
                case BRAZIL_STATES.CEARA:
                    return CE.validate(ieNumber)
                case BRAZIL_STATES.DISTRITO_FEDERAL:
                    return DF.validate(ieNumber)
                case BRAZIL_STATES.ESPIRITO_SANTO:
                    return ES.validate(ieNumber)
                case BRAZIL_STATES.GOIAS:
                    return GO.validate(ieNumber)
                case BRAZIL_STATES.MARANHAO:
                    return MA.validate(ieNumber)
                case BRAZIL_STATES.MASOGROSSO_DO_SUL:
                    return MS.validate(ieNumber)
                case BRAZIL_STATES.MATOGROSSO:
                    return MT.validate(ieNumber)
                case BRAZIL_STATES.MINAS_GERAIS:
                    return MG.validate(ieNumber)
                case BRAZIL_STATES.PARA:
                    return PA.validate(ieNumber)
                case BRAZIL_STATES.PARAIBA:
                    return PB.validate(ieNumber)
                case BRAZIL_STATES.PARANA:
                    return PR.validate(ieNumber)
                case BRAZIL_STATES.PERNAMBUCO:
                    return PE.validate(ieNumber)
                case BRAZIL_STATES.PIAUI:
                    return PI.validate(ieNumber)
                case BRAZIL_STATES.RIO_DE_JANEIRO:
                    return RJ.validate(ieNumber)
                case BRAZIL_STATES.RIO_GRANDE_DO_NORTE:
                    return RN.validate(ieNumber)
                case BRAZIL_STATES.RIO_GRANDE_DO_SUL:
                    return RS.validate(ieNumber)
                case BRAZIL_STATES.RONDONIA:
                    return RO.validate(ieNumber)
                case BRAZIL_STATES.RORAIMA:
                    return RR.validate(ieNumber)
                case BRAZIL_STATES.SANTA_CATARINA:
                    return SC.validate(ieNumber)
                case BRAZIL_STATES.SAO_PAULO:
                    return SP.validate(ieNumber)
                case BRAZIL_STATES.SERGIPE:
                    return SE.validate(ieNumber)
                case BRAZIL_STATES.TOCANTINS:
                    return TO.validate(ieNumber)
                default:
                    throw new Error('Invalid state');
            }
        }

        return false;
    }

    hasValidState(ieNumber: string): Boolean {
        return this.getValidState(ieNumber) !== BRAZIL_STATES.NONE
    }

    getValidState(ieNumber: string): BRAZIL_STATES {
        for (let state in BRAZIL_STATES) {
            if (!!this.validate(ieNumber, (<BRAZIL_STATES>state))) return (<BRAZIL_STATES>state)
        }

        return BRAZIL_STATES.NONE;
    }
}