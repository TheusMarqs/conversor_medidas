var v1;
var v2;

function medidaUm(m1) {
    var btn1 = document.getElementById('btn1');
    
    switch (m1) {
        case 'ml':
            v1 = 'ml';
            btn1.textContent = 'Metros';
            break;

        case 'km':
            v1 = 'km';
            btn1.textContent = 'Quilômetros';
            break;
        case 'pes':
            v1 = 'pes';
            btn1.textContent = 'Pés';
    }
}

function medidaDois(m2) {
    var btn2 = document.getElementById('btn2');
    switch (m2) {
        case 'ml':
            v2 = 'ml';
            btn2.textContent = 'Metros';
            break;

        case 'km':
            v2 = 'km';
            btn2.textContent = 'Quilômetros';
            break;
        case 'pes':
            v2 = 'pes';
            btn2.textContent = 'Pés';
    }
}

function Calcular() {

    var valor = parseFloat(document.getElementById('valor').value);
    if (v1 === 'ml') {
        if (v2 === 'ml') {
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

        else if (v2 === 'km') {
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

        else if (v2 === 'km') {
            valor *= 1381;
        }

        else {
            valor = valor;
        }
    }
    inputResultado.value = valor;
}