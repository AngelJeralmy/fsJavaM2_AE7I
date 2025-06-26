$("#modal").hide();

// De forma dinámica, haciendo clic en el contenedor padre de la cuadrícula, se accede especificamente al 'id' del elemento o imagen donde se cliceó, se envía la ruta al modal, y se muestra.
$("#cuadricula").click(function(event) {

    $('#window_img').attr("src", "");
    const enlace = $("#" + event.target.id).attr("src");
    $('#window_img').attr("src", enlace);
    $('#modal').show();
});


// De forma dinámica, haciendo clic en el contenedor padre de los botones, se accede especificamente al 'id' del elemento o botón donde se cliceó, sea "anterior", "cerrar" o "siguiente".
$("#botones").click(function(event){

    const enlace = $("#window_img").attr("src");
    const arreglo = $(".cuadricula_img");
    let enlaceActual = "";
    


    if(event.target.id === "anterior"){

        for (let index = 0; index < arreglo.length; index++) {
            if(index == 0 && arreglo[index].attributes[0].value == enlace)
                    enlaceActual = arreglo[arreglo.length - 1].attributes[0].value;
            if(index != 0 && arreglo[index].attributes[0].value == enlace)
                    enlaceActual = arreglo[index - 1].attributes[0].value;
            } 
        $('#window_img').attr("src", enlaceActual);      
        }
    
    
    
    if(event.target.id === "siguiente"){

        for (let index = 0; index < arreglo.length; index++) {
            if((index === arreglo.length - 1) && (arreglo[index].attributes[0].value === enlace))
                    enlaceActual = arreglo[0].attributes[0].value;
            if((index != arreglo.length - 1) && arreglo[index].attributes[0].value == enlace)
                    enlaceActual = arreglo[index + 1].attributes[0].value;
            } 
        $('#window_img').attr("src", enlaceActual);      
        }

    if(event.target.id === "cerrar"){
        $('#modal').fadeOut();
    } 

});


// Al hacer clic en el elemento con id 'padre', se accede al id especifico de la posición donde se cliceó(event.target.id) y, si este es id "padre", se oculta suavemente. En caso que "event.target.id" corresponda a alguna imagen o botón, no se ocultará.
$("#padre").click(function(event) {

     if(event.target.id === "padre"){
        $('#modal').fadeOut();
    }
});
