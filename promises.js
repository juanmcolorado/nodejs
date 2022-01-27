  /**
 * Usando funciones asicronas de promesas (fsPromises)
 * 1. Crear un archivo hola.txt
 * 2. usar la funcion appendFile para agregar una segunda linea
 * 3. despues de 5 segundos eliminar el archivo (fs.unlink)
 */
/** 
// const fs = require('fs')
const fsPromises = require('fs/promises')

const file = 'promises_test.txt'

fsPromises.writeFile(file, 'Prueba de promesas', 'utf8')
    .then(() => {
        console.log('¡Documento creado en archivos!')
        fsPromises.appendFile(file, '\nSegunda linea insertada en promesas', 'utf8')
            .then(() => {
                console.log('Se inserto una segunda linea')
                setTimeout(() => {
                    fsPromises.unlink(file)
                        .then(() => {
                            console.log('¡Documento eliminado de archivos!')
                        })
                }, 5000)
            })
    })
    .catch(error => {
        console.error('Error:', error)
    })
*/
const file1 = 'promises1.txt'
async function writeFile () {
    await fsPromises.writeFile(file1, 'Prueba de promesas', 'utf8')
    await fsPromises.appendFile(file1, '\nSegunda linea insertada en promesas', 'utf8')
    setTimeout(() => {
        fsPromises.unlink(file1)    
    }, 5000)
}

writeFile()
    .then(() => {
        setTimeout(() => {
            console.log('Fin (Async Await)')
        }, 5000);
        
    })