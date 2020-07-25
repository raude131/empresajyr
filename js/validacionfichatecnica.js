const formulario = document.getElementById("formulario")
const composicion = document.getElementById("composicion")
const s = document.getElementById("S")


formulario.addEventListener('submit', e => {
    e.preventDefault()
    checkImputs()
});

function checkImputs() {
    const composicionValue = composicion.value.trim()
    const sValue = s.value.trim()
    const pechosValue = pechosValue.value.trim()
    if (composicionValue === '') {
        setErrorFor(composicion, "Por favor rellene el campo")
    }
    else {
        setSuccessFor(composicion)
    }

    if(sValue === ''){
        setTallaError(s)
    }else{
        setTallaSuccess(s)
    }

}

function setErrorFor(input, message) {
    const campo = input.parentElement
    const small = campo.querySelector('small')
    campo.className = 'campo error'
    small.innerText = message
}

function setSuccessFor(input) {
    const campo = input.parentElement
    campo.className = 'campo success'
}

function validarNumero(number) {
    return /^([0-9])*$/.test(number);

}

function setTallaError(input) {
    const talla = input.parentElement
    talla.className = 'talla error'
}

function setTallaSuccess(input) {
    const talla = input.parentElement
    talla.className = 'talla success'
}
