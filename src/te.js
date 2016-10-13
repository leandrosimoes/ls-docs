; (function (window, document, commonjs) {
    'use strict';

    var comuns = [
      "000000000000",
      "111111111111",
      "222222222222",
      "333333333333",
      "444444444444",
      "555555555555",
      "666666666666",
      "777777777777",
      "888888888888",
      "999999999999"
    ];

    var TE = {
        validar: function (te) {
            if (!te) return false;

            te = te.replace(/[^\d]+/g, '');

            if (!te || te.length !== 12 || comuns.indexOf(te) !== -1) return false;

            var multiplicador = '23456789',
                total = 0,
                resto = 0,
                digito1 = 0,
                digito2 = 0;

            for (var i = 0; i < multiplicador.length; i++) {
                total += parseInt(te[i]) * parseInt(multiplicador[i]);
            }

            total = parseInt(((total % 11) + '').split('.')[0]);

            digito1 = total === 10 ? 0 : total;

            total = (parseInt(te[8]) * 7) + (parseInt(te[9]) * 8) + (parseInt(digito1) * 9);
            total = parseInt(((total % 11) + '').split('.')[0]);

            digito2 = total === 10 ? 0 : total;

            return te[te.length - 2] == digito1 && te[te.length - 1] == digito2;
        }
    };

    if (commonjs) {
        module.exports = TE;
    } else {
        window.TE = TE;
    }
})(window, document, typeof (exports) !== "undefined");