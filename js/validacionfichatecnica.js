const formulario = document.getElementById("formulario")
const composicion = document.getElementById("composicion")

formulario.addEventListener('submit', e => {
    e.preventDefault()
    checkImputs()
});

function checkImputs() {
    const composicionValue = composicion.value.trim()
    if (composicionValue === '') {
        setErrorFor(composicion, "Por favor rellene el campo")
    }
    else {
        setSuccessFor(composicion)
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