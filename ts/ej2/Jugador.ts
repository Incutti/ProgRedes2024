import { Contrato } from "./Contrato";
import { Equipo } from "./Equipo";

export class Jugador implements Contrato{
    private nombre: string
    private apellido: string
    private fechaNac: Date
    private partidosJugados: number
    private posicion?: "DELANTERO" | "MEDIO" | "DEFENSA" | "ARQUERO"
    private provincia: string
    private HistorialEquipo: Array<Equipo>
    private dorsal: number

    constructor(nombre: string,apellido: string,fechaNac: Date,partidosJugados: number,posicion: "DELANTERO" | "MEDIO" | "DEFENSA" | "ARQUERO",provincia: string,HistorialEquipo: Array<Equipo>,dorsal: number) {
        this.nombre = nombre
        this.apellido = apellido
        this.fechaNac = fechaNac
        this.partidosJugados = partidosJugados
        this.posicion = posicion
        this.provincia = provincia
        this.HistorialEquipo = HistorialEquipo
        this.dorsal = dorsal
    }
    
    equiposPasados(equipo: Equipo){
        if(this.HistorialEquipo.includes(equipo))throw new Error("El jugador ya jugo en este equipo");
        
    }

    ejecutarPase(equipo:Equipo){
        this.HistorialEquipo.push(equipo);
        equipoActual=equipo;
        equipo.getJugadores().push(this);
    }
}