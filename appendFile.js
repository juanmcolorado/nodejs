const fs = require('fs')

function fantionFin(error){
    if (error){
        console.log('la data appenFile no se carga')
    return
    }
    console.log('la data appenFile se cargo bien')
}

fs.appendFile('message.txt', 'info del append', fantionFin)