import {
    CC as _CC,
    CNH as _CNH,
    CNPJ as _CNPJ,
    CPF as _CPF,
    IE as _IE,
    PIS as _PIS,
    TE as _TE,
} from './ids'

const CC: _CC = new _CC()
const CNH: _CNH = new _CNH()
const CNPJ: _CNPJ = new _CNPJ()
const CPF: _CPF = new _CPF()
const IE: _IE = new _IE()
const PIS: _PIS = new _PIS()
const TE: _TE = new _TE()

;((window: any) => {
    window.LSDocs = { CC, CNH, CNPJ, CPF, IE, PIS, TE }
})(typeof window !== typeof undefined ? window : {})

export { CC, CNH, CNPJ, CPF, IE, PIS, TE }
