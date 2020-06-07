//Requireds
const fileSystem = require('fs');
const colors = require('colors');

let listadoToDo = [];

//graba en la DB
const guardarDB = () => {
    let data = JSON.stringify(listadoToDo); //formatea a json valido

    fileSystem.writeFile('base-de-datos/data.json', data, (err) => {
        if (err) throw err;
    });

}

// carga la DB
const cargarDB = () => {

    try {

        listadoToDo = require('../base-de-datos/data.json');

    } catch (error) {
        listadoToDo = [];
    }

}


const crear = (descripcion) => {

    // carga la db antes del push
    cargarDB();

    let toDo = {
        descripcion,
        completado: false
    };

    listadoToDo.push(toDo);
    guardarDB()
    return toDo;
}

const getListado = () => {
    cargarDB();
    return listadoToDo;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoToDo.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoToDo[index].completado = completado;
        guardarDB()
        return true;
    } else {
        return false;
    }

}

const borrarTarea = (descripcion) => {

    cargarDB();

    let index = listadoToDo.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoToDo.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }


}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrarTarea
}