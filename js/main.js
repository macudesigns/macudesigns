$(document).ready(function () {
    // Activo la funcionalidad de carrusel con la libreria flickity
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
      });

      // --- INICIO: NUEVA LÓGICA PARA FILTRO DE PORTAFOLIO ---
      // Cache de los elementos para mejor rendimiento
      const $filters = $('#portfolio-filters a');
      const $galleryItems = $('#portfolio-gallery figure');

      // Mostrar todos los proyectos al inicio (ya no es necesario con el cambio de CSS)

      $filters.click(function (e) {
        e.preventDefault();

        // Manejar la clase activa en los botones
        $filters.removeClass("btn-active");
        $(this).addClass("btn-active");

        const filterValue = $(this).data('filter');

        if (filterValue === '*') {
            // Mostrar todos los items
            $galleryItems.fadeIn('fast');
        } else {
            // Ocultar los que no coinciden y mostrar los que sí
            $galleryItems.hide().filter(`[data-category="${filterValue}"]`).fadeIn('fast');
        }
      });
      // --- FIN: NUEVA LÓGICA PARA FILTRO DE PORTAFOLIO ---

});