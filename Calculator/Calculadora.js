var x;
var y;
var z;

function calcularSuma(){
    var xElement = document.getElementById("x");
    var yElement = document.getElementById("y");
    x = xElement.value;
    y = yElement.value;
    console.log(x);
    console.log(y);
    var xp=parseFloat(x);
    var yp=parseFloat(y);

    z = xp+yp;
    console.log(z);

    var zElement = document.getElementById("resultado");
    zElement.innerHTML = 'Resultado = ' + z;
}

function calcularResta(){
    var xElement = document.getElementById("x");
    var yElement = document.getElementById("y");
    x = xElement.value;
    y = yElement.value;
    console.log(x);
    console.log(y);

    z = x-y;
    console.log(z);

    var zElement = document.getElementById("resultado");
    zElement.innerHTML = 'Resultado = ' + z;
}
function calcularMultiplicacion(){
    var xElement = document.getElementById("x");
    var yElement = document.getElementById("y");
    x = xElement.value;
    y = yElement.value;
    console.log(x);
    console.log(y);

    z = x*y;
    console.log(z);

    var zElement = document.getElementById("resultado");
    zElement.innerHTML = 'Resultado = ' + z;
}
function calcularDivision(){
    var xElement = document.getElementById("x");
    var yElement = document.getElementById("y");
    x = xElement.value;
    y = yElement.value;
    console.log(x);
    console.log(y);
    if(y!=0){
        z = x/y;
        console.log(z);

        var zElement = document.getElementById("resultado");
        zElement.innerHTML = 'Resultado = ' + z;
    }else{
        var zElement = document.getElementById("resultado");
        zElement.innerHTML = 'Math error: imposible dividir entre 0';
    }
}

function calcularDivision(){
    var xElement = document.getElementById("x");
    var yElement = document.getElementById("y");
    x = xElement.value;
    y = yElement.value;
    console.log(x);
    console.log(y);
    if(y!=0){
        z = x/y;
        console.log(z);

        var zElement = document.getElementById("resultado");
        zElement.innerHTML = 'Resultado = ' + z;
    }else{
        var zElement = document.getElementById("resultado");
        zElement.innerHTML = 'Math error: imposible dividir entre 0';
    }
}

function calcularPow(){
    var xElement = document.getElementById("x");
    var yElement = document.getElementById("y");
    x = xElement.value;
    y = yElement.value;
    console.log(x);
    console.log(y);
    z = Math.pow(x,y);
    console.log(z);

        var zElement = document.getElementById("resultado");
        zElement.innerHTML = 'Resultado = ' + z;
    
}