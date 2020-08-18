function accion(){
    console.log("diste un click")
    var menu = document.getElementsByClassName('navbar-inicio')
    for (var i = 0; i < menu.length; i++){
        menu[i].classList.toggle('ocultarmenu');
    }
}