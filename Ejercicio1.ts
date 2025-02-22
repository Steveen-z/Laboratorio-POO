import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { isStringObject } from 'node:util/types';

abstract class Propiedad {
    constructor(public categoria: string, public direccion: string, public detalles: string, public precio: number, public largo: number, public ancho: number, public id: number) { }

    //public abstract calcularTerritorio(): number;

    public MostrarInformacion(): void{
        console.log(`Detalles:\nDireccion: ${this.direccion}\nLargo: ${this.largo}\nAncho: ${this.ancho} \nTerritorio: ${this.largo*this.ancho}m^2 \nDetalles: ${this.detalles}\nPrecio: ${this.precio}`);
    }
}

class Terreno extends Propiedad {
    constructor(categoria: string, direccion: string, detalles: string, precio: number, largo: number, ancho: number, id: number) {
        super( categoria, direccion, detalles, precio, largo, ancho, id);
    }
}

class Casa extends Propiedad {
    public habitaciones: number;
    public bath: number;
    public pisos: number;

    constructor(categoria: string, direccion: string, detalles: string, precio: number, largo: number, ancho: number,pisos: number, habitaciones: number, bath: number, id: number) {
        super(categoria, direccion, detalles, precio, largo, ancho, id);
        this.bath = bath;
        this.habitaciones = habitaciones;
    }
}

class Apartamento extends Propiedad {
    public habitaciones: number;
    public bath: number;
    public nivel: number;

    constructor(categoria: string, direccion: string, detalles: string, precio: number, largo: number, ancho: number,piso: number, habitaciones: number, bath: number, id: number) {
        super(categoria, direccion, detalles, precio, largo, ancho, id);
        this.bath = bath;
        this.nivel = this.nivel;
        this.habitaciones = habitaciones;
    }


}

async function pedirNumero(rl: readline.Interface, mensaje: string): Promise<number> {
    while (true) {
        const input = await rl.question(mensaje);
        const numero = parseFloat(input);
        if (!isNaN(numero) && numero > 0) {
            return numero;
        } else {
            console.log("\x1b[31m\nIngrese un numero válido (mayor a 0).\n\x1b[0m");
        }
    }
}

async function pedirNumero1(rl: readline.Interface, mensaje: string): Promise<number> {
    while (true) {
        const input = await rl.question(mensaje);
        const numero = parseFloat(input);
        if (!isNaN(numero) && numero > -1) {
            return numero;
        } else {
            console.log("\x1b[31m\nIngrese un numero válido (mayor a 0).\n\x1b[0m");
        }
    }
}

const arrayTerrenos: Terreno[] = [];
const arrayCasas: Casa[] = [];
const arrayApartamentos: Apartamento[] = [];

