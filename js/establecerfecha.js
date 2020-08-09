
//const allinputs2  = document.querySelectorAll("input");
var allinputs;

function comparar(id) {
    //var fecha_input = document.getElementById(id).value;
    /*var fecha_produccion = allinputs[id].value;
    alert(fecha_produccion);*/
   
    var fecha = id.value;
    var myLength = allinputs.length;
    var input;
    for (var i = 0; i < myLength; ++i) {
        input = allinputs[i];
        //input.setAttribute("value", today);
        alert(input.value);
      }

   /* var fecha_actual = new Date();
    var fechaActualString  = (fecha_actual.getMonth()+1).toString() + '-' 
    + fecha_actual.getDate().toString() + '-' + fecha_actual.getFullYear().toString();
    
    fecha_input = new Date(fecha_input);
    fecha_actual = new Date(fechaActualString);
    if(fecha_input < fecha_actual){
        Swal.fire({
            icon: 'error',
            text: 'Ingrese por favor una fecha mayor o igual a la actual',
        })

        document.getElementById(id).value = today;
    }*/
}

function validar(){
    allinputs  = document.querySelectorAll("input");
    //alert(allinputs);
    var input;
    var myLength = allinputs.length;
    for (var i = 0; i < myLength; ++i) {
        input = allinputs[i];
        //input.setAttribute("value", today);
        
      }

     this.comparar(input)
}