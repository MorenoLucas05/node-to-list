//Requireds
const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');

let comando = argv._[0];
//_[0] accede a la posicion 0 del array de comandos que nos propor ciona yargs


switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        // console.log(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':

        let listado = toDo.getListado();


        console.log('\n===Listado de Tareas==='.blue);
        for (const tarea of listado) {
            console.log('----------------------');
            console.log(`Tarea: ${tarea.descripcion}`.green);
            console.log(`Estado: ${tarea.completado}`.green);
            console.log('----------------------');
        }
        console.log('======================='.blue);


        break;
    case 'act':

        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);

        console.log(actualizado);

        break;

    case 'borrar':
        let tareaBorrada = toDo.borrarTarea(argv.descripcion);
        console.log(tareaBorrada);

        break;

    default:
        console.log('Comando Erroneo');
        break;
}