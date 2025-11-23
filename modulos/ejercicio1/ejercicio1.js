export function crearEstudiante(nombre, ...notas) {
    try {
        // Validamos que todas las notas sean números
        for (const nota of notas) {
            if (typeof nota !== "number" || isNaN(nota)) {
                throw new Error(`La nota "${nota}" no es válida (debe ser numérica).`);
            }
        }

        // Usamos destructuración para separar la primera nota del resto
        const [primeraNota, ...restoNotas] = notas;

        // Calculamos el promedio del resto de notas
        let promedioResto = 0;
        if (restoNotas.length > 0) {
            let suma = 0;
            for (const n of restoNotas) {
                suma += n;
            }
            promedioResto = suma / restoNotas.length;
        }

        // Retornamos un objeto inmutable con la información requerida
        return {
            nombre,
            primeraNota,
            promedioResto,
            totalNotas: notas.length
        };

    } catch (error) {
        // Capturamos el error y mostramos un mensaje claro
        console.error("Error en el registro académico:", error.message);
    }
}