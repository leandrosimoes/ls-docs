# ls-docs

Validation for the most commom personal Brazilian documents (ID's). See live sample [here](http://lesimoes.com.br/ls-docs/).

### Installation

`bower install ls-docs --save`

### How to?

First of all, just add this script to your HTML

``` html
    <!-- Add this in your page -->
    <script src="ls-docs.min.js"></script>
```

Then you have to instanceate the class like this
```javascript
    let lsDocs = new LSDocs();
```

Now just use like this:

---
#### CPF - Natural person ID - (Cadastro de pessoa física)

``` javascript
    //224.407.595-89 is a valid CPF sample
    lsDocs.CPF.validate('224.407.595-89'); //true or false
```
---
#### CNPJ - Legal person ID (Cadastro de pessoa jurídica)
``` javascript
    //29.349.923/0001-35 is a valid CNPJ sample
    lsDocs.CNPJ.validate('29.349.923/0001-35'); //true or false
```
---
#### IE - State registration (Inscrição estadual)
``` javascript
    //358.829.924.310 is a valid IE sample
    //lsDocs.IE.STATES is a enum that contains all the Brazilian States
    lsDocs.IE.validate('358.829.924.310', lsDocs.IE.STATES.SAO_PAULO); //true or false
    
    //Return true if in some of states of Brazil this IE is valid
    //358.829.924.310 is a valid IE sample
    lsDocs.IE.hasValidState('358.829.924.310'); //true or false

    //Return the state initials that this IE is valid
    //358.829.924.310 is a valid IE sample
    lsDocs.IE.getValidState('358.829.924.310') //in this case return lsDocs.IE.STATES.SAO_PAULO
```
---
#### PIS - Social integration program ID (Programa de integração social)
``` javascript
    //120.7507.914-7 is a valid PIS sample
    lsDocs.PIS.validate('120.7507.914-7'); //true or false
```
---
#### CNH - Driver ID (Carteira de motorista)
``` javascript
    //05493872845 is a valid CNH sample
    lsDocs.CNH.validate('05493872845'); //true or false
```
---
#### TE - Voter registration ID (Título de Eleitor)
``` javascript
    //721761811708 is a valid TE sample
    lsDocs.TE.validate('721761811708'); //true or false
```
---
#### CC - Credit cards (Cartão de crédito)
``` javascript
    //4539.8633.3204.0867 is a valid CC sample
    //lsDocs.CC.BRANDS is a enum with the follow credit card brands: "VISA, MASTERCARD, AMEX, DINERSCLUB, DISCOVERY, JCB"
    lsDocs.CC.validate('4539.8633.3204.0867', lsDocs.CC.BRANDS.VISA); //true or false
    
    //Return true if the number is valid in some of credit card brands of Brazil
    //4539.8633.3204.0867 is a valid CC sample
    lsDocs.CC.hasValidCard('4539.8633.3204.0867'); //true or false

    //Return the brand that this CC is valid
    //4539.8633.3204.0867 is a valid IE sample
    lsDocs.CC.getValidCard('4539.8633.3204.0867') //in this case return lsDocs.CC.BRANDS.VISA
```