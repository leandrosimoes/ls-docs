# ls-docs

Validation for the most commom personal Brazilian documents (ID's). See live sample [here](http://lesimoes.com.br/ls-docs/).

[![Build Status](https://travis-ci.org/leandrosimoes/ls-docs.svg?branch=master)](https://travis-ci.org/leandrosimoes/ls-docs) [![npm version](https://badge.fury.io/js/ls-docs.svg)](https://badge.fury.io/js/ls-docs)

### Installation

`npm install ls-docs --save`

### How to?

Then you have to instanceate the class like this
```javascript
let { CC, CPF, CNPJ, IE, PIS, TE, CNH } = require('ls-docs')
```

Now just use like this:

---
#### CPF - Natural person ID - (Cadastro de pessoa física)

``` javascript
//224.407.595-89 is a valid CPF sample
CPF.validate('224.407.595-89'); //true or false
```
---
#### CNPJ - Legal person ID (Cadastro de pessoa jurídica)
``` javascript
//29.349.923/0001-35 is a valid CNPJ sample
CNPJ.validate('29.349.923/0001-35'); //true or false
```
---
#### IE - State registration (Inscrição estadual)
``` javascript
//358.829.924.310 is a valid IE sample
//IE.STATES is a enum that contains all the Brazilian States
IE.validate('358.829.924.310', IE.STATES.SAO_PAULO); //true or false

//Return true if in some of states of Brazil this IE is valid
//358.829.924.310 is a valid IE sample
IE.hasValidState('358.829.924.310'); //true or false

//Return the state initials that this IE is valid
//358.829.924.310 is a valid IE sample
IE.getValidState('358.829.924.310') //in this case return IE.STATES.SAO_PAULO
```
---
#### PIS - Social integration program ID (Programa de integração social)
``` javascript
//120.7507.914-7 is a valid PIS sample
PIS.validate('120.7507.914-7'); //true or false
```
---
#### CNH - Driver ID (Carteira de motorista)
``` javascript
//05493872845 is a valid CNH sample
CNH.validate('05493872845'); //true or false
```
---
#### TE - Voter registration ID (Título de Eleitor)
``` javascript
//721761811708 is a valid TE sample
TE.validate('721761811708'); //true or false
```
---
#### CC - Credit cards (Cartão de crédito)
``` javascript
//4539.8633.3204.0867 is a valid CC sample
//CC.BRANDS is a enum with the follow credit card brands: "VISA, MASTERCARD, AMEX, DINERSCLUB, DISCOVERY, JCB"
CC.validate('4539.8633.3204.0867', CC.BRANDS.VISA); //true or false

//Return true if the number is valid in some of credit card brands of Brazil
//4539.8633.3204.0867 is a valid CC sample
CC.hasValidCard('4539.8633.3204.0867'); //true or false

//Return the brand that this CC is valid
//4539.8633.3204.0867 is a valid IE sample
CC.getValidCard('4539.8633.3204.0867') //in this case return CC.BRANDS.VISA
```
