/*function Calcular() {
    var selectInicio = document.getElementById('selectInicio').value;
    var selectFinal = document.getElementById('selectFinal').value;
    var valor = document.getElementById('valor').value;
    var inputResultado = document.getElementById('inputResultado');

    if (selectInicio === 'ml') {
        if (selectFinal === 'ml'){
            valor = valor;
        }

        else if (selectFinal === 'km') {
            valor /= 1000;
        }

        else {
            valor *= 3.281;
        }
    }

    else if (selectInicio === 'km') {
        if (selectFinal === 'ml') {
            valor *= 1000;
        }

        else if (selectFinal === 'km'){
            valor = valor;
        }

        else {
            valor *= 1381;
        }
    }

    else if (selectInicio === 'pes') {
        if (selectFinal === 'ml') {
            valor /= 1.381;
        }

        else if (selectFinal === 'km'){
            valor *= 1381;
        }

        else {
            valor = valor;
        }
    }
    inputResultado.value = valor;
}*/

var v1;
var v2;
var valor = parseFloat(document.getElementById('valor').value);

function medidaUm(m1) {
    switch (m1) {
        case 'ml':
            v1 = 'ml';
            break;
    
        case 'km':
            v1 = 'km';
            break;
        case 'pes':
            v1 = 'pes';
    }
}

function medidaDois(m2) {
    switch (m2) {
        case 'ml':
            v2 = 'ml';
            break;
    
        case 'km':
            v2 = 'km';
            break;
        case 'pes':
            v2 = 'pes';
    }
}

function Calcular() {
    if (v1 === 'ml') {
        if (v2 === 'ml'){
            valor = valor;
        }

        else if (v2 === 'km') {
            valor /= 1000;
        }

        else {
            valor *= 3.281;
        }
    }

    else if (v1 === 'km') {
        if (v2 === 'ml') {
            valor *= 1000;
        }

        else if (v2 === 'km'){
            valor = valor;
        }

        else {
            valor *= 1381;
        }
    }

    else if (v1 === 'pes') {
        if (v2 === 'ml') {
            valor /= 1.381;
        }

        else if (v2 === 'km'){
            valor *= 1381;
        }

        else {
            valor = valor;
        }
    }
    inputResultado.value = valor;
}