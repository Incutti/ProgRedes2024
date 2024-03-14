import { Jugador } from "./Jugador";
import { Equipo } from "./Equipo";

export class Arquero extends Jugador {
    golesRecibidos: number;
    atajadas: number;

    constructor(nombre: string,apellido: string,fechaNac: Date,partidosJugados: number,posicion: "DELANTERO" | "MEDIO" | "DEFENSA" | "ARQUERO",provincia: string,HistorialEquipo: Array<Equipo>,dorsal: number, golesRecibidos: number, atajadas: number,equipoActual:Equipo) {
        super(nombre, apellido, fechaNac, partidosJugados, posicion, provincia, HistorialEquipo, dorsal,equipoActual);
        this.golesRecibidos = golesRecibidos
        this.atajadas = atajadas
    }

    PorcentajeAtajadas(): number {
        return this.atajadas * 100 / super.partidosJugados;
    }

    contratar(equipoNuevo:Equipo){
        try{
        if(this.PorcentajeAtajadas() > 60)throw new Error ("El arquero no tiene el suficiente porcentaje de atajadas");
        if(this.golesRecibidos<10)throw new Error ("El arquero tiene Muchos goles recibidos");
        this.equiposPasados(equipoNuevo);
        this.ejecutarPase(equipoNuevo);
        console.log("El jugador "+this._nombre+" se contrató en el "+equipoNuevo._nombre+".");
        }catch(e){
            console.error(e);
        }
        
    }
}

