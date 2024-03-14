import { Contrato } from "./Contrato";
import { Equipo } from "./Equipo";

export class Jugador implements Contrato {
    _nombre: string;
    _apellido: string;
    _fechaNac: Date;
    _partidosJugados: number;
    _posicion?: "DELANTERO" | "MEDIO" | "DEFENSA" | "ARQUERO" | undefined;
    _provincia: string;
    _historialEquipo: Array<Equipo>;
    _dorsal: number;
    _equipoActual: Equipo;
    _tarjAmarillas: number;
    _suspendido: boolean;

    constructor(nombre: string,apellido: string,fechaNac: Date,partidosJugados: number,posicion: "DELANTERO" | "MEDIO" | "DEFENSA" | "ARQUERO" | undefined,provincia: string,HistorialEquipo: Array<Equipo>,dorsal: number, equipoActual:Equipo) {
        this._nombre = nombre
        this._apellido = apellido
        this._fechaNac = fechaNac
        this._partidosJugados = partidosJugados
        this._posicion = posicion
        this._provincia = provincia
        this._historialEquipo = HistorialEquipo
        this._dorsal = dorsal
        this._equipoActual = equipoActual
        this._tarjAmarillas=0
        this._suspendido=false
    }


    get getNombre(): string {
        return this._nombre;
    }
    set setNombre(value: string) {
        this._nombre = value;
    }
    public get getApellido(): string {
        return this._apellido;
    }
    public set setApellido(value: string) {
        this._apellido = value;
    }
    public get fechaNac(): Date {
        return this._fechaNac;
    }
    public set fechaNac(value: Date) {
        this._fechaNac = value;
    }
    public get partidosJugados(): number {
        return this._partidosJugados;
    }
    public set partidosJugados(value: number) {
        this._partidosJugados = value;
    }
    public get posicion(): "DELANTERO" | "MEDIO" | "DEFENSA" | "ARQUERO" | undefined {
        return this._posicion;
    }
    public set posicion(value: "DELANTERO" | "MEDIO" | "DEFENSA" | "ARQUERO" | undefined) {
        this._posicion = value;
    }
    public get provincia(): string {
        return this._provincia;
    }
    public set provincia(value: string) {
        this._provincia = value;
    }
    public get HistorialEquipo(): Array<Equipo> {
        return this._historialEquipo;
    }
    public set HistorialEquipo(value: Array<Equipo>) {
        this._historialEquipo = value;
    }
    public get dorsal(): number {
        return this._dorsal;
    }
    public set dorsal(value: number) {
        this._dorsal = value;
    }
    public get getEquipoActual():Equipo{
        return this._equipoActual;
    }
    public set setEquipoActual(value:Equipo){
        this._equipoActual=value;
    } 
    get getTarjAmarillas(): number {
        return this._tarjAmarillas;
    }
    set setTarjAmarillas(value: number) {
        this._tarjAmarillas = value;
    }
    get getSuspendido(): boolean {
        return this._suspendido;
    }
    set setSuspendido(value: boolean) {
        this._suspendido = value;
    }


    equiposPasados(equipo: Equipo) {
        if (this.HistorialEquipo.includes(equipo)) throw new Error("El jugador ya jugo en este equipo");
        // probar ^
    }
    ejecutarPase(equipo: Equipo) {
        this.HistorialEquipo.push(equipo);
        this._equipoActual = equipo;
        equipo._jugadores.add(this);
    }
    contratar(equipoNuevo:Equipo){
        this.equiposPasados(equipoNuevo);
        this.ejecutarPase(equipoNuevo);
        console.log("El jugador "+this._nombre+" se contrató en el "+equipoNuevo._nombre+".");
    }
    verificarEquipoActual(equipo: Equipo): void {
        if (this._equipoActual._nombre!==equipo._nombre) throw new Error("El jugador no puede renovar con un equipo en el que no juega.");
    }
    verificarEdad(): void {
        if((2024-this._fechaNac.getFullYear())>35) throw new Error("El jugador es mayor de 35 años por lo que no puede renovar.")
    }
    renovar(equipoARenovar:Equipo){
        try {
            
        this.verificarEquipoActual(equipoARenovar);
        this.verificarEdad();
        console.log("El jugador"+this._nombre+" renovó en el "+this._equipoActual._nombre+".");
            
        } catch (error) {
            console.error(error)
        }
    }

    limpiarTarjetas(){
        if(this._tarjAmarillas==3){
        this._tarjAmarillas=0;
            this._suspendido=true;
        } else if(this._suspendido==true){
            this._tarjAmarillas=0;
        }
    }

}