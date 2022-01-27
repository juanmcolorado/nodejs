/**
 * //write

const fs = require('fs')

function atTheEnd(error){
    if (error){
        console.log('Hola el archivo no esta escrito hubo un error', error)
        return
    }

    console.log('Hola el archivo esta escrito')
}

fs.writeFile('Hola.txt', 'Hola a todos desde el nuevo archivo', 'utf-8', atTheEnd)


//read file

fs.readFile('Hola.txt', 'utf8', (err, data)=>{
    if(err){
        console.error(err)
    return
    }
    console.log(data)
})

//appendFile

function fantionFin(error){
    if (error){
        console.log('la data appenFile no se carga')
    return
    }
    console.log('la data appenFile se cargo bien')
}

fs.appendFile('Hola.txt', '\nlinea insertada dentro de hola Koders.\nSaludos.', fantionFin)

//read file

fs.readFile('Hola.txt', 'utf8', (err, data)=>{
    if(err){
        console.error(err)
    return
    }
    console.log(data)
})

//inlink

function erase(err){
    if (err){
        console.log('Error al borrar archivo')
    return
    }
    console.log('Archivo borrado exitosamente')
}

fs.unlink('Hola.txt', erase)
*/

const fs = require('fs')
/**
 * 1- crear un archivo
 * 2- agregar una segunda linea
 * 3- despues de 5 segundos se borra el archivo
 
const filePath = 'voy-a-morir-js'

// paso 1
fs.writeFile(filePath, 'Hola! no me queda mucho tiempo', 'utf8', (error) => {
  if(error) {
    console.error('No se pudo crear el archivo')
    return
  }

  // paso 2
  fs.appendFile(filePath, 'Tengo algo importante que decirte...', (error) => {
    if (error) {
      console.error('No se pudo Agregar al archivo')
      return
    }

    // paso 3
    setTimeout(() => {
      fs.unlink(filePath, (error) => {
        if (error) {
          console.error('No se pudo borrar');
          return
        }
        console.log('Adios popo')
      })
    }, 5000)

  })

})
*/


const filePath = 'voy-a-morir-js-promises'

// paso 1
fs.writeFile(filePath, 'Hola! no me queda mucho tiempo', 'utf8', (error) => {
  if(error) {
    console.error('No se pudo crear el archivo')
    return
  }

  import { writeFile } from 'fs/promises';
import { Buffer } from 'buffer';

try {
  const controller = new AbortController();
  const { signal } = controller;
  const data = new Uint8Array(Buffer.from('Hello Koders'));
  const promise = writeFile('hola.txt', data, { signal });

  // Abort the request before the promise settles.
  controller.abort();

  await promise;
} catch (err) {
  // When a request is aborted - err is an AbortError
  console.error(err);
}
  // paso 2
  fs.appendFile(filePath, 'Tengo algo importante que decirte...', (error) => {
    if (error) {
      console.error('No se pudo Agregar al archivo')
      return
    }

    // paso 3
    setTimeout(() => {
      fs.unlink(filePath, (error) => {
        if (error) {
          console.error('No se pudo borrar');
          return
        }
        console.log('Adios popo')
      })
    }, 5000)

  })

})
