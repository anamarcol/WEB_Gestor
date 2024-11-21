jQuery(function () {
    // Cargar NavBar y SideBar dinámicamente
    $("#sidebar").load("../Pages/EmpSidebar.html", function () {
        console.log("sidebar cargado correctamente.");
    });

    $("#navbar").load("../Pages/EmpNavbar.html", function () {
        console.log("navbar cargado correctamente.");    
    });

    $(document).on('click', '#cerrarSesion', function () {
        toggleOut();
    });
});

function toggleOut(){    
    var signout = document.getElementById('signOut');
    signout.classList.toggle('active');
}