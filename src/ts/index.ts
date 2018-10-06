import { CC, CNH, CNPJ, CPF, IE, PIS, TE } from './ids'

((window: any) => {
    window.LSDocs = { CC, CNH, CNPJ, CPF, IE, PIS, TE };
})(typeof window !== typeof undefined ? window : {})

export { CC, CNH, CNPJ, CPF, IE, PIS, TE }