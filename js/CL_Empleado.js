export default class CL_Empleado {
    constructor(nombre,montoVenta,porcentaje){
        this.nombre = nombre;
        this.montoVenta = montoVenta;
        this.porcentaje = porcentaje;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }
    set montoVenta(montoVenta){
        this._montoVenta = +montoVenta;
    }
    get montoVenta(){
        return this._montoVenta;
    }
    set porcentaje(porcentaje){
        this._porcentaje = +porcentaje;
    }
    get porcentaje(){
        return this._porcentaje;
    }

    montoBono(){
        return this.montoVenta * (this.porcentaje / 100);
    }

}