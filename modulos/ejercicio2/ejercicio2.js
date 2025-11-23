export function fusionarCatalogos(a, b) {
    try {
        // Validamos que ambos parámetros sean arreglos
        if (!Array.isArray(a) || !Array.isArray(b)) {
            throw new Error("Los catálogos proporcionados no son válidos (deben ser arreglos).");
        }

        // Usamos spread para fusionar los catálogos sin modificar los originales
        const catalogoFinal = [...a, ...b];

        // Ordenamos por precio ascendente (menor a mayor)
        const catalogoOrdenado = [...catalogoFinal].sort((x, y) => x.precio - y.precio);

        // Retornamos el nuevo catálogo ordenado
        return catalogoOrdenado;
    } catch (error) {
        // Capturamos el error y mostramos un mensaje claro
        console.error("Error en la fusión de catálogos:", error.message);
    }
}