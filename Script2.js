const display = document.getElementById('display')


function escribir(value) {
    display.value += value;
}
function borrar() {
    display.value = display.value.slice(0, -1);
}



function clearDisplay() {
    display.value = '';
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}