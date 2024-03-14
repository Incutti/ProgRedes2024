"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurante = void 0;
class Restaurante {
    constructor() {
        this.menu = new Set;
        this.chefs = new Set;
    }
    chequeoPlatoChef(platoNuevo) {
        this.chefs.forEach(chefActual => {
            if (platoNuevo.chef === chefActual) {
                return true;
            }
        });
        return false;
    }
    ;
    chequeoPlatoExiste(platoNuevo) {
        this.menu.forEach(platoActual => {
            if (platoNuevo == platoActual) {
                return true;
            }
        });
        return false;
    }
    ;
    agregarPlato(platoNuevo) {
        try {
            if (this.chequeoPlatoChef(platoNuevo)) {
                throw new Error("El chef no se encuentra en el resto");
            }
            if (this.chequeoPlatoExiste(platoNuevo)) {
                throw new Error("El plato ya se encuentra en el menu");
            }
            else {
                this.menu.add(platoNuevo);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }
    contratarChef(nuevoChef) {
        try {
            if (nuevoChef.edad < 18) {
                throw new Error("El chef es menor de edad");
            }
            if (!nuevoChef.experiencia) {
                throw new Error("El chef no tiene experiencia");
            }
            else {
                this.chefs.add(nuevoChef);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }
}
exports.Restaurante = Restaurante;
