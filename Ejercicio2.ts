import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


abstract class Pez {
    constructor(public nombre: string, public edad: number, public tamaño: number) {}

    abstract obtenerInformacion(): string;
}


class PezAguaDulce extends Pez {
    obtenerInformacion(): string {
        return `\x1b[36mPez de Agua Dulce\x1b[0m: ${this.nombre}, Edad: ${this.edad} años, Tamaño: ${this.tamaño} cm`;
    }
}

class PezAguaSalada extends Pez {
    obtenerInformacion(): string {
        return `\x1b[35mPez de Agua Salada\x1b[0m: ${this.nombre}, Edad: ${this.edad} años, Tamaño: ${this.tamaño} cm`;
    }
}


async function pedirNumero(rl: readline.Interface, mensaje: string): Promise<number> {
    while (true) {
        const respuesta = await rl.question(mensaje);
        const numero = parseFloat(respuesta);
        if (!isNaN(numero) && numero > 0) {
            return numero;
        }
        console.log("\x1b[31m\nNo ha ingresado un dato valido. Por favor ingresar un numero del 0 al 4.\n\x1b[0m");
    }
}


async function main() {
    const rl = readline.createInterface({ input, output });
    const peces: Pez[] = [];

    while (true) {
        console.log("\nMenú:");
        console.log("1. Agregar Pez de Agua Dulce");
        console.log("2. Agregar Pez de Agua Salada");
        console.log("3. Mostrar Peces");
        console.log("0. Salir");

        const opcion = await rl.question("Seleccione una opción: ");

        switch (opcion) {
            case "1":
            case "2":
                const nombre = await rl.question("Ingrese el nombre del pez: ");
                const edad = await pedirNumero(rl, "Ingrese la edad del pez en años: ");
                const tamaño = await pedirNumero(rl, "Ingrese el tamaño del pez en cm: ");

                if (opcion === "1") {
                    peces.push(new PezAguaDulce(nombre, edad, tamaño));
                    console.log("Pez de agua dulce agregado.");
                } else {
                    peces.push(new PezAguaSalada(nombre, edad, tamaño));
                    console.log("Pez de agua salada agregado.");
                }
                break;

            case "3":
                if (peces.length === 0) {
                    console.log("\x1b[31m\nNo hay peces registrados\n\x1b[0m");
                } else {
                    console.log("\nLista de Peces:");
                    peces.forEach(pez => console.log(pez.obtenerInformacion()));
                }
                break;

            case "0":
                console.log("Saliendo del programa...");
                rl.close();
                return;

            default:
                console.log("\x1b[31m\nOpcion no valida.\n\x1b[0m");
                break;
        }
    }
}

main();
