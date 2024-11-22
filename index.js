const { registrar, leer } = require('./operaciones');

const args = process.argv;
const operacion = args[2];
const nombre = args[3];
const edad = args[4];
const animal = args[5];
const color = args[6];
const enfermedad = args[7];


if (operacion === 'registrar') {
    if (nombre && edad && animal && color && enfermedad) {
        registrar(nombre, edad, animal, color, enfermedad);
    } else {
        console.log('Error: Faltan argumentos para registrar una cita.');
    }
} else if (operacion === 'leer') {
    leer();
} else {
    console.log('Operación no válida. Usa "registrar" o "leer".');
}
