
function comparar() {
    var fecha_input = document.getElementById('fecha').value;
    var f = new Date();
    var mes = (f.getMonth() + 1).toString();
    if (mes.length <= 1) {
        mes = "0" + mes;
    }
    var dia = f.getDate().toString();
    if (dia.length <= 1) {
        dia = "0" + dia;
    }

    fecha_actual = f.getFullYear() + "-" + mes + "-" + dia;
    if (fecha_input < fecha_actual) {
        Swal.fire({
            icon: 'error',
            text: 'Ingrese por favor una fecha mayor o igual a la actual',
          })
    }

}