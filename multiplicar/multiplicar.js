const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            let resultado = i * base;
            data += `${base} * ${i} = ${resultado}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);

            resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
}

let listarTabla = (base, limite) => {

    console.log('==================================='.green);
    console.log(`=========== Tabla de ${base} ===========`.green);
    console.log('==================================='.green);
    for (let i = 1; i <= limite; i++) {
        let resultado = i * base;
        console.log(`${base} * ${i} = ${resultado}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}