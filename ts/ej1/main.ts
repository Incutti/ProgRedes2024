
import { Tipo } from "./tipo";
import { Restaurante } from "./restaurante";
import { Chef } from "./chef";
import { Plato } from "./plato";

let chef1= new Chef("pepe",19,true);
let chef2= new Chef("pepe",13,true);
let chef3= new Chef("pepe",19,false);

let plato1 = new Plato("papa","con pesto",42,Tipo.ENTRADA,chef1);
let plato2 = new Plato("papa","con pesto",42,Tipo.ENTRADA,chef2);
let plato3 = new Plato("papa","con pesto",42,Tipo.ENTRADA,chef3);

let restaurante1= new Restaurante();

restaurante1.contratarChef(chef1);
restaurante1.contratarChef(chef2);
restaurante1.contratarChef(chef3);

restaurante1.agregarPlato(plato1);
restaurante1.agregarPlato(plato2);
restaurante1.agregarPlato(plato1);
restaurante1.agregarPlato(plato3);


