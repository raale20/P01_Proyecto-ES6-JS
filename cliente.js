import Parking from './parking';
import Vehiculo from './vehiculo';
import TicketGuardados from './ticketsGuardados';
import * as readline from 'readline-sync'

class Cliente {
    constructor(nombre, vehiculo) {
      this.nombre = nombre;
      this.vehiculo = vehiculo;
    }

    aparcamiento = new Parking()
    ticket=new TicketGuardados()

    //Métodos
    depositarVehiculo(Vehiculo) {
        console.log("Quedan" + this.aparcamiento.getPlazasLibresTurismo +" plazas libres de turismos, " + this.aparcamiento.getPlazasLibresMoto + " plazas libres de motos y " + this.aparcamiento.getPlazasLibresCaravana + " plazas libres de caravanas")
        let lecturaTipo=readline.question("Introduzca el tipo de su vehículo: ");
        let lecturaMatricula=readline.question("Introduzca la matrícula de su vehículo: ");
        v1=new Vehiculo(lecturaTipo, lecturaMatricula);
        this.aparcamiento.setPlazasLibres(v1)
        return ticket.creaTickets(v1);
      }

}
//Método depositar vehículo
//Método retirar vehículo

//Método depositar abonados
//Método retirar abonados