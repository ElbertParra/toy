// Importar el módulo readline para manejar la entrada del usuario desde la línea de comandos
const readline = require('readline');

// Crear una interfaz para leer la entrada y escribir la salida
const rl = readline.createInterface({
  input: process.stdin,  // Leer entrada desde la entrada estándar (teclado)
  output: process.stdout // Escribir salida en la salida estándar (consola)
});

// Programa principal
console.log("¡Bienvenido a tu primer programa interactivo!");

// Interaction with the user questions.
rl.question('¿Cuál es tu primer nombre? ', (primerNombre) => {
  rl.question('¿Cuál es el nombre de tu puesto? ', (puesto) => {
    rl.question('¿Dame un primer adjetivo? ', (primerAdjetivo) => {
      rl.question('¿Dame un segundo adjetivo? ', (segundoAdjetivo) => {
        rl.question('¿Dame tu primera comida? ', (primeraComida) => {
          rl.question('¿Dame tu segunda comida? ', (segundaComida) => {
            rl.question('¿Dame un sentimiento? ', (sentimiento) => {
              console.log(`${primerNombre} ha comenzado hoy su primer curso de Generation. Se está formando como ${puesto}. Sus compañeros le parecieron muy ${primerAdjetivo}, pero su profesor era, cuando menos, ${segundoAdjetivo}. De almuerzo come ${primeraComida} y ${segundaComida} mientras repasa sus notas. Siente ${sentimiento} pero tiene la determinación de terminar el curso.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

//// probando

