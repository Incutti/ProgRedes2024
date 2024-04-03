import { Pedido } from "./pedido";
import { Plato } from "./plato";



export class Mesa{
    _pedidos:Array<Pedido>;
    _numeroMesa:number;
    _ocupada:boolean;
    _cantidadSillas:number;

    constructor(numeroMesa:number, cantidadSillas:number) {
        this._pedidos = new Array<Pedido>;
        this._numeroMesa = numeroMesa;
        this._ocupada = false;
        this._cantidadSillas=cantidadSillas;
    } 

    get getPedidos(): Array<Pedido> {
        return this._pedidos;
    }
    get getOcupada(): boolean {
        return this._ocupada;
    }
    get getNumeroMesa(): number {
        return this._numeroMesa;
    }
    get getCantidadsillas(): number {
        return this._cantidadSillas;
    }

    public set setPedidos(value: Array<Pedido>) {
        this._pedidos = value;
    }
    public set setOcupada(value: boolean) {
        this._ocupada = value;
    }
    public set setNumeroMesa(value: number) {
        this._numeroMesa = value;
    }
    public set setCantiidadSillas(value: number) {
        this._cantidadSillas = value;
    }

    pedirLaCuenta():number{
        let total:number = 0;
        for(let i=0;i==this._pedidos.length;i++){
            total = total + this._pedidos[i].conocerPrecio();
        }
        return total;
    }

    platosPendientes(): Array<Plato>{
        let pendientes = new Array<Plato>;
        for(let i=0;i==this._pedidos.length;i++){
           if (!this._pedidos[i].getEntregado){
            for(let j=0;j==this._pedidos[i].getPlatos.length;j++){
                pendientes.push(this._pedidos[i].getPlatos[j]);
            }
           }
        }
        return pendientes;
    }
}