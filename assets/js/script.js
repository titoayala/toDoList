//VARIABLES GLOBALES DE POSICIONAMIENTO EN EL HTML
const inputTarea = document.querySelector("#tareaInput")
const botonTarea = document.querySelector("#agregaTarea")
const tablaTareas = document.querySelector("#tareas")
const totalTareas = document.querySelector("#totalTareas")
const tareasRealizadas = document.querySelector("#tareasRealizadas")

//ARREGLO DE OBJETOS
const misTareas = [
    { id: 1, descripcion: "Maquetar la página" },
    { id: 2, descripcion: "Agregar el JavaScript" },
    { id: 3, descripcion: "Entregar el desafío" }
]
let idTarea = misTareas.length

function renderTodasLasTareas() {
    let html = ""
    for (let tarea of misTareas) {
        html += `<tr>
                    <th>${tarea.id}</th>
                    <td>${tarea.descripcion}</td>
                    <td>NO</td>
                    <td><button type="button" class="btn btn-danger btn-sm" onclick="borrar(${tarea.id})"> x </button></li></td>
                </tr>` 
    }
    tablaTareas.innerHTML = html //Actualiza el HTML
    totalTareas.innerHTML = misTareas.length
}

botonTarea.addEventListener("click", () => {
    const nuevaTarea = inputTarea.value //toma el texto ingresado
    idTarea++
    misTareas.push({ id: idTarea, descripcion: nuevaTarea }) //Se coloca el texto en el arreglo
    inputTarea.value = "" //Se vacía el cuadro INPUT
    renderTodasLasTareas()
})

function borrar(id) {
    console.log(id)
    const index = misTareas.findIndex(x => x.id == id)
    misTareas.splice(index, 1)
    renderTodasLasTareas()
}
renderTodasLasTareas()
