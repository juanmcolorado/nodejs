 
const fs = require('fs')

//es importante el orden
function atTheEnd(error){
    if (error){
        console.log('Hola el archivo no esta escrito hubo un error', error)
        return
    }

    console.log('Hola el archivo esta escrito')
}

fs.writeFile('Hola.txt', 'Hola a todos\ndesde el nuevo archivo', 'utf-8', atTheEnd)

// con error
//fs.writeFile('folder/Hola.txt', 'Hola a todos\ndesde el nuevo archivo', 'utf-8', atTheEnd)
//
// falsy
//
//son aquellos valores que cuando evaluamos una pregunta logica sobre ellos, aplican a falso
//
//false 
//0
//''
//null
//undefined
//NaN

//thruhy
//representan un valor
//1
//'jnhbvftcxrsxd'
//[]
//{}
/** 
if (1){
    console.log('es thruthy')
}
*/
