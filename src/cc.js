; (function (window, document, commonjs) {
	'use strict';

	var cartoesRegex = {
		visa: /^4[0-9]{12}(?:[0-9]{3})/,
		mastercard: /^5[1-5][0-9]{14}/,
		amex: /^3[47][0-9]{13}/,
		dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
		discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
		jcb: /^(?:2131|1800|35\d{3})\d{11}/
	},
    cartoes = {
    	visa: 'visa',
    	mastercard: 'mastercard',
    	amex: 'amex',
    	dinersclub: 'dinersClub',
    	discover: 'discover',
    	jcb: 'jcb'
    };

	var CC = {
		validar: function (nc, bc) {
			nc = (nc || '');
			bc = (bc || '');

			nc = nc.replace(/[^\d]+/g, '');

			if (!nc || !bc) return false;

			return nc.match(cartoesRegex[bc]) == nc;
		},
		temCartaoValido: function (nc) {
			nc = (nc || '');

			nc = nc.replace(/[^\d]+/g, '');

			if (!nc) return false;

			var retorno = false;
			for (var cartao in cartoes) {
				if (!retorno && nc.match(cartoesRegex[cartoes[cartao]])) {
					retorno = true;
				}
			}

			return retorno;
		},
		obterCartaoValido: function (nc) {
			nc = (nc || '');

			nc = nc.replace(/[^\d]+/g, '');

			if (!nc) return false;

			var retorno = '';
			for (var cartao in cartoes) {
				if (!retorno && nc.match(cartoesRegex[cartoes[cartao]])) {
					retorno = cartao.toString();
				}
			}

			return retorno;
		}
	};

	if (commonjs) {
		module.exports = CC;
		module.CC.cartoes = cartoes;
	} else {
		window.CC = CC;
		window.CC.cartoes = cartoes;
	}
})(window, document, typeof (exports) !== "undefined");