import { Jugador } from "./Jugador";
import { Equipo } from "./Equipo";

export class JugadoCampo extends Jugador {
    goles: number;
    asistencias: number;

    constructor(nombre: string,apellido: string,fechaNac: Date,partidosJugados: number,posicion: "DELANTERO" | "MEDIO" | "DEFENSA" | "ARQUERO",provincia: string,HistorialEquipo: Array<Equipo>,dorsal: number,goles: number, asistencias: number) {
        super(nombre, apellido, fechaNac, partidosJugados, posicion, provincia, HistorialEquipo, dorsal);
        this.goles = goles
        this.asistencias = asistencias
    }


    porcentajeGoles(): number {
        return this.goles * 100 / this.partidosJugados;
    }


}