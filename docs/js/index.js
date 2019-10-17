!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e,r){"use strict";function n(t,e,r){void 0===r&&(r=11),e||(e=u(2,9));var n=0;return t.split("").reduceRight((function(t,r){return void 0!==e&&n>e.length-1&&(n=0),void 0!==e?e[n++]*parseInt(r,10)+t:0}),0)%r}function i(t,e){return void 0===e&&(e=9),t.length!==e}function u(t,e){for(var r=[];t<=e;)r.push(t++);return r}function a(t,e){return void 0===e&&(e=8),t.substring(0,e)}function o(t){return t<2?0:11-t}Object.defineProperty(e,"__esModule",{value:!0}),e.getModule=n,e.isDifferentFrom=i,e.isEqualTo=function(t,e){return!i(t,e)},e.arrayFromTo=u,e.getFirstXDigits=a,e.getSubtractionDigit=o,e.baseCalc=function(t,e,r){return!(!r&&i(t))&&(e||(e=a(t)),t===e+o(n(e)))},e.IsBetween=function(t,e,r){return t>=e&&t<=r}},function(t,e,r){"use strict";var n,i;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.VISA="visa",t.MASTERCARD="mastercard",t.AMEX="amex",t.DINERSCLUB="dinersClub",t.DISCOVER="discover",t.JCB="jcb",t.NONE=""}(n||(n={})),e.CARD_BRANDS=n,function(t){t.ACRE="ac",t.ALAGOAS="al",t.AMAZONAS="am",t.AMAPA="ap",t.BAHIA="ba",t.CEARA="ce",t.DISTRITO_FEDERAL="df",t.ESPIRITO_SANTO="es",t.GOIAS="go",t.MARANHAO="ma",t.MATOGROSSO="mt",t.MASOGROSSO_DO_SUL="ms",t.MINAS_GERAIS="mg",t.PARA="pa",t.PARAIBA="pb",t.PARANA="pr",t.PERNAMBUCO="pe",t.PIAUI="pi",t.RIO_DE_JANEIRO="rj",t.RIO_GRANDE_DO_NORTE="rn",t.RONDONIA="ro",t.RIO_GRANDE_DO_SUL="rs",t.RORAIMA="rr",t.SANTA_CATARINA="sc",t.SAO_PAULO="sp",t.SERGIPE="se",t.TOCANTINS="to",t.NONE=""}(i||(i={})),e.BRAZIL_STATES=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(3),i=new n.CC;e.CC=i;var u=new n.CNH;e.CNH=u;var a=new n.CNPJ;e.CNPJ=a;var o=new n.CPF;e.CPF=o;var f=new n.IE;e.IE=f;var s=new n.PIS;e.PIS=s;var c=new n.TE;e.TE=c,function(t){t.LSDocs={CC:i,CNH:u,CNPJ:a,CPF:o,IE:f,PIS:s,TE:c}}("undefined"!=typeof window?window:{})},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(4);e.CC=n.default;var i=r(5);e.CNH=i.default;var u=r(6);e.CNPJ=u.default;var a=r(7);e.CPF=a.default;var o=r(8);e.IE=o.default;var f=r(37);e.PIS=f.default;var s=r(38);e.TE=s.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),i=function(){function t(){this.cardsRegex={visa:/^4[0-9]{12}(?:[0-9]{3})/,mastercard:/^5[1-5][0-9]{14}/,amex:/^3[47][0-9]{13}/,dinersclub:/^3(?:0[0-5]|[68][0-9])[0-9]{11}/,discover:/^6(?:011|5[0-9]{2})[0-9]{12}/,jcb:/^(?:2131|1800|35\d{3})\d{11}/},this.BRANDS=n.CARD_BRANDS}return t.prototype.validate=function(t,e){return void 0===e&&(e=n.CARD_BRANDS.NONE),t=t.replace(/[^\d]+/g,""),null!=e&&e!==n.CARD_BRANDS.NONE&&null!==t.match(this.cardsRegex[e.toString()])},t.prototype.hasValidCard=function(t){if(!(t=t.replace(/[^\d]+/g,"")))return!1;for(var e in n.CARD_BRANDS)return null!==t.match(this.cardsRegex[n.CARD_BRANDS[e]]);return!1},t.prototype.getValidCard=function(t){if(!(t=t.replace(/[^\d]+/g,"")))return n.CARD_BRANDS.NONE;for(var e in n.CARD_BRANDS){var r=n.CARD_BRANDS[e];if(null!==t.match(this.cardsRegex[r]))switch(r){case n.CARD_BRANDS.VISA:return n.CARD_BRANDS.VISA;case n.CARD_BRANDS.MASTERCARD:return n.CARD_BRANDS.MASTERCARD;case n.CARD_BRANDS.JCB:return n.CARD_BRANDS.JCB;case n.CARD_BRANDS.DISCOVER:return n.CARD_BRANDS.DISCOVER;case n.CARD_BRANDS.DINERSCLUB:return n.CARD_BRANDS.DINERSCLUB;case n.CARD_BRANDS.AMEX:return n.CARD_BRANDS.AMEX}}return n.CARD_BRANDS.NONE},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this.COMMON=["00000000000","11111111111","22222222222","33333333333","44444444444","55555555555","66666666666","77777777777","88888888888","99999999999","12345678909","12345678910"]}return t.prototype.validate=function(t){if(!(t=(t||"").toString().replace(/[^\d]/g,""))||11!==t.length||this.COMMON.indexOf(t)>=0)return!1;var e,r,n=9,i=0,u=0,a=0,o=0;if(!t||-1!==this.COMMON.indexOf(t)||t.length<11)return!1;e=t.substring(0,9),r=t.substring(9,t.length);for(var f=0;f<9;f++)i+=parseInt(e[f])*n--;o=10===(u=parseInt((i%11+"").split(".")[0]))?-2:o,u=u>9?0:u,i=0,n=1;for(f=0;f<9;f++)i+=parseInt(e[f])*n++;return r==""+u+(a=(a=(i=i%11+o)<0?11+i:i)>9?0:a)},t}();e.default=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this.COMMON=["00000000000000","11111111111111","22222222222222","33333333333333","44444444444444","55555555555555","66666666666666","77777777777777","88888888888888","99999999999999"]}return t.prototype.getVerifyDigit=function(t){var e=2,r=t.split("").reverse().map((function(t){return parseInt(t)})).reduce((function(t,r){return t+=r*e,e=9===e?2:e+1,t}),0)%11;return(r<2?0:11-r).toString()},t.prototype.validate=function(t){if(!(t=(t||"").toString().replace(/[^\d]/g,"")))return!1;if(14!==t.length)return!1;if(this.COMMON.indexOf(t)>=0)return!1;var e=t.substr(0,12);return e+=this.getVerifyDigit(e),(e+=this.getVerifyDigit(e)).substr(-2)===t.substr(-2)},t}();e.default=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this.COMMON=["00000000000","11111111111","22222222222","33333333333","44444444444","55555555555","66666666666","77777777777","88888888888","99999999999","12345678909","12345678910"]}return t.prototype.verifyDigit=function(t){var e=t.split("").map((function(t){return parseInt(t,10)})),r=e.length+1,n=e.map((function(t,e){return t*(r-e)})).reduce((function(t,e){return t+e}))%11;return n<2?0:11-n},t.prototype.validate=function(t){if(!(t=t.toString().replace(/[^\d]/g,""))||11!==t.length||this.COMMON.indexOf(t)>=0)return!1;var e=t.substr(0,9);return e+=this.verifyDigit(e),(e+=this.verifyDigit(e)).substr(-2)===t.substr(-2)},t}();e.default=n},function(t,e,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),u=r(9),a=function(){function t(){this.STATES=n({},i.BRAZIL_STATES)}return t.prototype.validate=function(t,e){if(void 0===e&&(e=i.BRAZIL_STATES.NONE),e===i.BRAZIL_STATES.NONE)throw new Error("Invalid state");if(!t)throw new Error("ieNumber must be informed");if(t.match(/^ISENTO$/i))return!0;if(t=t.replace(/[\.|\-|\/|\s]/g,""),/^\d+$/.test(t)||e===i.BRAZIL_STATES.SAO_PAULO)switch(e){case i.BRAZIL_STATES.ACRE:return u.AC.validate(t);case i.BRAZIL_STATES.ALAGOAS:return u.AL.validate(t);case i.BRAZIL_STATES.AMAPA:return u.AP.validate(t);case i.BRAZIL_STATES.AMAZONAS:return u.AM.validate(t);case i.BRAZIL_STATES.BAHIA:return u.BA.validate(t);case i.BRAZIL_STATES.CEARA:return u.CE.validate(t);case i.BRAZIL_STATES.DISTRITO_FEDERAL:return u.DF.validate(t);case i.BRAZIL_STATES.ESPIRITO_SANTO:return u.ES.validate(t);case i.BRAZIL_STATES.GOIAS:return u.GO.validate(t);case i.BRAZIL_STATES.MARANHAO:return u.MA.validate(t);case i.BRAZIL_STATES.MASOGROSSO_DO_SUL:return u.MS.validate(t);case i.BRAZIL_STATES.MATOGROSSO:return u.MT.validate(t);case i.BRAZIL_STATES.MINAS_GERAIS:return u.MG.validate(t);case i.BRAZIL_STATES.PARA:return u.PA.validate(t);case i.BRAZIL_STATES.PARAIBA:return u.PB.validate(t);case i.BRAZIL_STATES.PARANA:return u.PR.validate(t);case i.BRAZIL_STATES.PERNAMBUCO:return u.PE.validate(t);case i.BRAZIL_STATES.PIAUI:return u.PI.validate(t);case i.BRAZIL_STATES.RIO_DE_JANEIRO:return u.RJ.validate(t);case i.BRAZIL_STATES.RIO_GRANDE_DO_NORTE:return u.RN.validate(t);case i.BRAZIL_STATES.RIO_GRANDE_DO_SUL:return u.RS.validate(t);case i.BRAZIL_STATES.RONDONIA:return u.RO.validate(t);case i.BRAZIL_STATES.RORAIMA:return u.RR.validate(t);case i.BRAZIL_STATES.SANTA_CATARINA:return u.SC.validate(t);case i.BRAZIL_STATES.SAO_PAULO:return u.SP.validate(t);case i.BRAZIL_STATES.SERGIPE:return u.SE.validate(t);case i.BRAZIL_STATES.TOCANTINS:return u.TO.validate(t);default:throw new Error("Invalid state")}return!1},t.prototype.hasValidState=function(t){return this.getValidState(t)!==i.BRAZIL_STATES.NONE},t.prototype.getValidState=function(t){for(var e in i.BRAZIL_STATES){var r=i.BRAZIL_STATES[e];if(r!==i.BRAZIL_STATES.NONE&&this.validate(t,r))return r}return i.BRAZIL_STATES.NONE},t}();e.default=a},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(10);e.AC=n.default;var i=r(11);e.AL=i.default;var u=r(12);e.AM=u.default;var a=r(13);e.AP=a.default;var o=r(14);e.BA=o.default;var f=r(15);e.CE=f.default;var s=r(16);e.DF=s.default;var c=r(17);e.ES=c.default;var l=r(18);e.GO=l.default;var d=r(19);e.MA=d.default;var v=r(20);e.MG=v.default;var A=r(21);e.MS=A.default;var S=r(22);e.MT=S.default;var _=r(23);e.PA=_.default;var g=r(24);e.PB=g.default;var R=r(25);e.PE=R.default;var O=r(26);e.PI=O.default;var p=r(27);e.PR=p.default;var D=r(28);e.RJ=D.default;var I=r(29);e.RN=I.default;var M=r(30);e.RO=M.default;var T=r(31);e.RR=T.default;var b=r(32);e.RS=b.default;var E=r(33);e.SC=E.default;var N=r(34);e.SE=N.default;var C=r(35);e.SP=C.default;var P=r(36);e.TO=P.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){if(n.isDifferentFrom(t,13))return!1;if(!t.startsWith("01"))return!1;var e=n.getFirstXDigits(t,11),r=n.getSubtractionDigit(n.getModule(e));return t===e+r+n.getSubtractionDigit(n.getModule(e+r))},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){if(n.isDifferentFrom(t))return!1;if(!t.startsWith("24"))return!1;var e=n.getFirstXDigits(t),r=10*n.getModule(e);return t===e+(10===(r-=11*parseInt((r/11).toString(),10))?0:r)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){return!n.isDifferentFrom(t)&&n.baseCalc(t,"",!1)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){if(n.isDifferentFrom(t))return!1;if(!t.startsWith("03"))return!1;var e,r,i=n.getFirstXDigits(t);n.IsBetween(parseInt(i),3000001,3017e3)?(e=5,r=0):n.IsBetween(parseInt(i),3017001,3019022)?(e=9,r=1):(e=0,r=0);var u=n.getModule(e+i,[2,3,4,5,6,7,8,9,1]);return t===i+(1===u?0:0===u?r:11-u)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){if(n.isDifferentFrom(t,8)&&n.isDifferentFrom(t))return!1;var e,r,i,u,a=n.getFirstXDigits(t,t.length-2),o=n.arrayFromTo(2,7),f=n.arrayFromTo(2,8),s=t.substring(0,1);return n.isEqualTo(t,9)&&(o.push(8),f.push(9),s=t.substring(1,2)),-1!=="0123458".split("").indexOf(s)?(r=0===(u=n.getModule(a,o,10))?0:10-u,e=0===(i=n.getModule(a+r,f,10))?0:10-i):(u=n.getModule(a,o),r=n.getSubtractionDigit(u),i=n.getModule(a+r,f),e=n.getSubtractionDigit(i)),t===a+e+r},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){return!n.isDifferentFrom(t)&&n.baseCalc(t,"",!1)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){if(n.isDifferentFrom(t,13))return!1;if(!t.startsWith("07"))return!1;var e=n.getFirstXDigits(t,11),r=n.getSubtractionDigit(n.getModule(e));return t===e+r+n.getSubtractionDigit(n.getModule(e+r))},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){return n.baseCalc(t,"",!1)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){if(n.isDifferentFrom(t))return!1;if(-1===["10","11","15"].indexOf(t.substring(0,2)))return!1;var e=n.getFirstXDigits(t);if("11094402"===e)return"1"===t.substr(8)||"0"===t.substr(8);var r=n.getModule(e);return t===e+(0===r?0:1===r?n.IsBetween(parseInt(e),10103105,10119997)?1:0:11-r)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){return!n.isDifferentFrom(t)&&(!!t.startsWith("12")&&n.baseCalc(t,"",!1))},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){if(n.isDifferentFrom(t,13))return!1;var e=n.getFirstXDigits(t,11),r=t.substring(0,3)+"0"+t.substring(3,11),i=0,u=r.split("").reduceRight((function(t,e){return i>[2,1].length-1&&(i=0),([2,1][i++]*parseInt(e,10)).toString()+t.toString()}),"").split("").reduce((function(t,e){return t+parseInt(e)}),0),a=10*(parseInt((u/10).toString())+1)-u;return 10===a&&(a=0),t===e+a+n.getSubtractionDigit(n.getModule(e+a,n.arrayFromTo(2,11)))},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){return!!t.startsWith("28")&&n.baseCalc(t,"",!1)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){if(n.isDifferentFrom(t,11)&&n.isDifferentFrom(t))return!1;var e=n.isEqualTo(t,11)?t.substring(0,10):n.getFirstXDigits(t);return n.baseCalc(t,e,!0)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){return!n.isDifferentFrom(t)&&(!!t.startsWith("15")&&n.baseCalc(t,"",!1))},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){return!n.isDifferentFrom(t)&&n.baseCalc(t,"",!1)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){var e=t.substring(0,t.length-2),r=n.getModule(e),i=11-r>=10?0:11-r,u=n.getModule(e+i);return t===e+i+(11-u>=10?0:11-u)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){return n.baseCalc(t,"",!1)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){if(n.isDifferentFrom(t,10))return!1;var e=n.getFirstXDigits(t),r=n.getModule(e,n.arrayFromTo(2,7)),i=11-r>=10?0:11-r,u=n.getModule(e+i,n.arrayFromTo(2,7));return t===e+i+(11-u>=10?0:11-u)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){if(n.isDifferentFrom(t,8))return!1;var e=n.getFirstXDigits(t,7);return t===e+n.getSubtractionDigit(n.getModule(e,n.arrayFromTo(2,7)))},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){if(n.isDifferentFrom(t)&&n.isDifferentFrom(t,10))return!1;if(!t.startsWith("20"))return!1;var e=t.substring(0,t.length-1),r=n.arrayFromTo(2,9);n.isEqualTo(t,10)&&r.push(10);var i=10*n.getModule(e,r)%11;return t===e+(10===i?0:i)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){var e,r,i;return n.isEqualTo(t,9)?(e=t.substring(3,8),r=n.getSubtractionDigit(n.getModule(e)),t===t.substring(0,3)+e+r):!!n.isEqualTo(t,14)&&t===(e=n.getFirstXDigits(t,13))+(r=(i=n.getModule(e))<=1?1:11-i)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){if(n.isDifferentFrom(t))return!1;if(!t.startsWith("24"))return!1;var e=n.getFirstXDigits(t);return t===e+n.getModule(e,[8,7,6,5,4,3,2,1],9)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){if(n.isDifferentFrom(t,10))return!1;var e=n.getFirstXDigits(t,9);return n.baseCalc(t,e,!0)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){return n.baseCalc(t,"",!1)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){return!n.isDifferentFrom(t)&&n.baseCalc(t,"",!1)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){var e;if("P"===(t=t.toUpperCase()).substr(0,1)){if(n.isDifferentFrom(t,13))return!1;var r=t.substring(1,9);e=t.substring(10,13);var i=n.getModule(r,[10,8,7,6,5,4,3,1]).toString();return t==="P"+r+(i.length>1?i[1]:i[0])+e}if(n.isDifferentFrom(t,12))return!1;var u=n.getFirstXDigits(t);e=t.substring(9,11);var a=n.getModule(u,[10,8,7,6,5,4,3,1]).toString(),o=a.length>1?a[1]:a[0],f=n.getModule(u+o+e,n.arrayFromTo(2,10)).toString();return t===u+o+e+(f.length>1?f[1]:f[0])},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){}return t.validate=function(t){if(n.isDifferentFrom(t)&&n.isDifferentFrom(t,11))return!1;var e;if(n.isEqualTo(t,11)){if(-1===["01","02","03","99"].indexOf(t.substring(2,4)))return!1;e=t.substring(0,2)+t.substring(4,10)}else e=n.getFirstXDigits(t);var r=n.getSubtractionDigit(n.getModule(e));return t===t.substring(0,t.length-1)+r},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this.COMMOM=["00000000000","11111111111","22222222222","33333333333","44444444444","55555555555","66666666666","77777777777","88888888888","99999999999"]}return t.prototype.validate=function(t){if(!t)return!1;var e=0,r=0;if(11!==(t=t.replace(/[^\d]+/g,"")).length||-1!==this.COMMOM.indexOf(t))return!1;for(var n=0;n<10;n++)e+=parseInt(t.substring(n,n+1))*parseInt("3298765432".substring(n,n+1));return(r=10===(r=11-e%11)||11===r?0:r)===parseInt(""+t.charAt(10))},t}();e.default=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this.COMMOM=["000000000000","111111111111","222222222222","333333333333","444444444444","555555555555","666666666666","777777777777","888888888888","999999999999"]}return t.prototype.validate=function(t){if(!t)return!1;if(!(t=t.replace(/[^\d]+/g,""))||12!==t.length||-1!==this.COMMOM.indexOf(t))return!1;for(var e,r=0,n=0,i=0;i<"23456789".length;i++)r+=parseInt(t[i])*parseInt("23456789"[i]);return n=10===(r=parseInt((r%11+"").split(".")[0]))?0:r,r=7*parseInt(t[8])+8*parseInt(t[9])+9*parseInt(n.toString()),e=10===(r=parseInt((r%11+"").split(".")[0]))?0:r,parseInt(t[t.length-2])===n&&parseInt(t[t.length-1])===e},t}();e.default=n}]);