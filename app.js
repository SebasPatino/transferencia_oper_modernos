import { 
  crearEstudiante,
  fusionarCatalogos,
  procesarCompra,
  estadisticas,
  configFinal
 } from "./modulos/index.js";

function mostrarMenu() {
    let opcion;

    // Bucle infinito hasta que el usuario ingrese una opción válida
    while (true) {
        opcion = prompt(
            "Seleccione el ejercicio que desea ejecutar:\n" +
            "1. Ejercicio 1: crearEstudiante\n" +
            "2. Ejercicio 2: fusionarCatalogos\n" +
            "3. Ejercicio 3: procesarCompra\n" +
            "4. Ejercicio 4: estadisticas\n" +
            "5. Ejercicio 5: configFinal\n\n" +
            "Ingrese el número del ejercicio:"
        );

        // Validamos la opción
        if (opcion === "1") {
            ejecutarEjercicio1();
            break; // salimos del bucle
        } else if (opcion === "2") {
            ejecutarEjercicio2();
            break;
        } else if (opcion === "3") {
            ejecutarEjercicio3();
            break;
        } else if (opcion === "4") {
            ejecutarEjercicio4();
            break;
        } else if (opcion === "5") {
            ejecutarEjercicio5();
            break;
        } else {
            alert("⚠️ Opción inválida. Por favor, ingrese un número del 1 al 5.");
        }
    }
}

function ejecutarEjercicio1() {
    // Caso correcto
    const estudiante1 = crearEstudiante("Sebastián", 4.7, 3.0, 4.1);
    console.log("Estudiante válido:", estudiante1);

    // Caso incorrecto
    const estudiante2 = crearEstudiante("Juan", 3.5, "hola", 2.9);
    console.log("Estudiante inválido:", estudiante2);
}

function ejecutarEjercicio2() {
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
}

function ejecutarEjercicio3() {
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
}

function ejecutarEjercicio4() {
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
}

function ejecutarEjercicio5() {
  const baseConfig = { modo: "producción", lenguaje: "es", nivel: 1 };
  const extraConfig = { nivel: 2, tema: "oscuro" };

  // Caso correcto: fusiona baseConfig y extraConfig
  const resultadoValido = configFinal(baseConfig, extraConfig);
  console.log("Configuración válida:", resultadoValido);

  // Caso incorrecto: uno de los parámetros no es un objeto
  const resultadoInvalido = configFinal(baseConfig, "no es un objeto");
  console.log("Configuración inválida:", resultadoInvalido);
}

// Iniciamos el menú al cargar la página
mostrarMenu();