// Esto lo que hace es darle funcionalidad al menu mobil
$(document).ready(function () {
    // Abrir menu
    $("#btnMobil").click(function (e) { 
        // Mostrar Menu
        $("#menuMobi").toggleClass("display-on");
        // Ocultar Menu
    $("#menuMobi a").click(function (e) { 
        $("#menuMobi").removeClass("display-on");
        });
      });
    
    });
    
