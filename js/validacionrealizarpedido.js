const form = document.getElementById("form")
const cantidadprendas = document.getElementById("cantidadprendas")

form.addEventListener('submit', e => {
    e.preventDefault()
    checkImputs()
});

function checkImputs() {
    const cantidadprendasValue = cantidadprendas.value.trim()
    if (cantidadprendasValue === '') {
        setErrorFor(cantidadprendas, "Ingrese una cantidad")
    }else if(!validarNumero(cantidadprendasValue)){
        setErrorFor(cantidadprendas, "Ingrese un valor numérico")
    }
    else {
        setSuccessFor(cantidadprendas)
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