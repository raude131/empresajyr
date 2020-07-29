const  bullets  =  [...document.querySelectorAll('.bullet')];
var estado="";
if(estado==="terminado"){
	bullets[0].classList.add('completed');
}else if(estado==="almacen"){
	bullets[0].classList.add('completed');
	bullets[1].classList.add('completed');
}else if(estado==="entregado"){
	bullets[0].classList.add('completed');
	bullets[1].classList.add('completed');
	bullets[2].classList.add('completed2');
}