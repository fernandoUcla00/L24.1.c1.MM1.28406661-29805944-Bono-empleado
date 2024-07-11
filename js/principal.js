import CL_IEmpleado from "./CL_IEmpleado.js";
import CL_Empleado from "./CL_Empleado.js";

let Iemplea = new CL_IEmpleado(),
n = Iemplea.leerNombre(),
mv = Iemplea.leerMontoVenta(),
p = Iemplea.leerPorcentaje(),

emplea = new CL_Empleado(n,mv,p),
salida = document.getElementById("salida");

salida.innerHTML= Iemplea.reporteVenta(n,mv,emplea.montoBono());