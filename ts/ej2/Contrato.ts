import { Equipo } from "./Equipo";


export interface Contrato {

contratar(equipo: Equipo):void;
renovar(equipo:Equipo):void;
equiposPasados(equipo: Equipo):void;
ejecutarPase(equipo: Equipo):void;
verificarEquipoActual(equipo:Equipo):void;
verificarEdad():void;
/*
posibleContrato():boolean;
posibleRenovacion():void;
*/
}