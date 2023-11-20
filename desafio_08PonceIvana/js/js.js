document.addEventListener("DOMContentLoaded", function () {
    const elementos1 = document.querySelectorAll('fieldset, form, label, .titulosexo, .sexoopciones, p, .div1');
    const elementosinput = document.querySelectorAll('input, textarea, select');
    const resetButton = document.querySelector('button[type="reset"]');

    elementosinput.forEach((input) => {
        input.addEventListener('click', () => {
            elementos1.forEach((elemento) => {
                elemento.classList.add('color-verde');
            });
        });
    });

    resetButton.addEventListener('click', () => {
        elementos1.forEach((elemento) => {
            elemento.classList.remove('color-verde');
        });
    });   
});



let estiloBase = 0;
const otrosEstilos = document.querySelectorAll('link[rel="stylesheet"]');

function alternarEstilo() {
    for (let i = 0; i < otrosEstilos.length; i++) {
        otrosEstilos[i].disabled = true;
    }

    estiloBase = (estiloBase + 1) % otrosEstilos.length;
    otrosEstilos[estiloBase].disabled = false;
}