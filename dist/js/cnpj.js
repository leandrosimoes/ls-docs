; (function (commonjs) {
    'use strict';

    var comuns = [
      "00000000000000",
      "11111111111111",
      "22222222222222",
      "33333333333333",
      "44444444444444",
      "55555555555555",
      "66666666666666",
      "77777777777777",
      "88888888888888",
      "99999999999999"
    ];

    var digitoVerificador = function (numeros) {
        var index = 2,
            reverse = numeros.split("").reduce(function (atual, prox) {
                return [parseInt(prox, 10)].concat(atual);
            }, []),
            total = reverse.reduce(function (atual, prox) {
                atual += prox * index;
                index = (index === 9 ? 2 : index + 1);
                return atual;
            }, 0);

        var mod = total % 11;
        return (mod < 2 ? 0 : 11 - mod);
    };

    var CNPJ = {};

    CNPJ.validar = function (cnpj) {
        cnpj = (cnpj || "").toString().replace(/[^\d]/g, "");

        // CNPJ must be defined
        if (!cnpj) { return false; }

        // CNPJ must have 14 chars
        if (cnpj.length !== 14) { return false; }

        // CNPJ can't be comunsed
        if (comuns.indexOf(cnpj) >= 0) { return false; }

        var numeros = cnpj.substr(0, 12);
        numeros += digitoVerificador(numeros);
        numeros += digitoVerificador(numeros);

        return numeros.substr(-2) === cnpj.substr(-2);
    };

    if (commonjs) {
        module.exports = CNPJ;
    } else {
        window.CNPJ = CNPJ;
    }
})(typeof (exports) !== "undefined");