async function main() {
    const rl = readline.createInterface({ input, output });

    while (true) {
        console.log(`Menu: \n1-Mostrar Propiedades\n2-Agregar propiedad\n3-Modificar propiedad\n4-Eliminar propiedad\n0-Salir`);
        const eleccion = await pedirNumero1(rl, "Ingrese el precio del inmobiliario: ");
        

        if (eleccion === 0) {
            console.log("Saliendo...");
            break; 
        }

        

        try {
            
            switch (eleccion) {
                case 1:
                    console.clear();
                    console.log("=== Terrenos ===");
                    arrayTerrenos.forEach((terreno) => terreno.MostrarInformacion());

                    console.log("\n=== Casas ===");
                    arrayCasas.forEach((casa) => casa.MostrarInformacion());

                    console.log("\n=== Apartamentos ===");
                    arrayApartamentos.forEach((apartamento) => apartamento.MostrarInformacion());
                break;
                    
                case 2:
                    
                    console.clear();
                    console.log(`Agregar propiedades: Ingrese el tipo de propiedad que quiera registrar.\n  1- Terreno\n  2- Casa\n  3- Apartamento`);
                    const tipoPropiedad = await pedirNumero(rl, "Ingrese el precio del inmobiliario: ");
    
                    if (tipoPropiedad < 1 || tipoPropiedad > 3) {
                        console.log("\x1b[31m\nOpcion no valida.\n\x1b[0m");
                        break;
                    }
                    const direccion = await rl.question("Ingrese la dirección: ");
                    const detalles = await rl.question("Ingrese los detalles: ");
                    const precio = await pedirNumero(rl, "Ingrese el precio del inmobiliario: ");
                    const largo = await pedirNumero(rl, "Ingrese el largo del inmobiliario: ");
                    const ancho = await pedirNumero(rl, "Ingrese el ancho del inmobiliario: ");
                    const id = Math.floor(Math.random() * 10000); 
    
                    if (tipoPropiedad === 1) {
                        const terreno = new Terreno("Terreno", direccion, detalles, precio, largo, ancho, id);
                        arrayTerrenos.push(terreno);
                        console.log("\x1b[32mTerreno agregado con exito.\x1b[0m");
                    } else if (tipoPropiedad === 2) {
                        const pisos = await pedirNumero(rl, "Ingrese el numero de pisos: ");
                        const habitaciones = await pedirNumero(rl, "Ingrese el numero de habitaciones: ");
                        const bath = await pedirNumero(rl, "Ingrese el numero de baños: ");
                        const casa = new Casa("Casa", direccion, detalles, precio, largo, ancho, pisos, habitaciones, bath, id);
                        arrayCasas.push(casa);
                        console.log("\x1b[32mCasa agregada con exito.\x1b[0m");
                    } else if (tipoPropiedad === 3) {
                        const nivel = await pedirNumero(rl, "Ingrese el nivel en que se encuentra el departamento: ");
                        const habitaciones = await pedirNumero(rl, "Ingrese el numero de habitaciones: ");
                        const bath = await pedirNumero(rl, "Ingrese el numero de baños: ");
                        const apartamento = new Apartamento("Apartamento", direccion, detalles, precio, largo, ancho, nivel, habitaciones, bath, id);
                        arrayApartamentos.push(apartamento);
                        console.log("\x1b[32mApartamento agregado con exito.\x1b[0m");
                    }
                    break;
                case 3:
                    console.clear();
                    console.log(`Seleccione el tipo de propiedad a editar:\n  1- Terreno\n  2- Casa\n  3- Apartamento`);
                
                    const tipoEditar = await pedirNumero(rl, "Ingrese el numero correspondiente: ");
                    let arrayEditar: Propiedad[] | null = null;
                    let nombreEditar = "";
                
                    if (tipoEditar === 1) {
                        arrayEditar = arrayTerrenos;
                        nombreEditar = "Terreno";
                    } else if (tipoEditar === 2) {
                        arrayEditar = arrayCasas;
                        nombreEditar = "Casa";
                    } else if (tipoEditar === 3) {
                        arrayEditar = arrayApartamentos;
                        nombreEditar = "Apartamento";
                    } else {
                        console.log("\x1b[31m\nOpcion no valida.\x1b[0m");
                        break;
                    }
                
                    if (arrayEditar.length === 0) {
                        console.log(`\x1b[33mNo hay ${nombreEditar.toLowerCase()}s registrados.\x1b[0m`);
                        break;
                    }
                
                    console.log(`\n=== ${nombreEditar}s Disponibles ===`);
                    arrayEditar.forEach((prop) => {
                        console.log(`ID: ${prop.id} - Direccion: ${prop.direccion} - Precio: ${prop.precio}`);
                    });
                
                    const idAEditar = await pedirNumero(rl, "Ingrese el ID de la propiedad que desea editar: ");
                    const propiedad = arrayEditar.find((prop) => prop.id === idAEditar);
                
                    if (!propiedad) {
                        console.log("\x1b[31mNo se encontró una propiedad con ese ID.\x1b[0m");
                        break;
                    }
                
                    console.log(`\nPropiedad Seleccionada:`);
                    propiedad.MostrarInformacion();
                
                    console.log(`Seleccione el campo a modificar:
                    1 - Direccion
                    2 - Detalles
                    3 - Precio
                    4 - Largo
                    5 - Ancho`);
                
                    if (tipoEditar === 2 || tipoEditar === 3) {
                        console.log(`6 - Número de habitaciones
                    7 - Número de baños`);
                    }
                
                    if (tipoEditar === 2) {
                        console.log(`8 - Número de pisos`);
                    }
                
                    if (tipoEditar === 3) {
                        console.log(`8 - Nivel del apartamento`);
                    }
                
                    const opcionEditar = await pedirNumero(rl, "Ingrese el numero correspondiente: ");
                
                    switch (opcionEditar) {
                        case 1:
                            propiedad.direccion = await rl.question("Ingrese la nueva dirección: ");
                            break;
                        case 2:
                            propiedad.detalles = await rl.question("Ingrese los nuevos detalles: ");
                            break;
                        case 3:
                            propiedad.precio = await pedirNumero(rl, "Ingrese el nuevo precio: ");
                            break;
                        case 4:
                            propiedad.largo = await pedirNumero(rl, "Ingrese el nuevo largo: ");
                            break;
                        case 5:
                            propiedad.ancho = await pedirNumero(rl, "Ingrese el nuevo ancho: ");
                            break;
                        case 6:
                            if ("habitaciones" in propiedad) {
                                propiedad.habitaciones = await pedirNumero(rl, "Ingrese el nuevo numero de habitaciones: ");
                            }
                            break;
                        case 7:
                            if ("bath" in propiedad) {
                                propiedad.bath = await pedirNumero(rl, "Ingrese el nuevo numero de baños: ");
                            }
                            break;
                        case 8:
                            if (tipoEditar === 2 && "pisos" in propiedad) {
                                propiedad.pisos = await pedirNumero(rl, "Ingrese el nuevo numero de pisos: ");
                            } else if (tipoEditar === 3 && "nivel" in propiedad) {
                                propiedad.nivel = await pedirNumero(rl, "Ingrese el nuevo nivel del apartamento: ");
                            }
                            break;
                        default:
                            console.log("\x1b[31mOpcion no valida.\x1b[0m");
                            break;
                    }
                
                    console.log("\x1b[32mPropiedad editada con exito.\x1b[0m");
                    break;
                case 4:
                    console.clear();
                    console.log('Seleccione el inmobiliario que desee eliminar: \n  1- Terreno\n  2- Casa\n  3- Apartamento');
                        
                        const tipoEliminar = parseInt(await rl.question("Ingrese el numero correspondiente: "));
                    
                        let arraySeleccionado: Propiedad[] | null = null;
                        let nombreTipo = "";
                    
                        if (tipoEliminar === 1) {
                            arraySeleccionado = arrayTerrenos;
                            nombreTipo = "Terreno";
                        } else if (tipoEliminar === 2) {
                            arraySeleccionado = arrayCasas;
                            nombreTipo = "Casa";
                        } else if (tipoEliminar === 3) {
                            arraySeleccionado = arrayApartamentos;
                            nombreTipo = "Apartamento";
                        } else {
                            console.log("\x1b[31m\nOpcion no valida.\x1b[0m");
                            break;
                        }
                    
                        if (arraySeleccionado.length === 0) {
                            console.log(`\x1b[33mNo hay ${nombreTipo.toLowerCase()}s registrados.\x1b[0m`);
                            break;
                        }
                    
                        console.log(`\n=== ${nombreTipo}s Disponibles ===`);
                        arraySeleccionado.forEach((prop, index) => {
                            console.log(`=> ID: ${prop.id} \nDireccion: ${prop.direccion} - Precio: ${prop.precio}`);
                        });
                    
                        const idAEliminar = parseInt(await rl.question("Ingrese el ID de la propiedad que desea eliminar: "));
                        const index = arraySeleccionado.findIndex((prop) => prop.id === idAEliminar);
                    
                        if (index !== -1) {
                            arraySeleccionado.splice(index, 1);
                            console.log("\x1b[32mPropiedad eliminada con exito.\x1b[0m");
                        } else {
                            console.log("\x1b[31mNo se encontró una propiedad con ese ID.\x1b[0m");
                        }
                        break;
                default:
                    console.clear();
                    console.log("\x1b[31m\nNo ha ingresado un dato valido. Por favor ingresar un numero del 0 al 4.\n\x1b[0m");
                    break;
            }
        } catch (error) {
            console.log("Error:", error.message);
        }
    }

    rl.close(); 
    
}



main();
