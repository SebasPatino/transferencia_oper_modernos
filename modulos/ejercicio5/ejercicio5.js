export function configFinal(...configs) {
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