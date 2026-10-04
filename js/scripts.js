// Archivo de scripts personalizados con jQuery

$(document).ready(function() {
    console.log("El DOM está listo y jQuery funcionando.");
    
    // Lógica para cargar el video en el modal dinámicamente
    $('.btn-video').on('click', function() {
        // 1. Obtenemos la URL del video desde el atributo 'data-video' del botón clickeado
        let videoUrl = $(this).data('video');
        
        // 2. Le asignamos esa URL al atributo 'src' del iframe dentro del modal
        $('#videoIframe').attr('src', videoUrl);
    });

    // Lógica para detener el video cuando se cierra el modal
    $('#videoModal').on('hidden.bs.modal', function () {
        // Vaciamos el 'src'. Si no hacemos esto, el video de YouTube 
        // se sigue reproduciendo (y escuchando) en segundo plano.
        $('#videoIframe').attr('src', '');
    });
});
