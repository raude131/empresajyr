const formulario = document.getElementById("formulario")
const nombre = document.getElementById("nombre")
const primerapellido = document.getElementById("primerapellido")
const segundoapellido = document.getElementById("segundoapellido")
const contraseña = document.getElementById("contraseña")
const cargo = document.getElementById("cargo")
const correo = document.getElementById("correo")
const direccion = document.getElementById("direccion")
const empresa = document.getElementById("empresa")
const ruc = document.getElementById("ruc")
const dni = document.getElementById("dni")
const telefono = document.getElementById("telefono")
const celular = document.getElementById("celular")

formulario.addEventListener('submit', e =>{
    e.preventDefault()
    checkImputs()
});

function checkImputs(){
    const nombreValue = nombre.value.trim()
    const primerapellidoValue = primerapellido.value.trim()
    const segundoapellidoValue = segundoapellido.value.trim()
    const contraseñaValue = contraseña.value.trim()
    const cargoValue = cargo.value.trim()
    const correoValue = correo.value.trim()
    const direccionValue = direccion.value.trim()
    const empresaValue = empresa.value.trim()
    const rucValue = ruc.value.trim()
    const dniValue = dni.value.trim()
    const telefonoValue =  telefono.value.trim()
    const celularValue = celular.value.trim()

    if(nombreValue === ''){
        setErrorFor(nombre, 'Ingrese su nombre')
    }else{
        setSuccessFor(nombre)
    }

    if(primerapellidoValue === ''){
        setErrorFor(primerapellido, "Ingrese su apellido")
    }else{
        setSuccessFor(primerapellido)
    }

    if(segundoapellidoValue === ''){
        setErrorFor(segundoapellido, "Ingrese su apellido")
    }else{
        setSuccessFor(segundoapellido)
    }

    if(contraseñaValue === ''){
        setErrorFor(contraseña, "Ingrese su contraseña")
    }else{
        setSuccessFor(contraseña)
    }

    if(cargoValue === ''){
        setErrorFor(cargo, "Ingrese su cargo")
    }else{
        setSuccessFor(cargo)
    }

    if(correoValue === ''){
        setErrorFor(correo, "Ingrese su correo")
    }else if(!isEmail(correoValue)){
        setErrorFor(correo, "No ingresó un correo válido")
    }else{
        setSuccessFor(correo)
    }

    if(direccionValue === ''){
        setErrorFor(direccion, "Ingrese su dirección")
    }else{
        setSuccessFor(direccion)
    }
    if(empresaValue === ''){
        setErrorFor(empresa, "Ingrese su dirección")
    }else{
        setSuccessFor(empresa)
    }

    if(rucValue === ''){
        setErrorFor(ruc, "Ingrese su RUC")
    }else if(!validarNumero(rucValue)){
        setErrorFor(ruc, "Ingrese un valor numérico")
    }else if(ruc.value.length!=11){
        setErrorFor(ruc, "Ingrese un RUC válido")
    }
    else{
        setSuccessFor(ruc)
    }

    if(dniValue === ''){
        setErrorFor(dni, "Ingrese su DNI")
    }else if(!validarNumero(dniValue)){
        setErrorFor(dni, "Ingrese un valor numérico")
    }else if(dni.value.length!=8){
        setErrorFor(dni, "Ingrese un DNI válido")
    }
    else{
        setSuccessFor(dni)
    }

    if(telefonoValue === ''){
        setErrorFor(telefono, "Ingrese su teléfono")
    }else if(!validarNumero(telefonoValue)){
        setErrorFor(telefono, "Ingrese un valor numérico")
    }else if(telefono.value.length!=6){
        setErrorFor(telefono, "Ingrese un teléfono válido")
    }
    else{
        setSuccessFor(telefono)
    }

    if(celularValue === ''){
        setErrorFor(celular, "Ingrese su celular")
    }else if(!validarNumero(celularValue)){
        setErrorFor(celular, "Ingrese un valor numérico")
    }else if(celular.value.length!=9){
        setErrorFor(celular, "Ingrese un celular válido")
    }
    else{
        setSuccessFor(celular)
    }
}

function setErrorFor(input, message){
    const campo = input.parentElement
    const small = campo.querySelector('small')
    campo.className = 'campo error'
    small.innerText = message
}

function setSuccessFor(input){
    const formControl = input.parentElement
    formControl.className = 'campo success'
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function validarNumero(number){
    return /^([0-9])*$/.test(number);

}
