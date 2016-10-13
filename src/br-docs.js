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

; (function (window, document, commonjs) {
    'use strict';

    var UFS = ["ac", "al", "am", "ap", "ba", "ce", "df", "es", "go",
               "ma", "mt", "ms", "mg", "pa", "pb", "pr", "pe", "pi",
               "rj", "rn", "ro", "rs", "rr", "sc", "sp", "se", "to"];

    function estaDefinido(objeto) {
        return typeof objeto === typeof undefined;
    }

    function diferenteDe(string, tamanho) {
        if (estaDefinido(tamanho)) {
            tamanho = 9;
        }

        return string.length !== tamanho;
    }

    function igualA(string, tamanho) {
        return !diferenteDe(string, tamanho);
    }

    function arrayDeAte(de, ate) {
        var resultado = [];

        while (de <= ate) {
            resultado.push(de++);
        }

        return resultado;
    }

    function primeiros(string, quantidade) {
        if (estaDefinido(quantidade)) {
            quantidade = 8;
        }

        return string.substring(0, quantidade);
    }

    function obterDigitoSubtracao(valor) {
        return valor < 2 ? 0 : 11 - valor;
    }

    function obterModulo(valor, multiplicadores, divisor) {
        if (estaDefinido(divisor)) {
            divisor = 11;
        }

        if (estaDefinido(multiplicadores)) {
            multiplicadores = arrayDeAte(2, 9);
        }

        var i = 0;

        return valor.split('').reduceRight(function (anterior, atual) {
            if (i > multiplicadores.length - 1) {
                i = 0;
            }

            return (multiplicadores[i++] * parseInt(atual, 10)) + anterior;
        }, 0) % divisor;
    }

    function calculoBase(valor, base, validarTamanho) {
        if (!validarTamanho && diferenteDe(valor)) {
            return false;
        }

        if (estaDefinido(base)) {
            base = primeiros(valor);
        }

        var digito = obterDigitoSubtracao(obterModulo(base));

        return valor === base + digito;
    }

    function naoComecaCom(string, valor) {
        return string.substring(0, valor.length) !== valor;
    }

    function valorEntre(valor, limiteInferior, limiteSuperior) {
        if (typeof valor === 'string') {
            valor = parseInt(valor, 10);
        }

        return valor >= limiteInferior && valor <= limiteSuperior;
    }

    var funcoes = {
        ba: function (valor) {
            if (diferenteDe(valor, 8) && diferenteDe(valor)) {
                return false;
            }

            var base = primeiros(valor, valor.length - 2);
            var primeiroDigito, segundoDigito;

            var segundoMultiplicador = arrayDeAte(2, 7);
            var primeiroMultiplicador = arrayDeAte(2, 8);

            var primeiroResto, segundoResto;
            var digitoComparacao = valor.substring(0, 1);

            if (igualA(valor, 9)) {
                segundoMultiplicador.push(8);
                primeiroMultiplicador.push(9);
                digitoComparacao = valor.substring(1, 2);
            }

            if ('0123458'.split('').indexOf(digitoComparacao) !== -1) {
                segundoResto = obterModulo(base, segundoMultiplicador, 10);
                segundoDigito = segundoResto === 0 ? 0 : 10 - segundoResto;

                primeiroResto = obterModulo(base + segundoDigito, primeiroMultiplicador, 10);
                primeiroDigito = primeiroResto === 0 ? 0 : 10 - primeiroResto;
            } else {
                segundoResto = obterModulo(base, segundoMultiplicador);
                segundoDigito = obterDigitoSubtracao(segundoResto);

                primeiroResto = obterModulo(base + segundoDigito, primeiroMultiplicador);
                primeiroDigito = obterDigitoSubtracao(primeiroResto);
            }

            return valor === base + primeiroDigito + segundoDigito;
        },

        se: function (valor) {
            if (diferenteDe(valor)) {
                return false;
            }

            return calculoBase(valor);
        },

        al: function (valor) {
            if (diferenteDe(valor)) {
                return false;
            }

            if (naoComecaCom(valor, '24')) {
                return false;
            }

            var base = primeiros(valor);

            var resto = obterModulo(base) * 10;
            resto = resto - (parseInt(resto / 11, 10) * 11);
            var digito = resto === 10 ? 0 : resto;

            return valor === base + digito;
        },

        pb: function (valor) {
            if (diferenteDe(valor)) {
                return false;
            }

            return calculoBase(valor);
        },

        rn: function (valor) {
            if (diferenteDe(valor) && diferenteDe(valor, 10)) {
                return false;
            }

            if (naoComecaCom(valor, '20')) {
                return false;
            }

            var base = valor.substring(0, valor.length - 1);

            var multiplicadores = arrayDeAte(2, 9);
            if (igualA(valor, 10)) {
                multiplicadores.push(10);
            }

            var resto = (obterModulo(base, multiplicadores) * 10) % 11;
            var digito = resto === 10 ? 0 : resto;

            return valor === base + digito;
        },

        ap: function (valor) {
            if (diferenteDe(valor)) {
                return false;
            }

            if (naoComecaCom(valor, '03')) {
                return false;
            }

            var base = primeiros(valor);

            var p, d;

            if (valorEntre(base, 3000001, 3017000)) {
                p = 5;
                d = 0;
            } else if (valorEntre(base, 3017001, 3019022)) {
                p = 9;
                d = 1;
            } else {
                p = 0;
                d = 0;
            }

            var resto = obterModulo(p + base, [2, 3, 4, 5, 6, 7, 8, 9, 1]);

            var digito;
            if (resto === 1) {
                digito = 0;
            } else if (resto === 0) {
                digito = d;
            } else {
                digito = 11 - resto;
            }

            return valor === base + digito;
        },

        rr: function (valor) {
            if (diferenteDe(valor)) {
                return false;
            }

            if (naoComecaCom(valor, '24')) {
                return false;
            }

            var base = primeiros(valor);
            var digito = obterModulo(base, [8, 7, 6, 5, 4, 3, 2, 1], 9);

            return valor === base + digito;
        },

        am: function (valor) {
            if (diferenteDe(valor)) {
                return false;
            }

            return calculoBase(valor);
        },

        ro: function (valor) {
            var base, digito, resultadoMod;

            if (igualA(valor, 9)) {
                base = valor.substring(3, 8);
                digito = obterDigitoSubtracao(obterModulo(base));

                return valor === valor.substring(0, 3) + base + digito;
            } else if (igualA(valor, 14)) {
                base = primeiros(valor, 13);
                resultadoMod = obterModulo(base);
                digito = resultadoMod <= 1 ? 1 : 11 - resultadoMod;

                return valor === base + digito;
            } else {
                return false;
            }
        },

        rj: function (valor) {
            if (diferenteDe(valor, 8)) {
                return false;
            }

            var base = primeiros(valor, 7);
            var digito = obterDigitoSubtracao(obterModulo(base, arrayDeAte(2, 7)));

            return valor === base + digito;
        },

        sc: function (valor) {
            return calculoBase(valor);
        },

        pi: function (valor) {
            return calculoBase(valor);
        },

        es: function (valor) {
            return calculoBase(valor);
        },

        pr: function (valor) {
            if (diferenteDe(valor, 10)) {
                return false;
            }

            var base = primeiros(valor);

            var restoPrimeiro = obterModulo(base, arrayDeAte(2, 7));
            var primeiro = 11 - restoPrimeiro >= 10 ? 0 : 11 - restoPrimeiro;

            var restoSegundo = obterModulo(base + primeiro, arrayDeAte(2, 7));
            var segundo = 11 - restoSegundo >= 10 ? 0 : 11 - restoSegundo;

            return valor === base + primeiro + segundo;
        },

        pa: function (valor) {
            if (diferenteDe(valor)) {
                return false;
            }

            if (naoComecaCom(valor, '15')) {
                return false;
            }

            return calculoBase(valor);
        },

        ce: function (valor) {
            if (diferenteDe(valor)) {
                return false;
            }

            return calculoBase(valor);
        },

        pe: function (valor) {
            var base = valor.substring(0, valor.length - 2);

            var restoPrimeiro = obterModulo(base);
            var primeiro = 11 - restoPrimeiro >= 10 ? 0 : 11 - restoPrimeiro;

            var restoSegundo = obterModulo(base + primeiro);
            var segundo = 11 - restoSegundo >= 10 ? 0 : 11 - restoSegundo;

            return valor === base + primeiro + segundo;
        },

        ma: function (valor) {
            if (diferenteDe(valor)) {
                return false;
            }

            if (naoComecaCom(valor, '12')) {
                return false;
            }

            return calculoBase(valor);
        },

        ac: function (valor) {
            if (diferenteDe(valor, 13)) {
                return false;
            }

            if (naoComecaCom(valor, '01')) {
                return false;
            }

            var base = primeiros(valor, 11);

            var primeiroDigito = obterDigitoSubtracao(obterModulo(base));
            var segundoDigito = obterDigitoSubtracao(obterModulo(base + primeiroDigito));

            return valor === base + primeiroDigito + segundoDigito;
        },

        rs: function (valor) {
            if (diferenteDe(valor, 10)) {
                return false;
            }

            var base = primeiros(valor, 9);
            return calculoBase(valor, base, true);
        },

        mt: function (valor) {
            if (diferenteDe(valor, 11) && diferenteDe(valor)) {
                return false;
            }

            var base = igualA(valor, 11) ? valor.substring(0, 10) : primeiros(valor);
            return calculoBase(valor, base, true);
        },

        sp: function (valor) {
            valor = valor.toUpperCase();

            var segundaBase;

            if (valor.substr(0, 1) === 'P') {
                if (diferenteDe(valor, 13)) {
                    return false;
                }

                var base = valor.substring(1, 9);
                segundaBase = valor.substring(10, 13);
                var resto = obterModulo(base, [10, 8, 7, 6, 5, 4, 3, 1]).toString();
                var digito = resto.length > 1 ? resto[1] : resto[0];

                return valor === 'P' + base + digito + segundaBase;
            } else {
                if (diferenteDe(valor, 12)) {
                    return false;
                }

                var primeiraBase = primeiros(valor);
                segundaBase = valor.substring(9, 11);

                var primeiroResto = obterModulo(primeiraBase, [10, 8, 7, 6, 5, 4, 3, 1]).toString();
                var primeiro = primeiroResto.length > 1 ? primeiroResto[1] : primeiroResto[0];

                var segundoResto = obterModulo(primeiraBase + primeiro + segundaBase, arrayDeAte(2, 10)).toString();
                var segundo = segundoResto.length > 1 ? segundoResto[1] : segundoResto[0];

                return valor === primeiraBase + primeiro + segundaBase + segundo;
            }
        },

        mg: function (valor) {
            if (diferenteDe(valor, 13)) {
                return false;
            }

            var base = primeiros(valor, 11);

            var baseComZero = valor.substring(0, 3) + '0' + valor.substring(3, 11);

            var i = 0;
            var produtorioLiteral = baseComZero.split('').reduceRight(function (anterior, atual) {
                if (i > [2, 1].length - 1) {
                    i = 0;
                }

                return ([2, 1][i++] * parseInt(atual, 10)).toString() + anterior.toString();
            }, '').split('').reduce(function (anterior, atual) {
                return anterior + parseInt(atual);
            }, 0);

            var primeiro = ((parseInt(produtorioLiteral / 10) + 1) * 10) - produtorioLiteral;
            if (primeiro === 10) {
                primeiro = 0;
            }

            var segundo = obterDigitoSubtracao(obterModulo(base + primeiro, arrayDeAte(2, 11)));

            return valor === base + primeiro + segundo;
        },

        to: function (valor) {
            if (diferenteDe(valor) && diferenteDe(valor, 11)) {
                return false;
            }

            var base;

            if (igualA(valor, 11)) {
                if (['01', '02', '03', '99'].indexOf(valor.substring(2, 4)) === -1) {
                    return false;
                }

                base = valor.substring(0, 2) + valor.substring(4, 10);
            } else {
                base = primeiros(valor);
            }

            var digito = obterDigitoSubtracao(obterModulo(base));

            return valor === valor.substring(0, valor.length - 1) + digito;
        },

        go: function (valor) {
            if (diferenteDe(valor)) {
                return false;
            }

            if (['10', '11', '15'].indexOf(valor.substring(0, 2)) === -1) {
                return false;
            }

            var base = primeiros(valor);

            if (base === '11094402') {
                return valor.substr(8) === '1' || valor.substr(8) === '0';
            }

            var resto = obterModulo(base);
            var digito;

            if (resto === 0) {
                digito = 0;
            } else if (resto === 1) {
                if (valorEntre(base, 10103105, 10119997)) {
                    digito = 1;
                } else {
                    digito = 0;
                }
            } else {
                digito = 11 - resto;
            }

            return valor === base + digito;
        },

        ms: function (valor) {
            if (naoComecaCom(valor, '28')) {
                return false;
            }

            return calculoBase(valor);
        },

        df: function (valor) {
            if (diferenteDe(valor, 13)) {
                return false;
            }

            if (naoComecaCom(valor, '07')) {
                return false;
            }

            var base = primeiros(valor, 11);

            var primeiro = obterDigitoSubtracao(obterModulo(base));
            var segundo = obterDigitoSubtracao(obterModulo(base + primeiro));

            return valor === base + primeiro + segundo;
        }
    };

    var IE = {
        validar: function (ie, uf) {
            if (estaDefinido(uf) || uf === null) {
                uf = '';
            }

            uf = uf.toLowerCase();

            if (uf !== '' && !(uf in funcoes)) {
                throw new Error('estado não é válido');
            }

            if (estaDefinido(ie)) {
                throw new Error('ie deve ser fornecida');
            }

            if (typeof ie !== 'string') {
                throw new Error('ie deve ser string ou array de strings');
            }

            if (ie.match(/^ISENTO$/i)) {
                return true;
            }

            ie = ie.replace(/[\.|\-|\/|\s]/g, '');

            if (/^\d+$/.test(ie) || uf === 'sp') {
                return funcoes[uf](ie);
            }

            return false;
        },
        temEstadoValido: function (ie) {
            var valido = false;
            if (!!UFS) {
                for (var i = 0; i < UFS.length; i++) {
                    if (!valido) {
                        valido = IE.validar(ie, UFS[i]);
                    }
                }

                return valido;
            }

            return valido;
        },
        obterEstadoValido: function (ie) {
            var estadoValido = '';
            if (!!UFS) {
                for (var i = 0; i < UFS.length; i++) {
                    if (IE.validar(ie, UFS[i])) {
                        estadoValido = UFS[i];
                    }
                }

                return estadoValido || '';
            }

            return estadoValido;
        }
    }

    if (commonjs) {
        module.exports = IE;
    } else {
        window.IE = IE;
    }
})(window, document, typeof (exports) !== "undefined");

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