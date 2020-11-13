import Vehiculo from './vehiculo';
export class TicketsGuardados {
    constructor(matriculaVehiculo, fechaDeposito, idPlaza, pin) {
      this.matriculaVehiculo=matriculaVehiculo;
      this.fechaDeposito=fechaDeposito;
      this.idPlaza=0;
      this.pin=pin;
    }

    vehiculosGuardados=[]

    creaTickets(Vehiculo){
        return this.vehiculosGuardados.push(Vehiculo.getMatricula, Date.now, idPlaza++, Math.floor(Math.random() * (999999 - 000000) ) + 000000);
    }
}

