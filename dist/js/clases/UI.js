import { main, resultados } from "../selectores.js";

export class UI {
    alerta(texto) {
        const existe = document.querySelector(`.alert`);

        if(existe) return;

        const alertElement = document.createElement(`P`);
        alertElement.innerHTML = `<span>Error!</span> ${texto}`;
        alertElement.classList.add(`alert`);
        main.appendChild(alertElement);
        setTimeout(() => {
            alertElement.remove();    
        }, 3000);
    }

    spinner() {
        const parrafo = document.querySelector(`.main__p`);
        parrafo.style.display = `none`;
        const spin = document.querySelector(`.spinner`);
        spin.style.display = `block`;
        setTimeout(() => {
            spin.style.display = `none`;
        }, 1500); 
    }

    mostrarClima(objeto) {
        const { temp, temp_min, temp_max } = objeto.main;
        const tempElement = document.createElement(`P`);
        const tMinElement = document.createElement(`P`);
        const tMaxElement = document.createElement(`P`);

        tempElement.textContent = `Temperatura: ${temp}°C`;
        tempElement.classList.add `temperatura`;

        tMinElement.textContent = `Temperatura mínima: ${temp_min}°C`;;
        tMinElement.classList.add = `minima`;

        tMaxElement.textContent = `Temperatura máxima: ${temp_max}°C`;;
        tMaxElement.classList.add = `maxima`;

        resultados.appendChild(tempElement);
        resultados.appendChild(tMinElement);
        resultados.appendChild(tMaxElement);
    }

    limpiarHtml(elemento) {
        while(elemento.firstChild) {
            elemento.firstChild.remove();
        }
    }
}