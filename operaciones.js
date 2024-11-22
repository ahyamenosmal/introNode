const fs = require('fs');

function registrar(nombre, edad, animal, color, enfermedad) {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    const nuevaCita = { nombre, edad, animal, color, enfermedad };
    citas.push(nuevaCita);
    fs.writeFileSync('citas.json', JSON.stringify(citas), 'utf-8');
    console.log('Cita registrada con éxito:', nuevaCita);
}

function leer() {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    console.log('Citas registradas:', citas);
}

module.exports = { registrar, leer };
