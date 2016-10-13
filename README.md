# br-docs

Validation for the most commom personal Brazilian documents (ID's). 

### How to?

#### CPF
``` html
    <!-- Add this in your page -->
    <script src="cpf.js"></script>
```

``` javascript
    //224.407.595-89 is a valid CPF sample
    CPF.validar('224.407.595-89'); //true or false
```

#### CNPJ
``` html
    <!-- Add this in your page -->
    <script src="cnpj.js"></script>
```

``` javascript
    //29.349.923/0001-35 is a valid CNPJ sample
    CNPJ.validar('29.349.923/0001-35'); //true or false
```

#### IE
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

#### PIS
``` html
    <!-- Add this in your page -->
    <script src="pis.js"></script>
```

``` javascript
    //120.7507.914-7 is a valid PIS sample
    PIS.validar('120.7507.914-7'); //true or false
```

#### CNH
``` html
    <!-- Add this in your page -->
    <script src="cnh.js"></script>
```

``` javascript
    //05493872845 is a valid CNH sample
    CNH.validar('05493872845'); //true or false
```

#### TE (Título de eleitor)
``` html
    <!-- Add this in your page -->
    <script src="te.js"></script>
```

``` javascript
    //721761811708 is a valid TE sample
    TE.validar('721761811708'); //true or false
```

### All JS in one

If you don't want to add each one javascript file in your page, just use this global file to get all objects and functions:

``` html
    <!-- Add this in your page -->
    <script src="br-docs.js"></script>
```