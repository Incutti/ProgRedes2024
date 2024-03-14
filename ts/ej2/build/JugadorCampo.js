"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JugadoCampo = void 0;
const Jugador_1 = require("./Jugador");
class JugadoCampo extends Jugador_1.Jugador {
    constructor(nombre, apellido, fechaNac, partidosJugados, posicion, provincia, HistorialEquipo, dorsal, goles, asistencias) {
        super(nombre, apellido, fechaNac, partidosJugados, posicion, provincia, HistorialEquipo, dorsal);
        this.goles = goles;
        this.asistencias = asistencias;
    }
    porcentajeGoles() {
        return this.goles * 100 / this.partidosJugados;
    }
}
exports.JugadoCampo = JugadoCampo;
