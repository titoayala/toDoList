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
        html += `<tr>
                    <th>${tarea.id}</th>
                    <td id="detalleTarea">${tarea.descripcion}</td>
                    <td class="miniBoton"><button type="button" class="btn btn-warning btn-sm" id="botonCambia"onclick="cambiaEstado(${tarea.id})"><strong>NO</strong></button></td>
                    <td class="miniBoton"><button type="button" class="btn btn-danger btn-sm" onclick="borrar(${tarea.id})"><strong>X</strong></button></td>
                </tr>`
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
    misTareas.push({ id: idTarea, descripcion: nuevaTarea, completado: false}) //Se coloca el objeto en el arreglo
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
function filtroRealizadas(){
    const tareaLista = true
    const tareasFiltradas = misTareas.filter((tarea) => tarea.completado === tareaLista);
    tareasRealizadas.innerHTML = tareasFiltradas.length
}

//PARA CAMBIAR ESTADO DE OBJETO Y ACTUALIZAR VISUALMENTE LA INTERFAZ
function cambiaEstado(id) {
    console.log(id)
    let cambio = document.getElementById('botonCambia')
    let detalleTarea = document.querySelector("#detalleTarea")
    const index = misTareas.findIndex(tarea => tarea.id == id)
    if (misTareas[index].completado == false){
        misTareas[index].completado = true
        cambio.innerHTML = `<strong>SI</strong>`
        cambio.classList.remove('btn-warning')
        cambio.classList.add('btn-success')
        detalleTarea.style.textDecoration = "line-through"
    }else{
        misTareas[index].completado = false
        cambio.innerHTML = `<strong>NO</strong>`
        cambio.classList.remove('btn-success')
        cambio.classList.add('btn-warning')
        detalleTarea.style.textDecoration = "none"
    }
    filtroRealizadas()
}

//LLAMADO A CARGA INICIAL
renderTodasLasTareas()