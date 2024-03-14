import { Tipo } from "./tipo";
import { Chef } from "./chef";

export class Plato{
    nombre : string;
    descripcion : string;
    precio : number;
    tipo : Tipo;
    chef : Chef;


    constructor(nombreNuevo:string, descripcionNueva:string, precioNuevo:number,tipoNuevo:Tipo,chefNuevo:Chef){
        this.nombre=nombreNuevo;
        this.descripcion=descripcionNueva;
        this.precio=precioNuevo;
        this.tipo=tipoNuevo;
        this.chef=chefNuevo;

    }
    
}