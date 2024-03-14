import { Jugador } from "./Jugador";

export class Equipo {
    nombre: string;
    jugadores: Set<Jugador>;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.jugadores = new Set<Jugador>;
    }

    contratar(){}
}