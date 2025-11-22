function estadisticas(jugadores) {
    try {
        // 1. Validamos que jugadores sea un arreglo y tenga al menos un elemento
        if (!Array.isArray(jugadores) || jugadores.length === 0) {
            throw new Error("La lista de jugadores no es válida.");
        }

        // 2. Destructuración profunda para obtener los puntos del primer jugador
        const [{ stats: { puntos: puntosPrimerJugador } }] = jugadores;

        // 3. Calcular la suma total de puntos del equipo (inmutable)
        let puntosTotales = 0;
        for (const { stats: { puntos } } of jugadores) {
            puntosTotales += puntos;
        }

        // 4. Construir el objeto estadístico final (inmutable)
        const informe = {
            puntosPrimerJugador,
            puntosTotales,
            jugadoresProcesados: [...jugadores] // copia inmutable
        };

        return informe;

    } catch (error) {
        console.error("Error en el cálculo de estadísticas:", error.message);
    }
}

const jugadores = [
    { nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
    { nombre: "Luis", stats: { puntos: 15, asistencias: 7 } }
];

// Caso correcto
const informeValido = estadisticas(jugadores);
console.log("Informe válido:", informeValido);

// Caso incorrecto: parámetro no es un arreglo
const informeInvalido = estadisticas("no es un arreglo");
console.log("Informe inválido:", informeInvalido);