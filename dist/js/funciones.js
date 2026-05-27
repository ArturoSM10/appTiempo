import {form, ciudadInput, paisInput, resultados} from './selectores.js';
import { ui } from "./variables.js";

export function eventos() {
    form.addEventListener(`submit`, validarFormulario);
}

function validarFormulario(e) {
    e.preventDefault();
    if (ciudadInput.value.trim() === '' || paisInput.value.trim() === ``) {
        ui.alerta(`Ambos campos son obligatorios`);
        return;
    }
    solicitudApi(ciudadInput.value, paisInput.value);
}

function solicitudApi(ciudad, pais) {
    const key = `89e7025cbb8172cc200a6d3e922aa3d8`;
    const link = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${key}&lang=sp&units=metric`;

    fetch(link)
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos)
            if (datos.cod === `404`) {
                ui.alerta(`Sin coincidencias`);
                return;
            }
            ui.limpiarHtml(resultados);
            ui.spinner();
            setTimeout(() => {
                ui.mostrarClima(datos);
            }, 1500);
        }).catch(error => {
            ui.alerta(`No se han encontrado resultados`);
        })
}