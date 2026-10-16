// Escribe un programa que determine si un número dado es primo. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Muestra el resultado por pantalla.


let num = 7;
let primo = true;

if (num <= 1) {
    primo = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            primo = false;
            break;
        }
    }
}

if (primo) {
    console.log(num + " es primo");
} else {
    console.log(num + " no es primo");
}
