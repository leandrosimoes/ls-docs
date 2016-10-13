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

    var CNH = {};

    CNH.validar = function (cnh) {
        cnh = (cnh || '').toString().replace(/[^\d]/g, '');

        if (!cnh || cnh.length !== 11 || comuns.indexOf(cnh) >= 0) { return false; }

        var multiplicador = 9,
            soma = 0,
            digito1 = '',
            digito2 = '',
            modulo = 0,
            primeirosDigitos,
            digitosVerificadores;

        if (!cnh || comuns.indexOf(cnh) !== -1 || cnh.length < 11) return false;

        primeirosDigitos = cnh.substring(0, 9);
        digitosVerificadores = cnh.substring(9, cnh.length);

        for (var i = 0; i < 9; i++) {
            soma += parseInt(primeirosDigitos[i]) * multiplicador--;
        }

        digito1 = parseInt(((soma % 11) + '').split('.')[0]);

        modulo = digito1 === 10 ? -2 : modulo;

        digito1 = digito1 > 9 ? 0 : digito1;

        soma = 0;
        multiplicador = 1;

        for (var i = 0; i < 9; i++) {
            soma += parseInt(primeirosDigitos[i]) * multiplicador++;
        }

        soma = (soma % 11) + modulo;

        digito2 = soma < 0 ? 11 + soma : soma;
        digito2 = digito2 > 9 ? 0 : digito2;

        if (digitosVerificadores == ('' + digito1 + '' + digito2)) {
            return true;
        } else {
            return false;
        }
    };

    if (commonjs) {
        module.exports = CNH;
    } else {
        window.CNH = CNH;
    }
})(window, document, typeof (exports) !== "undefined");