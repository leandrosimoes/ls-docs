# ls-docs

Validation for the most commom personal Brazilian documents (ID's). See live sample [here](http://lesimoes.com.br/br-docs/).

### Installation

`bower install br-docs --save`

### How to?
---
#### CPF - Natural person ID - (Cadastro de pessoa física)
``` html
    <!-- Add this in your page -->
    <script src="cpf.js"></script>
```

``` javascript
    //224.407.595-89 is a valid CPF sample
    CPF.validar('224.407.595-89'); //true or false
```
---
#### CNPJ - Legal person ID (Cadastro de pessoa jurídica)
``` html
    <!-- Add this in your page -->
    <script src="cnpj.js"></script>
```

``` javascript
    //29.349.923/0001-35 is a valid CNPJ sample
    CNPJ.validar('29.349.923/0001-35'); //true or false
```
---
#### IE - State registration (Inscrição estadual)
``` html
    <!-- Add this in your page -->
    <script src="ie.js"></script>
```

``` javascript
    //358.829.924.310 is a valid IE sample
    //'sp' is the state of Brazil that you want to validate, in this
    //case 'sp' (São Paulo)
    IE.validar('358.829.924.310', 'sp'); //true or false
    
    //Return true if in some of states of Brazil this IE is valid
    //358.829.924.310 is a valid IE sample
    IE.temEstadoValido('358.829.924.310'); //true or false

    //Return the state initials that this IE is valid
    //358.829.924.310 is a valid IE sample
    IE.obterEstadoValido('358.829.924.310') //in this case return 'sp' (São Paulo)
```
---
#### PIS - Social integration program ID (Programa de integração social)
``` html
    <!-- Add this in your page -->
    <script src="pis.js"></script>
```

``` javascript
    //120.7507.914-7 is a valid PIS sample
    PIS.validar('120.7507.914-7'); //true or false
```
---
#### CNH - Driver ID (Carteira de motorista)
``` html
    <!-- Add this in your page -->
    <script src="cnh.js"></script>
```

``` javascript
    //05493872845 is a valid CNH sample
    CNH.validar('05493872845'); //true or false
```
---
#### TE - Voter registration ID (Título de Eleitor)
``` html
    <!-- Add this in your page -->
    <script src="te.js"></script>
```

``` javascript
    //721761811708 is a valid TE sample
    TE.validar('721761811708'); //true or false
```
---
#### CC - Credit cards (Cartão de crédito)
``` html
    <!-- Add this in your page -->
    <script src="cc.js"></script>
```

``` javascript
    //4539.8633.3204.0867 is a valid CC sample
    //CC.cartoes is an object that contains the brand of the cards to validate
    //Brands available at this time is "visa, mastercard, amex, dinersclub, discover, jcb"
    CC.validar('4539.8633.3204.0867', CC.cartoes.visa); //true or false
    
    //Return true if the number is valid in some of credit card brands of Brazil
    //4539.8633.3204.0867 is a valid CC sample
    CC.temCartaoValido('4539.8633.3204.0867'); //true or false

    //Return the brand that this CC is valid
    //4539.8633.3204.0867 is a valid IE sample
    CC.obterCartaoValido('4539.8633.3204.0867') //in this case return 'visa'
```
----
### All JS in one

If you don't want to add each one javascript file in your page, just use this global file to get all objects and functions:

``` html
    <!-- Add this in your page -->
    <script src="br-docs.js"></script>
```
