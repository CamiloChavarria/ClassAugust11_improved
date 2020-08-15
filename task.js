//  Brayan Camilo Chavarría Rivera (Grupo-2)

var TaskModel  = function(title, description, created_at, url_image){
    this.id = TaskModel.tasks.length + 1;
    this.title = title;
    this.description = description;
    this.created_at = created_at;
    this.url_image = url_image;
}

TaskModel.prototype.toString = () => {
    return "id: " + this.id + " | Title: " + this.title;
}

TaskModel.tasks = [];

TaskModel.add = (task) => {
    TaskModel.tasks.push(task);
    return true;
}

TaskModel.findAll = () => {
    return TaskModel.tasks
}

TaskModel.findById = (id) => {
    /* Código */
    for (let index = 0; index < TaskModel.tasks.length; index++) {
        const task = TaskModel.tasks[index];
        if(task.id == id){
            return task;
        }
    }

    return [];

    // return TaskModel.tasks.find(task => task.id == id);

}

TaskModel.deleteById = (id) => {
    /* Código */
    cantidadArreglo = TaskModel.tasks.length;
    if (cantidadArreglo === 0){
        return "¿Qué mas quieres eliminar amigo?\n\n¡Ni Thanos era tan sádico!";
    }
    else{

    let pos = TaskModel.tasks.findIndex(task => task.id == id);
        if(pos >= 0){
            /* Eliminar */
            TaskModel.tasks.splice(pos,1);

            for (let index = 0; index < TaskModel.tasks.length; index++) {
                const task = TaskModel.tasks[index];
                if(task.id != id){
                    return "Tarea con el id-> "+ id +"\n**** ELIMINADA ****";
                }
                return "Error al eliminar";
            }
        }
    return "Tarea no existente.";
    }
}

TaskModel.createN = (title,description) => {

    let cantidadArreglo = TaskModel.tasks.length
    idNew = cantidadArreglo + 1;
    
    let tasknew = new TaskModel(title, description, new Date(), 'https://picsum.photos/200/300.jpg');
    //let tasknew = new TaskModel(`Titulo ${title}` , `Descripción ${description}` , new Date(), 'https://picsum.photos/200/300.jpg');
    TaskModel.tasks.push(tasknew);
    //TaskModel.add(tasknew);    <- También sirve para agregar (En la ultima posición) 
    
    //Retorno de la vista de l NUEVA tarea
    for (let index = 0; index < TaskModel.tasks.length; index++) {
        const task = TaskModel.tasks[index];
        if(task.id == idNew){
            return task;
        }
    }
    return "Error al agregar la tarea";
}



// Llenando el arreglo apra empezar el modelo CON DATOS
let task1 = new TaskModel('Titulo1', 'Descripción1', new Date(), 'https://picsum.photos/200/300.jpg');
TaskModel.add(task1);

let task2 = new TaskModel('Titulo2', 'Descripción2', new Date(), 'https://picsum.photos/200/300.jpg');
TaskModel.add(task2);

let task3 = new TaskModel('Titulo3', 'Descripción3', new Date(), 'https://picsum.photos/200/300.jpg');
TaskModel.add(task3);

let task4 = new TaskModel('Titulo4', 'Descripción4', new Date(), 'https://picsum.photos/200/300.jpg');
TaskModel.add(task4);


module.exports = TaskModel