/**
 * Llenar una tabla de manera dinámica usando datos obtenidos de un servicio.
 * @param {string} URLServicio - URL del servicio que retorna los datos en formato JSON.
 * @param {string} TablaLlenar - Selector de la tabla (ej. '#tblEmpleados').
 * @param {Array} Campos - Lista de campos que se mostrarán en la tabla (ej. ['Codigo', 'Nombre', 'Cargo']).
 * @param {Array} Acciones - Lista de acciones con formato [{ nombre: 'Editar', icono: 'fa-edit', funcion: 'editarEmpleado' }, {...}].
 */

async function LlenarTablaGeneral(URLServicio, TablaLlenar, Campos, Acciones) {
    try {
        // Llamar al servicio para obtener los datos
        const Respuesta = await fetch(URLServicio, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const Datos = await Respuesta.json();

        // Agregar acciones personalizadas a los datos
        const DatosConAcciones = Datos.map(row => {
            let accionesHTML = Acciones.map(accion => {
                return `
                    <button class="btnAccion" onclick="${accion.funcion}('${row[Campos[0]]}')">
                        <i class="fa-solid ${accion.icono}"></i> ${accion.nombre}
                    </button>
                `;
            }).join('');
            return { ...row, Acciones: accionesHTML };
        });

        // Configurar las columnas dinámicamente
        const Columnas = Campos.map(campo => ({
            data: campo,
            title: campo
        }));

        // Agregar columna de Acciones
        Columnas.push({
            data: "Acciones",
            title: "Acciones",
            orderable: false,
            searchable: false
        });

        // Renderizar la tabla con DataTables
        $(TablaLlenar).DataTable({
            data: DatosConAcciones,
            columns: Columnas,
            destroy: true // Permitir reinicializar la tabla si ya existe
        });
    } catch (error) {
        // Mostrar mensaje de error
        console.error("Error llenando la tabla:", error);
        $("#dvMensaje").html("Error llenando la tabla: " + error.message);
    }
}

/**
 * Ejemplo de uso para empleados.
 */
function cargarTablaEmpleados() {
    const URLServicio = "https://example.com/api/empleados"; // Cambia por tu URL
    const TablaLlenar = "#tblEmpleados";
    const Campos = ["Codigo", "Nombre", "Cargo", "Área", "Disponibilidad"];
    const Acciones = [
        { nombre: "Editar", icono: "fa-edit", funcion: "editarEmpleado" },
        { nombre: "Eliminar", icono: "fa-trash", funcion: "eliminarEmpleado" }
    ];

    LlenarTablaGeneral(URLServicio, TablaLlenar, Campos, Acciones);
}

// Ejemplo de funciones de acción
function editarEmpleado(codigo) {
    alert(`Editar empleado con código: ${codigo}`);
}

function eliminarEmpleado(codigo) {
    if (confirm(`¿Estás seguro de que deseas eliminar al empleado con código: ${codigo}?`)) {
        alert(`Empleado con código ${codigo} eliminado`);
    }
}