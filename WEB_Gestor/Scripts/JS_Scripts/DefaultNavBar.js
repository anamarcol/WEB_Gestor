jQuery(function () {
    // Cargar NavBar y SideBar dinámicamente
    $("#sidebar").load("../Pages/sidebar.html", function () {
        console.log("sidebar cargado correctamente.");
    });

    $("#navbar").load("../Pages/navbar.html", function () {
        console.log("navbar cargado correctamente.");
    
    });
});

