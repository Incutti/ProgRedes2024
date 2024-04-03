import { Plato } from "./plato";
import { Chef } from "./chef";
import { Mesa } from "./mesa";

export class Restaurante {
    _menu: Set<Plato>;
    _chefs: Set<Chef>;
    _mesas:Set<Mesa>;


    constructor() {
        this._menu = new Set<Plato>;
        this._chefs = new Set<Chef>;
        this._mesas = new Set<Mesa>;

    } 
    

    chequeoPlatoChef(platoNuevo: Plato) {
        this._chefs.forEach(chefActual => {
            if (platoNuevo.chef === chefActual) {
                return true;
            }
        });
        return false;
    };

    chequeoPlatoExiste(platoNuevo: Plato): boolean {
        this._menu.forEach(platoActual => {
            if (platoNuevo == platoActual) {
                return true;
            }
        });
        return false;
    };

    agregarPlato(platoNuevo: Plato) {
        try{
        
        if (this.chequeoPlatoChef(platoNuevo)) {
            throw new Error("El chef no se encuentra en el resto");
        }
        if (this.chequeoPlatoExiste(platoNuevo)) {
            throw new Error("El plato ya se encuentra en el menu");
        } else {
            this._menu.add(platoNuevo);
        }
    }catch(error){
        if (error instanceof Error){
        console.error(error.message);
        }
    }
    }

    contratarChef(nuevoChef: Chef) {
        try{
        if (nuevoChef.edad < 18){
            throw new Error("El chef es menor de edad");
        }
        if (!nuevoChef.experiencia) {
            throw new Error("El chef no tiene experiencia");

        } else {
            this._chefs.add(nuevoChef);
        }
        }catch(error){
            if (error instanceof Error){
            console.error(error.message);
            }
        }
    }

    conocerMesasDisponibles(): Set<Mesa> {
        let mesasDisponibles: Set<Mesa> = new Set<Mesa>;
        this._mesas.forEach(mesaActual => {
            if (!mesaActual.getOcupada) {
                mesasDisponibles.add(mesaActual);
            }
        });
        return mesasDisponibles;
    }
}