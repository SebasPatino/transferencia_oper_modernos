function procesarCompra(cliente, productos) {
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

// Caso correcto
const cliente1 = { nombre: "Sebastian", correo: "jseb.patino@mail.com" };
const productos1 = [
    { nombre: "tacos", precio: 50 },
    { nombre: "agua de horchata", precio: 20 },
    { nombre: "shot de tequila", precio: 200 }
];

const informe1 = procesarCompra(cliente1, productos1);
console.log("Informe válido:", informe1);

// Caso incorrecto: cliente sin correo
const cliente2 = { nombre: "Juan" };
const productos2 = [{ nombre: "quesadilla", precio: 500 }];
const informe2 = procesarCompra(cliente2, productos2);
console.log("Informe inválido:", informe2);

// Caso incorrecto: producto sin precio
const cliente3 = { nombre: "Karol", correo: "karola.tf@mail.com" };
const productos3 = [{ nombre: "birriaramen" }];
const informe3 = procesarCompra(cliente3, productos3);
console.log("Informe inválido:", informe3);