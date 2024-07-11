export default class CL_IEmpleado {

    leerNombre() {
        return prompt("Introduce nombre: ");
    }
    leerMontoVenta() {
        return prompt("Monto de las ventas: ");
    }
    leerPorcentaje() {
        return prompt("Porcentaje a aplicar: ");
    }
    reporteVenta(n,mv,bv){
        return `
    <br> nombre: ${n}  
    <br> Monto de ventas: ${mv}
    <br> Bono de venta : ${bv}
    `
    }
}