function validarSolicitudPedido(form){

    let validacion = true;
    const mensaje = form.mensaje;

    if(mensaje.value.length === 0 || isEmpty(mensaje.value)){
        Swal.fire({
            icon: 'error',
            text: 'Ingrese un mensaje',
        });
        //setErrorFor(mensaje,'Ingrese un mensaje');
        validacion = false;
    }/*else{
        setSuccessFor(mensaje);
    }*/

    return validacion;

}

/*function setErrorFor(input, message) {
    const campo = input.parentElement
    const small = campo.querySelector('small')
    campo.className = 'campo error'
    small.innerText = message
}

function setSuccessFor(input) {
    const campo = input.parentElement
    campo.className = 'campo success'
}*/

function isEmpty(texto){
    return /^\s+$/.test(texto);
}