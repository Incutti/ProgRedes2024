"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arquero = void 0;
const Jugador_1 = require("./Jugador");
class Arquero extends Jugador_1.Jugador {
    constructor(nombre, apellido, fechaNac, partidosJugados, posicion, provincia, HistorialEquipo, dorsal, golesRecibidos, atajadas) {
        super(nombre, apellido, fechaNac, partidosJugados, posicion, provincia, HistorialEquipo, dorsal);
        this.golesRecibidos = golesRecibidos;
        this.atajadas = atajadas;
    }
    PorcentajeAtajadas() {
        return this.atajadas * 100 / this.partidosJugados;
    }
}
exports.Arquero = Arquero;
