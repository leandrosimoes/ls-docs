import { CC, CNH, CNPJ, CPF, IE, PIS, TE } from './ids';

export default class LSDocs {
    CC: CC;
    CNH: CNH;
    CNPJ: CNPJ;
    CPF: CPF;
    IE: IE;
    PIS: PIS;
    TE: TE;

    constructor() {
        this.CC = new CC();
        this.CNH = new CNH();
        this.CNPJ = new CNPJ();
        this.CPF = new CPF();
        this.IE = new IE();
        this.PIS = new PIS();
        this.TE = new TE();
    }
}

((window: any) => {
    window.LSDocs = LSDocs;
})(window)