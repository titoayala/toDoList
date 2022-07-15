//VARIABLES GLOBALES DE POSICIONAMIENTO EN EL HTML
const inputTarea = document.querySelector("#tareaInput")
const botonTarea = document.querySelector("#agregaTarea")
const tablaTareas = document.querySelector("#tareas")
const totalTareas = document.querySelector("#totalTareas")
const tareasRealizadas = document.querySelector("#tareasRealizadas")

//ARREGLO DE OBJETOS
const misTareas = [
    { id: 1, descripcion: "Maquetar la página", completado: false },
    { id: 2, descripcion: "Agregar el JavaScript", completado: false },
    { id: 3, descripcion: "Entregar el desafío", completado: false }
]
let idTarea = misTareas.length //Inicializo el contador así ya que el desafío exige objetos pre-cargados!

//PARA CARGA INICIAL
function renderTodasLasTareas() {
    let html = ""
    for (let tarea of misTareas) {
        if (tarea.completado == false) {
            html += `<tr>
                        <th>${tarea.id}</th>
                        <td>${tarea.descripcion}</td>
                        <td class="miniBoton"><button type="button" class="btn btn-warning btn-sm" onclick="cambiaEstado(${tarea.id})"><strong>NO</strong></button></td>
                        <td class="miniBoton"><button type="button" class="btn btn-danger btn-sm" onclick="borrar(${tarea.id})"><strong>X</strong></button></td>
                    </tr>`
                    
        } else {
            html += `<tr>
                        <th>${tarea.id}</th>
                        <td style="text-decoration: line-through">${tarea.descripcion}</td>
                        <td class="miniBoton"><button type="button" class="btn btn-success btn-sm" onclick="cambiaEstado(${tarea.id})"><strong>SI</strong></button></td>
                        <td class="miniBoton"><button type="button" class="btn btn-danger btn-sm" onclick="borrar(${tarea.id})"><strong>X</strong></button></td>
                    </tr>`       
        }
    }
    tablaTareas.innerHTML = html //Actualiza el HTML
    totalTareas.innerHTML = misTareas.length
    filtroRealizadas()
}

//PARA AGREGAR NUEVA TAREA AL ARREGLO
botonTarea.addEventListener("click", () => {
    const nuevaTarea = inputTarea.value //toma el texto ingresado
    if (nuevaTarea == "") { //Valida que el Input no esté vacío
        alert("Por favor agregar una tarea")
        return
    }
    idTarea++
    misTareas.push({ id: idTarea, descripcion: nuevaTarea, completado: false }) //Se coloca el objeto en el arreglo
    inputTarea.value = "" //Se vacía el cuadro INPUT
    renderTodasLasTareas()
})

//PARA BORRAR LA TAREA
function borrar(id) {
    console.log(id)
    const index = misTareas.findIndex(tarea => tarea.id == id)
    misTareas.splice(index, 1)
    renderTodasLasTareas()
}

//PARA FILTRAR CONTENIDO Y MOSTRAR TAREAS REALIZADAS
function filtroRealizadas() {
    const tareaLista = true
    const tareasFiltradas = misTareas.filter((tarea) => tarea.completado === tareaLista);
    tareasRealizadas.innerHTML = tareasFiltradas.length
}

//PARA CAMBIAR ESTADO DE OBJETO Y ACTUALIZAR VISUALMENTE LA INTERFAZ
function cambiaEstado(id) { //se recibe el ID de la tarea desde el botón de llamado
    console.log(id)
    const index = misTareas.findIndex(tarea => tarea.id == id) //Se busca el índice correspondiente al ID recibido
    misTareas[index].completado = !misTareas[index].completado //ESTA LINEA ERA LA QUE ME FALTABA!!! se asigna el valor booleano contrario a la propiedad COMPLETADO del ID recibido
    renderTodasLasTareas()
}

//LLAMADO A CARGA INICIAL
renderTodasLasTareas()