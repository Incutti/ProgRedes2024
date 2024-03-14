"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipo = void 0;
class Equipo {
    constructor(nombre) {
        this.nombre = nombre;
        this.jugadores = new Set;
    }
    contratar() { }
}
exports.Equipo = Equipo;
