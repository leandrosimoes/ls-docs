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
      "99999999999"
    ];

    var PIS = {
        validar: function (pis) {
            if (!pis) return false;

            var multiplicadorBase = "3298765432",
                total = 0,
                resto = 0,
                multiplicando = 0,
                multiplicador = 0,
                digito = 99;

            pis = pis.replace(/[^\d]+/g, '');

            if (pis.length !== 11 || comuns.indexOf(pis) !== -1) return false;

            for (var i = 0; i < 10; i++) {
                multiplicando = parseInt(pis.substring(i, i + 1));
                multiplicador = parseInt(multiplicadorBase.substring(i, i + 1));
                total += multiplicando * multiplicador;
            }

            resto = 11 - total % 11;
            resto = resto === 10 || resto === 11 ? 0 : resto;

            digito = parseInt('' + pis.charAt(10));

            return resto === digito;
        }
    };

    if (commonjs) {
        module.exports = PIS;
    } else {
        window.PIS = PIS;
    }
})(window, document, typeof (exports) !== "undefined");