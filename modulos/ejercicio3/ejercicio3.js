export function procesarCompra(cliente, productos) {
    try {
        // 1. Validamos que el cliente tenga nombre y correo
        const { nombre, correo } = cliente;
        if (!nombre || !correo) {
            throw new Error("El cliente no tiene la información completa (nombre y correo requeridos).");
        }

        // 2. Validamos que productos sea un arreglo y que cada producto tenga nombre y precio
        if (!Array.isArray(productos) || productos.length === 0) {
            throw new Error("La lista de productos no es válida.");
        }
        for (const p of productos) {
            if (!p.nombre || typeof p.precio !== "number") {
                // Aquí evitamos JSON.stringify y usamos el nombre si existe
                const productoInfo = p.nombre ? p.nombre : "Producto sin nombre";
                throw new Error(`El producto "${productoInfo}" no es válido (debe tener nombre y precio numérico).`);
            }
        }

        // 3. Usamos spread para crear un nuevo objeto con la información del cliente
        const clienteFinal = { ...cliente };

        // 4. Usamos destructuración para separar el primer producto del resto
        const [primerProducto, ...otrosProductos] = productos;

        // Calculamos el precio total
        let precioTotal = 0;
        for (const p of productos) {
            precioTotal += p.precio;
        }

        // Construimos el informe final
        const informe = {
            cliente: clienteFinal,
            totalProductos: productos.length,
            precioTotal,
            primerProducto
        };

        return informe;

    } catch (error) {
        // Capturamos el error y mostramos un mensaje claro
        console.error("Error en el procesamiento de la compra:", error.message);
    }
}