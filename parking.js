import Vehiculo from './vehiculo'
export class Parking {
    constructor(plazasLibres, plazasLibresTurismo, plazasLibresMoto, plazasLibresCaravana) {
      this.plazasLibres = [45];
      this.plazasLibresTurismo=[15]
      this.plazasLibresMoto=[15]
      this.plazasLibresCaravana=[15]
    }



    get plazasLibres() {
        return this.plazasLibres();
      }

    get plazasLibresTurismo() {
        return this.plazasLibresTurismo();
      }

    get plazasLibresMoto() {
        return this.plazasLibresMoto();
      }

    get plazasLibresCaravana() {
        return this.plazasLibresCaravana();
      }

    set plazasLibres(nuevoVehiculo){
        if (typeof nuevoVehiculo==Vehiculo){
            if (nuevoVehiculo.tipo=="Turismo" && this.plazasLibresTurismo.length<15){
                plazasLibresTurismo.push(nuevoVehiculo)
            }
            else if (nuevoVehiculo.tipo=="Motocicleta" && this.plazasLibresMoto.length<15){
                plazasLibresMoto.push(nuevoVehiculo)
            }

            else if (nuevoVehiculo.tipo=="Caravana" && this.plazasLibresCaravana.length<15){
                plazasLibresCaravana.push(nuevoVehiculo)
            }
        
            plazasLibres=this.plazasLibresTurismo.concat(this.plazasLibresMoto.concat(this.plazasLibresCaravana))

        }else{
            console.log("Estás introduciendo algo que no es un vehículo")
        }

    }

    

}


//45 plazas, 15 pa turismos, 15 pa motocicletas y 15 pa caravanas


