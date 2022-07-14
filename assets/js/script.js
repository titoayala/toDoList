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
let idTarea = misTareas.length //Inicializo el contador así ya que el desafío exige 3 objetos pre-cargados!

function renderTodasLasTareas() {
    let html = ""
    for (let tarea of misTareas) {
        html += `<tr>
                    <th>${tarea.id}</th>
                    <td id="detalleTarea">${tarea.descripcion}</td>
                    <td class="miniBoton"><button type="button" class="btn btn-warning btn-sm" id="botonCambia"onclick="cambiaEstado(${tarea.id})"></button></td>
                    <td class="miniBoton"><button type="button" class="btn btn-danger btn-sm" onclick="borrar(${tarea.id})"><strong>X</strong></button></td>
                </tr>`
    }
    tablaTareas.innerHTML = html //Actualiza el HTML
    totalTareas.innerHTML = misTareas.length
    const tareaLista = true
    const tareasFiltradas = misTareas.filter((tarea) => tarea.completado === tareaLista);
    tareasRealizadas.innerHTML = tareasFiltradas.length
}

botonTarea.addEventListener("click", () => {
    const nuevaTarea = inputTarea.value //toma el texto ingresado
    if (nuevaTarea == "") { //Valida que el Input no esté vacío
        alert("Por favor agregar una tarea")
        return
    }
    idTarea++
    misTareas.push({ id: idTarea, descripcion: nuevaTarea }) //Se coloca el texto en el arreglo
    inputTarea.value = "" //Se vacía el cuadro INPUT
    renderTodasLasTareas()
})

function borrar(id) {
    console.log(id)
    const index = misTareas.findIndex(tarea => tarea.id == id)
    misTareas.splice(index, 1)
    renderTodasLasTareas()
}

function cambiaEstado(id) {
    let uno = document.getElementById('botonCambia')
    const index = misTareas.findIndex(tarea => tarea.id == id)
    console.log(index)
    console.log(uno)
    if (misTareas[index].completado == false){
        misTareas[index].completado = true
        uno.innerHTML = 'SI'
        renderTodasLasTareas()
    }else{
        misTareas[index].completado = false
        uno.innerHTML = 'NO'
    }
    renderTodasLasTareas()
}
renderTodasLasTareas()