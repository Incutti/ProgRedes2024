import { Equipo } from "./Equipo";

export interface Contrato {
contratar(equipo: Equipo):void;
renovar():void;
posibleContrato():boolean;
posibleRenovacion():void;
}