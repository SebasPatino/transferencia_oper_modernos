const baseConfig = { modo: "producción", lenguaje: "es", nivel: 1 };
const extraConfig = { nivel: 2, tema: "oscuro" };

function configFinal(...configs) {
    try {
        // 1. Validamos que cada elemento recibido sea un objeto
        for (const cfg of configs) {
            if (typeof cfg !== "object" || cfg === null || Array.isArray(cfg)) {
                throw new Error("Cada configuración debe ser un objeto válido.");
            }
        }

        // 2. Usamos un bucle for...of para fusionar todas las configuraciones
        let finalConfig = {};
        for (const cfg of configs) {
            finalConfig = { ...finalConfig, ...cfg };
        }

        // 3. Retornamos el objeto final con propiedad adicional 'validacion'
        return { ...finalConfig, validacion: true };

    } catch (error) {
        // Si ocurre un error, retornamos un objeto con validacion: false
        console.error("Error en la configuración:", error.message);
        return { validacion: false };
    }
}

// Caso correcto: fusiona baseConfig y extraConfig
const resultadoValido = configFinal(baseConfig, extraConfig);
console.log("Configuración válida:", resultadoValido);

// Caso incorrecto: uno de los parámetros no es un objeto
const resultadoInvalido = configFinal(baseConfig, "no es un objeto");
console.log("Configuración inválida:", resultadoInvalido);