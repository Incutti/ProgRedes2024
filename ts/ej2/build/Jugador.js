"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
class Jugador {
    constructor(nombre, apellido, fechaNac, partidosJugados, posicion, provincia, HistorialEquipo, dorsal) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNac = fechaNac;
        this.partidosJugados = partidosJugados;
        this.posicion = posicion;
        this.provincia = provincia;
        this.HistorialEquipo = HistorialEquipo;
        this.dorsal = dorsal;
    }
}
exports.Jugador = Jugador;
