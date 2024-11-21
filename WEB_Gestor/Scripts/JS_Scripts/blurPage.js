function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup = document.getElementById('popUp');
    popup.classList.toggle('active');
}

// BOTÓN REGRESAR
function goBack() {
    var blur = document.getElementById('blur');
    blur.classList.remove('active');

    var popup = document.getElementById('popUp');
    popup.classList.remove('active');
}

function addProduct() {
    Swal.fire({
        title: "¡Felicidades! Agregaste un producto nuevo.",
        imageUrl: "../imagenesGestor/Felicidades.png",
        imageWidth: 287,
        imageHeight: 299,
        imageAlt: "Felicidades"
    });
}

function downloadPDF() {
    var months = document.getElementById('monthsReports');
    months.classList.toggle('active');
}

function successDownload() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "La descarga ha sido exitosa",
        showConfirmButton: false,
        timer: 1500
    });
}


function addEmployee() {
    Swal.fire({
        title: "¡Felicidades! Agregaste un empleado nuevo.",
        imageUrl: "../imagenesGestor/Felicidades.png",
        imageWidth: 287,
        imageHeight: 299,
        imageAlt: "Felicidades"
    });
}

function successSale() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "La venta se ha realizado exitosamente.",
        showConfirmButton: false,
        timer: 1500
    });
}