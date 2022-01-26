//write

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