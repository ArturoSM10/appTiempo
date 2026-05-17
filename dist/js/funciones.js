import {form, ciudadInput, paisInput} from './selectores.js';

export function eventos() {
    form.addEventListener(`submit`, validarFormulario);
}

function validarFormulario(e) {
    e.preventDefault();
    if (ciudadInput.value.trim() === '' || paisInput.value.trim() === ``) {
        console.log(`campos vacios`);
    }
}