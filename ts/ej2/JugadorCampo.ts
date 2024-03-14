import { Jugador } from "./Jugador";
import { Equipo } from "./Equipo";

export class JugadoCampo extends Jugador {
    goles: number;
    asistencias: number;

    constructor(nombre: string,apellido: string,fechaNac: Date,partidosJugados: number,posicion: "DELANTERO" | "MEDIO" | "DEFENSA" | "ARQUERO",provincia: string,HistorialEquipo: Array<Equipo>,dorsal: number,goles: number, asistencias: number, equipoActual:Equipo) {
        super(nombre, apellido, fechaNac, partidosJugados, posicion, provincia, HistorialEquipo, dorsal,equipoActual);
        this.goles = goles
        this.asistencias = asistencias
    }


    porcentajeGoles(): number {
        return this.goles * 100 / this.partidosJugados;
    }

    contratar(equipoNuevo:Equipo){
        try{
        if(this.porcentajeGoles() < 30)throw new Error ("El jugador no es efectivo a la hora de meter goles");
        if(this.asistencias<10)throw new Error ("El jugador no asiste nada por lo tanto no contratoo");
        this.equiposPasados(equipoNuevo);
        this.ejecutarPase(equipoNuevo);
        console.log("El jugador "+this._nombre+" se contrató en el "+equipoNuevo._nombre+".");
        }catch(e){
            console.error(e);
        }
        
    }

}