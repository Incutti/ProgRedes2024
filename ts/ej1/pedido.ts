import { Plato } from "./plato";


export class Pedido{
    _platos: Array<Plato>;
    _entregado: boolean;
    _especificaciones: string;

    constructor(platos: Array<Plato>, especificaciones:string) {
        this._platos = platos;
        this._entregado = false;
        this._especificaciones = especificaciones;
    } 

    get getPlatos(): Array<Plato> {
        return this._platos;
    }
    get getEntregado(): boolean {
        return this._entregado;
    }
    get geteEspecificaciones(): string {
        return this._especificaciones;
    }

    public set setPlatos(value: Array<Plato>) {
        this._platos = value;
    }
    public set setEntregado(value: boolean) {
        this._entregado = value;
    }
    public set setEspecificaciones(value: string) {
        this._especificaciones = value;
    }


    entregarPedido() {
        this._entregado=true;
    }
    
    conocerPrecio():number {
        let total:number = 0;
        for(let i=0;i==this._platos.length;i++){
            total=total+this._platos[i].precio;
        }
        return total;
    }
}