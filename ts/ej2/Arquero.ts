import { Jugador } from "./Jugador";
import { Equipo } from "./Equipo";

export class Arquero extends Jugador {
    golesRecibidos: number;
    atajadas: number;

    constructor(nombre: string,apellido: string,fechaNac: Date,partidosJugados: number,posicion: "DELANTERO" | "MEDIO" | "DEFENSA" | "ARQUERO",provincia: string,HistorialEquipo: Array<Equipo>,dorsal: number, golesRecibidos: number, atajadas: number) {
        super(nombre, apellido, fechaNac, partidosJugados, posicion, provincia, HistorialEquipo, dorsal);
        this.golesRecibidos = golesRecibidos
        this.atajadas = atajadas
    }

    PorcentajeAtajadas(): number {
        return this.atajadas * 100 / this.partidosJugados;
    }
}