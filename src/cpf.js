; (function (window, document, commonjs) {
    'use strict';

    var comuns = [
      "00000000000",
      "11111111111",
      "22222222222",
      "33333333333",
      "44444444444",
      "55555555555",
      "66666666666",
      "77777777777",
      "88888888888",
      "99999999999",
      "12345678909",
      "12345678910",
    ];

    var digitoVerificador = function (numeros) {
        numeros = numeros
          .split("")
          .map(function (numero) { return parseInt(numero, 10); });

        var modulo = numeros.length + 1,
            total = numeros.map(function (numero, index) {
                return numero * (modulo - index);
            }),
            mod = total.reduce(function (buffer, numero) {
                return buffer + numero;
            }) % 11;

        return (mod < 2 ? 0 : 11 - mod);
    };

    var CPF = {};

    CPF.validar = function (cpf) {
        cpf = (cpf || '').toString().replace(/[^\d]/g, '');

        if (!cpf || cpf.length !== 11 || comuns.indexOf(cpf) >= 0) { return false; }

        var numeros = cpf.substr(0, 9);
        numeros += digitoVerificador(numeros);
        numeros += digitoVerificador(numeros);

        return numeros.substr(-2) === cpf.substr(-2);
    };

    if (commonjs) {
        module.exports = CPF;
    } else {
        window.CPF = CPF;
    }
})(window, document, typeof (exports) !== "undefined");