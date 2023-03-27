const menu= document.getElementById("menu");
const nav= document.getElementById("nav");
const cerrar= document.getElementById("cerrar")


let mostrar = function(){

 nav.style.display="block"
}


let ocultar =function() {
nav.style.display="none"
}
menu.onmouseover= mostrar;
cerrar.onclick=ocultar;
/*
function mostrar(elemento) {
    elemento.style.display="block"    
}
function esconder(elemento) {
    elemento.style.display="none"
    
}*/
