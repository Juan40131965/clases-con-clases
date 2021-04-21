class Piso {
    nombre : string
    deptos : Departamento[] = [];
    constructor (nombre: string){
        this.nombre = nombre
        
    }

pushDepartamentos (depto: Departamento){
    return this.deptos.push(depto)
}

getDepartamentos (): Departamento[] {
    return this.deptos

}
}



class Departamento {
    nombreDeDepto: string
    constructor (nombre:string){
        this.nombreDeDepto = nombre
    }
    getName (){
        return this.nombreDeDepto
    }
}

class Edificio {
    constructor(pisoP: Piso[]){
      this.pisos = pisoP
      
  }
  pisos : any[]
addDepartamentoToPiso(nombreDePiso:String, departamento:Departamento){
      const pisoEncontrado = this.pisos.find(p => p.nombre == nombreDePiso)
      return pisoEncontrado.pushDepartamentos(departamento)

  }   

  getDepartamentosByPiso (nombreDelPiso:string):Departamento[] {
            const pisoEncontrado = this.pisos.find ((p) => p.nombre == nombreDelPiso)
            return pisoEncontrado.getDepartamentos()
        }
    }






const miDepto = new Departamento ("Planta Baja C")
const miDepto2 = new Departamento ("Planta alta se")
const miPiso = new Piso ("Tercero")
const miEdificio = new Edificio ([miPiso])


console.log (miEdificio.addDepartamentoToPiso("Planta alta", miDepto2))

// class Departamento {
//     nombre: string
//     constructor(nombre){
//         this.nombre = nombre

//     }
//     getName(){
//         return this.nombre
//     }
// }

// class Piso {
//     nombre: string
//     deptos: Departamento[] = [];
//     constructor (nombre){
//         this.nombre = nombre
       
//     }

// pushDepartamento (depto: Departamento){
// return this.deptos.push (depto)
// }

// getDepartamentos(): Departamento[]{
//     return this.deptos
//     }
// }

// class Edificio {
//     pisos: Piso[]
//     constructor (pisos: Piso[]){
//         this.pisos = pisos
//     }
//     addDepartamentoToPiso (nombreDePiso: String, departamento:Departamento){
//         const pisoEncontrado = this.pisos.find(p=> p.nombre == nombreDePiso)
//         return pisoEncontrado.pushDepartamento(departamento)
//     }

//     getDepartamentosByPiso (nombreDelPiso:string):Departamento[] {
//         const pisoEncontrado = this.pisos.find ((p) => p.nombre == nombreDelPiso)
//         return pisoEncontrado.getDepartamentos()
//     }
// }

// function testClaseEdificio() {
//     const unPiso = new Piso("planta baja");
//     const otroPiso = new Piso("primer piso");
//     const unEdificio = new Edificio([unPiso, otroPiso]);
//     const deptoUno = new Departamento("depto uno");
//     const deptoDos = new Departamento("depto dos");
//     const deptoTres = new Departamento("depto tres");
//     unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
//     unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
//     unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
//     const deptos = unEdificio.getDepartamentosByPiso("planta baja");
//     const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  
//     if (
//       Array.isArray(deptosEmpty) &&
//       deptosEmpty.length == 0 &&
//       deptos.length == 3 &&
//       deptos[2].getName() == "depto tres"
//     ) {
//       console.log("testClaseBandaApartment passed");
//     } else {
//       throw "testClaseBandaApartment not passed";
//     }
//   }
  
//   function main() {
//     testClaseEdificio();
//   }
//   main();