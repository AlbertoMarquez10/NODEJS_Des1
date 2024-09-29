const fs = require('fs')

const registrar = (nombreAnimal, edad, tipoAnimal, color, enfermedad) => {
    fs.readFile('./citas.json', 'utf-8', (error, data)=>{
        if (error){
            console.error('Error al leer el archivo en funcion registrar: ', error)
            return
        } 
        const citas = JSON.parse(data)
        const newDate = {
            nombreAnimal, 
            edad,
            tipoAnimal,
            color,
            enfermedad
        };

        citas.push(newDate);

        fs.writeFile('citas.json', JSON.stringify(citas), (error)=>{
            if (error){
                console.error('Error al escribir en el archivo', error)
            } else {
                console.log('Cita agendada con éxito')
            }
        })
    });
}

const leer = ()=> {
    fs.readFile('./citas.json', 'utf-8', (error, data)=>{
        if (error){
            console.error('Error al leer el archivo en funcion Leer ',error)
            return;
        } 
        try{
            const citas = JSON.parse(data)
            console.log('Listado de citas agendadas')
            console.log(citas)
        } catch (parseError){
            console.error('Error al parsear el archivo JSON, en funcion Leer: ', parseError)
        }
    })
}


module.exports = {registrar, leer}