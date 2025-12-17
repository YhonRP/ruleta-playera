const display = document.getElementById('ruleta-display');
const button = document.getElementById('spin-button');

// Define los únicos números permitidos en una lista (array)
const numerosPermitidos = [59, 80];

// Función que elige aleatoriamente entre los números permitidos
function generarNumeroAleatorioTrampeado() {
    // Elige un índice aleatorio (0 o 1) dentro del array numerosPermitidos
    const indiceAleatorio = Math.floor(Math.random() * numerosPermitidos.length);
    // Devuelve el número correspondiente a ese índice (59 o 80)
    return numerosPermitidos[indiceAleatorio];
}

function girarRuleta() {
    button.disabled = true; // Deshabilita el botón durante el giro
    const duracionGiro = 3000; // 3 segundos de animación
    let startTime = Date.now();
    
    function animar() {
        const tiempoTranscurrido = Date.now() - startTime;
        
        if (tiempoTranscurrido < duracionGiro) {
            // Muestra números aleatorios rápidos durante el giro (para que parezca que busca en todo el rango 1-150)
            display.textContent = Math.floor(Math.random() * 150) + 1;
            requestAnimationFrame(animar); 
        } else {
            // *** CAMBIO CLAVE AQUÍ ***
            // Muestra el resultado final usando la función "trampeada"
            const resultadoFinal = generarNumeroAleatorioTrampeado();
            display.textContent = resultadoFinal;
            button.disabled = false; // Habilita el botón de nuevo
            console.log("El resultado final es:", resultadoFinal);
        }
    }

    animar(); // Inicia la animación
}

// Asigna la acción de girar al hacer clic en el botón
button.addEventListener('click', girarRuleta);


