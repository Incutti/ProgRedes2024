import { Jugador } from "./Jugador";

export class Equipo {
    _nombre: string;
    _jugadores: Set<Jugador>;

    constructor(nombre: string) {
        this._nombre = nombre;
        this._jugadores = new Set<Jugador>;
    }

    get getNombre():string{
        return this._nombre;
    }
    set setNombre(value:string){
        this._nombre=value;
    }
    get getJugadores():Set<Jugador>{
        return this._jugadores;
    }
    set setJugadores(value:Set<Jugador>){
        this._jugadores=value;
    }


    
}