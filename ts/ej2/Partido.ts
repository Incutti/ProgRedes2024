import { Equipo } from "./Equipo";
import { Jugador } from "./Jugador";

export class Partido{

    _equipoLocal: Equipo;
    _equipoVisitante : Equipo;
    _fecha:Date;
    _amonestados:Map<Jugador, "Amarilla" | "Roja">;
    _estadisticas: Map<Jugador,number[]/*0=goles,1=asist,2=tiros*/>;
    _golesLocal:number;
    _golesVisitante:number;
    
    constructor(equipoLocal:Equipo, equipoVisitante:Equipo, fecha:Date,amonestados:Map<Jugador, "Amarilla" | "Roja">,estadisticas:Map<Jugador,number[]>,golesLocal:number,golesVisitante:number){
        this._equipoLocal=equipoLocal;
        this._equipoVisitante=equipoVisitante;
        this._fecha=fecha;
        this._amonestados=amonestados;
        this._estadisticas=estadisticas;
        this._golesLocal=golesLocal;
        this._golesVisitante=golesVisitante;
    }
}