"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("node:readline/promises");
var node_process_1 = require("node:process");
var Propiedad = /** @class */ (function () {
    function Propiedad(categoria, direccion, detalles, precio, largo, ancho, id) {
        this.categoria = categoria;
        this.direccion = direccion;
        this.detalles = detalles;
        this.precio = precio;
        this.largo = largo;
        this.ancho = ancho;
        this.id = id;
    }
    //public abstract calcularTerritorio(): number;
    Propiedad.prototype.MostrarInformacion = function () {
        console.log("Detalles:\nDireccion: ".concat(this.direccion, "\nLargo: ").concat(this.largo, "\nAncho: ").concat(this.ancho, " \nTerritorio: ").concat(this.largo * this.ancho, "m^2 \nDetalles: ").concat(this.detalles, "\nPrecio: ").concat(this.precio));
    };
    return Propiedad;
}());
var Terreno = /** @class */ (function (_super) {
    __extends(Terreno, _super);
    function Terreno(categoria, direccion, detalles, precio, largo, ancho, id) {
        return _super.call(this, categoria, direccion, detalles, precio, largo, ancho, id) || this;
    }
    return Terreno;
}(Propiedad));
var Casa = /** @class */ (function (_super) {
    __extends(Casa, _super);
    function Casa(categoria, direccion, detalles, precio, largo, ancho, pisos, habitaciones, bath, id) {
        var _this = _super.call(this, categoria, direccion, detalles, precio, largo, ancho, id) || this;
        _this.bath = bath;
        _this.habitaciones = habitaciones;
        return _this;
    }
    return Casa;
}(Propiedad));
var Apartamento = /** @class */ (function (_super) {
    __extends(Apartamento, _super);
    function Apartamento(categoria, direccion, detalles, precio, largo, ancho, piso, habitaciones, bath, id) {
        var _this = _super.call(this, categoria, direccion, detalles, precio, largo, ancho, id) || this;
        _this.bath = bath;
        _this.nivel = _this.nivel;
        _this.habitaciones = habitaciones;
        return _this;
    }
    return Apartamento;
}(Propiedad));
function pedirNumero(rl, mensaje) {
    return __awaiter(this, void 0, void 0, function () {
        var input_1, numero;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 2];
                    return [4 /*yield*/, rl.question(mensaje)];
                case 1:
                    input_1 = _a.sent();
                    numero = parseFloat(input_1);
                    if (!isNaN(numero) && numero > 0) {
                        return [2 /*return*/, numero];
                    }
                    else {
                        console.log("\x1b[31m\nIngrese un número válido (mayor a 0).\n\x1b[0m");
                    }
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/];
            }
        });
    });
}
var arrayTerrenos = [];
var arrayCasas = [];
var arrayApartamentos = [];
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var rl, _loop_1, state_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rl = readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
                    _loop_1 = function () {
                        var eleccion, _b, tipoPropiedad, direccion, detalles, precio, largo, ancho, id, terreno, pisos, habitaciones, bath, casa, nivel, habitaciones, bath, apartamento, tipoEditar, arrayEditar, nombreEditar, idAEditar_1, propiedad, opcionEditar, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, tipoEliminar, _o, arraySeleccionado, nombreTipo, idAEliminar_1, _p, index, error_1;
                        return __generator(this, function (_q) {
                            switch (_q.label) {
                                case 0:
                                    console.log("Menu: \n1-Mostrar Propiedades\n2-Agregar propiedad\n3-Modificar propiedad\n4-Eliminar propiedad\n0-Salir");
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el precio del inmobiliario: ")];
                                case 1:
                                    eleccion = _q.sent();
                                    if (eleccion === 0) {
                                        console.log("Saliendo...");
                                        return [2 /*return*/, "break"];
                                    }
                                    _q.label = 2;
                                case 2:
                                    _q.trys.push([2, 52, , 53]);
                                    _b = eleccion;
                                    switch (_b) {
                                        case 1: return [3 /*break*/, 3];
                                        case 2: return [3 /*break*/, 4];
                                        case 3: return [3 /*break*/, 20];
                                        case 4: return [3 /*break*/, 47];
                                    }
                                    return [3 /*break*/, 50];
                                case 3:
                                    console.clear();
                                    console.log("=== Terrenos ===");
                                    arrayTerrenos.forEach(function (terreno) { return terreno.MostrarInformacion(); });
                                    console.log("\n=== Casas ===");
                                    arrayCasas.forEach(function (casa) { return casa.MostrarInformacion(); });
                                    console.log("\n=== Apartamentos ===");
                                    arrayApartamentos.forEach(function (apartamento) { return apartamento.MostrarInformacion(); });
                                    return [3 /*break*/, 51];
                                case 4:
                                    console.clear();
                                    console.log("Agregar propiedades: Ingrese el tipo de propiedad que quiera registrar.\n  1- Terreno\n  2- Casa\n  3- Apartamento");
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el precio del inmobiliario: ")];
                                case 5:
                                    tipoPropiedad = _q.sent();
                                    if (tipoPropiedad < 1 || tipoPropiedad > 3) {
                                        console.log("\x1b[31m\nTipo de propiedad no válido.\n\x1b[0m");
                                        return [3 /*break*/, 51];
                                    }
                                    return [4 /*yield*/, rl.question("Ingrese la dirección: ")];
                                case 6:
                                    direccion = _q.sent();
                                    return [4 /*yield*/, rl.question("Ingrese los detalles: ")];
                                case 7:
                                    detalles = _q.sent();
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el precio del inmobiliario: ")];
                                case 8:
                                    precio = _q.sent();
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el largo del inmobiliario: ")];
                                case 9:
                                    largo = _q.sent();
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el ancho del inmobiliario: ")];
                                case 10:
                                    ancho = _q.sent();
                                    id = Math.floor(Math.random() * 10000);
                                    if (!(tipoPropiedad === 1)) return [3 /*break*/, 11];
                                    terreno = new Terreno("Terreno", direccion, detalles, precio, largo, ancho, id);
                                    arrayTerrenos.push(terreno);
                                    console.log("\x1b[32mTerreno agregado con éxito.\x1b[0m");
                                    return [3 /*break*/, 19];
                                case 11:
                                    if (!(tipoPropiedad === 2)) return [3 /*break*/, 15];
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el número de pisos: ")];
                                case 12:
                                    pisos = _q.sent();
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el número de habitaciones: ")];
                                case 13:
                                    habitaciones = _q.sent();
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el número de baños: ")];
                                case 14:
                                    bath = _q.sent();
                                    casa = new Casa("Casa", direccion, detalles, precio, largo, ancho, pisos, habitaciones, bath, id);
                                    arrayCasas.push(casa);
                                    console.log("\x1b[32mCasa agregada con éxito.\x1b[0m");
                                    return [3 /*break*/, 19];
                                case 15:
                                    if (!(tipoPropiedad === 3)) return [3 /*break*/, 19];
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el nivel en que se encuentra el departamento: ")];
                                case 16:
                                    nivel = _q.sent();
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el número de habitaciones: ")];
                                case 17:
                                    habitaciones = _q.sent();
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el número de baños: ")];
                                case 18:
                                    bath = _q.sent();
                                    apartamento = new Apartamento("Apartamento", direccion, detalles, precio, largo, ancho, nivel, habitaciones, bath, id);
                                    arrayApartamentos.push(apartamento);
                                    console.log("\x1b[32mApartamento agregado con éxito.\x1b[0m");
                                    _q.label = 19;
                                case 19: return [3 /*break*/, 51];
                                case 20:
                                    console.clear();
                                    console.log("Seleccione el tipo de propiedad a editar:\n                    1 - Terreno\n                    2 - Casa\n                    3 - Apartamento");
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el número correspondiente: ")];
                                case 21:
                                    tipoEditar = _q.sent();
                                    arrayEditar = null;
                                    nombreEditar = "";
                                    if (tipoEditar === 1) {
                                        arrayEditar = arrayTerrenos;
                                        nombreEditar = "Terreno";
                                    }
                                    else if (tipoEditar === 2) {
                                        arrayEditar = arrayCasas;
                                        nombreEditar = "Casa";
                                    }
                                    else if (tipoEditar === 3) {
                                        arrayEditar = arrayApartamentos;
                                        nombreEditar = "Apartamento";
                                    }
                                    else {
                                        console.log("\x1b[31m\nOpción no válida.\x1b[0m");
                                        return [3 /*break*/, 51];
                                    }
                                    if (arrayEditar.length === 0) {
                                        console.log("\u001B[33mNo hay ".concat(nombreEditar.toLowerCase(), "s registrados.\u001B[0m"));
                                        return [3 /*break*/, 51];
                                    }
                                    console.log("\n=== ".concat(nombreEditar, "s Disponibles ==="));
                                    arrayEditar.forEach(function (prop) {
                                        console.log("ID: ".concat(prop.id, " - Direcci\u00F3n: ").concat(prop.direccion, " - Precio: ").concat(prop.precio));
                                    });
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el ID de la propiedad que desea editar: ")];
                                case 22:
                                    idAEditar_1 = _q.sent();
                                    propiedad = arrayEditar.find(function (prop) { return prop.id === idAEditar_1; });
                                    if (!propiedad) {
                                        console.log("\x1b[31mNo se encontró una propiedad con ese ID.\x1b[0m");
                                        return [3 /*break*/, 51];
                                    }
                                    console.log("\nPropiedad Seleccionada:");
                                    propiedad.MostrarInformacion();
                                    console.log("Seleccione el campo a modificar:\n                    1 - Direcci\u00F3n\n                    2 - Detalles\n                    3 - Precio\n                    4 - Largo\n                    5 - Ancho");
                                    if (tipoEditar === 2 || tipoEditar === 3) {
                                        console.log("6 - N\u00FAmero de habitaciones\n                    7 - N\u00FAmero de ba\u00F1os");
                                    }
                                    if (tipoEditar === 2) {
                                        console.log("8 - N\u00FAmero de pisos");
                                    }
                                    if (tipoEditar === 3) {
                                        console.log("8 - Nivel del apartamento");
                                    }
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el número correspondiente: ")];
                                case 23:
                                    opcionEditar = _q.sent();
                                    _c = opcionEditar;
                                    switch (_c) {
                                        case 1: return [3 /*break*/, 24];
                                        case 2: return [3 /*break*/, 26];
                                        case 3: return [3 /*break*/, 28];
                                        case 4: return [3 /*break*/, 30];
                                        case 5: return [3 /*break*/, 32];
                                        case 6: return [3 /*break*/, 34];
                                        case 7: return [3 /*break*/, 37];
                                        case 8: return [3 /*break*/, 40];
                                    }
                                    return [3 /*break*/, 45];
                                case 24:
                                    _d = propiedad;
                                    return [4 /*yield*/, rl.question("Ingrese la nueva dirección: ")];
                                case 25:
                                    _d.direccion = _q.sent();
                                    return [3 /*break*/, 46];
                                case 26:
                                    _e = propiedad;
                                    return [4 /*yield*/, rl.question("Ingrese los nuevos detalles: ")];
                                case 27:
                                    _e.detalles = _q.sent();
                                    return [3 /*break*/, 46];
                                case 28:
                                    _f = propiedad;
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el nuevo precio: ")];
                                case 29:
                                    _f.precio = _q.sent();
                                    return [3 /*break*/, 46];
                                case 30:
                                    _g = propiedad;
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el nuevo largo: ")];
                                case 31:
                                    _g.largo = _q.sent();
                                    return [3 /*break*/, 46];
                                case 32:
                                    _h = propiedad;
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el nuevo ancho: ")];
                                case 33:
                                    _h.ancho = _q.sent();
                                    return [3 /*break*/, 46];
                                case 34:
                                    if (!("habitaciones" in propiedad)) return [3 /*break*/, 36];
                                    _j = propiedad;
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el nuevo número de habitaciones: ")];
                                case 35:
                                    _j.habitaciones = _q.sent();
                                    _q.label = 36;
                                case 36: return [3 /*break*/, 46];
                                case 37:
                                    if (!("bath" in propiedad)) return [3 /*break*/, 39];
                                    _k = propiedad;
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el nuevo número de baños: ")];
                                case 38:
                                    _k.bath = _q.sent();
                                    _q.label = 39;
                                case 39: return [3 /*break*/, 46];
                                case 40:
                                    if (!(tipoEditar === 2 && "pisos" in propiedad)) return [3 /*break*/, 42];
                                    _l = propiedad;
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el nuevo número de pisos: ")];
                                case 41:
                                    _l.pisos = _q.sent();
                                    return [3 /*break*/, 44];
                                case 42:
                                    if (!(tipoEditar === 3 && "nivel" in propiedad)) return [3 /*break*/, 44];
                                    _m = propiedad;
                                    return [4 /*yield*/, pedirNumero(rl, "Ingrese el nuevo nivel del apartamento: ")];
                                case 43:
                                    _m.nivel = _q.sent();
                                    _q.label = 44;
                                case 44: return [3 /*break*/, 46];
                                case 45:
                                    console.log("\x1b[31mOpción no válida.\x1b[0m");
                                    return [3 /*break*/, 46];
                                case 46:
                                    console.log("\x1b[32mPropiedad editada con éxito.\x1b[0m");
                                    return [3 /*break*/, 51];
                                case 47:
                                    console.clear();
                                    console.log('Seleccione el inmobiliario que desee eliminar: \n  1- Terreno\n  2- Casa\n  3- Apartamento');
                                    _o = parseInt;
                                    return [4 /*yield*/, rl.question("Ingrese el número correspondiente: ")];
                                case 48:
                                    tipoEliminar = _o.apply(void 0, [_q.sent()]);
                                    arraySeleccionado = null;
                                    nombreTipo = "";
                                    if (tipoEliminar === 1) {
                                        arraySeleccionado = arrayTerrenos;
                                        nombreTipo = "Terreno";
                                    }
                                    else if (tipoEliminar === 2) {
                                        arraySeleccionado = arrayCasas;
                                        nombreTipo = "Casa";
                                    }
                                    else if (tipoEliminar === 3) {
                                        arraySeleccionado = arrayApartamentos;
                                        nombreTipo = "Apartamento";
                                    }
                                    else {
                                        console.log("\x1b[31m\nOpción no válida.\x1b[0m");
                                        return [3 /*break*/, 51];
                                    }
                                    if (arraySeleccionado.length === 0) {
                                        console.log("\u001B[33mNo hay ".concat(nombreTipo.toLowerCase(), "s registrados.\u001B[0m"));
                                        return [3 /*break*/, 51];
                                    }
                                    console.log("\n=== ".concat(nombreTipo, "s Disponibles ==="));
                                    arraySeleccionado.forEach(function (prop, index) {
                                        console.log("=> ID: ".concat(prop.id, " \nDirecci\u00F3n: ").concat(prop.direccion, " - Precio: ").concat(prop.precio));
                                    });
                                    _p = parseInt;
                                    return [4 /*yield*/, rl.question("Ingrese el ID de la propiedad que desea eliminar: ")];
                                case 49:
                                    idAEliminar_1 = _p.apply(void 0, [_q.sent()]);
                                    index = arraySeleccionado.findIndex(function (prop) { return prop.id === idAEliminar_1; });
                                    if (index !== -1) {
                                        arraySeleccionado.splice(index, 1);
                                        console.log("\x1b[32mPropiedad eliminada con éxito.\x1b[0m");
                                    }
                                    else {
                                        console.log("\x1b[31mNo se encontró una propiedad con ese ID.\x1b[0m");
                                    }
                                    return [3 /*break*/, 51];
                                case 50:
                                    console.clear();
                                    console.log("\x1b[31m\nNo ha ingresado un dato valido. Por favor ingresar un numero del 0 al 4.\n\x1b[0m");
                                    return [3 /*break*/, 51];
                                case 51: return [3 /*break*/, 53];
                                case 52:
                                    error_1 = _q.sent();
                                    console.log("Error:", error_1.message);
                                    return [3 /*break*/, 53];
                                case 53: return [2 /*return*/];
                            }
                        });
                    };
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 3];
                    return [5 /*yield**/, _loop_1()];
                case 2:
                    state_1 = _a.sent();
                    if (state_1 === "break")
                        return [3 /*break*/, 3];
                    return [3 /*break*/, 1];
                case 3:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
main();
