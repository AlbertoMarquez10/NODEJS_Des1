const { registrar, leer} = require('./operaciones')

const accion = process.argv[2]
const nombreAnimal = process.argv[3]
const edad = process.argv[4]
const tipoAnimal = process.argv[5]
const color = process.argv[6]
const enfermedad = process.argv[7]

if (accion === 'registrar'){
    registrar(nombreAnimal, edad, tipoAnimal, color, enfermedad)
    console.log ('ejecucion registra')
} else if(accion === 'leer'){
    leer()
    console.log ('ejecucion leer')
}else {
    console.log('acción no reconocida')
}