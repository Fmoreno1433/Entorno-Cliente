// Declara dos variables booleanas esEstudiante y tieneCarnet. Muestra por pantalla el resultado de las siguientes operaciones lógicas: esEstudiante AND tieneCarnet esEstudiante OR tieneCarnet NOT esEstudiante

let esEstudiante = true;
let tieneCarnet = false;

console.log("es Estudiante y tiene Carnet: " + (esEstudiante && tieneCarnet));
console.log("es Estudiante o tiene Carnet: " + (esEstudiante || tieneCarnet));
console.log("No es Estudiante: " + !esEstudiante);
