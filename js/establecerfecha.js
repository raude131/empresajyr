
var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;       
document.getElementById("fecha").value = today;

function comparar() {
    var fecha_input = document.getElementById('fecha').value;
    var fecha_actual = new Date();
    var fechaActualString  = (fecha_actual.getMonth()+1).toString() + '-' 
    + fecha_actual.getDate().toString() + '-' + fecha_actual.getFullYear().toString();
    
    fecha_input = new Date(fecha_input);
    fecha_actual = new Date(fechaActualString);
    if(fecha_input < fecha_actual){
        Swal.fire({
            icon: 'error',
            text: 'Ingrese por favor una fecha mayor o igual a la actual',
        })

        document.getElementById("fecha").value = today;
    }
}