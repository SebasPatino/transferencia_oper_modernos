function fusionarCatalogos(a, b) {
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

const catalogoA = [
    { id: 1, nombre: "Curso JavaScript", precio: 40 },
    { id: 2, nombre: "Curso HTML", precio: 35 }
];

const catalogoB = [
    { id: 3, nombre: "Curso CSS", precio: 30 }
];

// Caso correcto: ambos son arreglos
const catalogoCombinado = fusionarCatalogos(catalogoA, catalogoB);
console.log("Catálogo combinado y ordenado:", catalogoCombinado);

// Caso incorrecto: uno de los parámetros no es un arreglo
const catalogoError = fusionarCatalogos(catalogoA, "no es un arreglo");
console.log("Resultado con error:", catalogoError);