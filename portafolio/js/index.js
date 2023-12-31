//funcion que oculta o muestra el menu
let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible= true;
    }
}
//funcion que oculta menu cuando se hace click en un elemento
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//funcion para darle el efecto de animacion a las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
     if(distancia_skills >=300){
        let habilidades = getElementByIdClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlscss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("react");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("equipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
     }
}
//Detectamos el scrolling de la pagina mediante el evento scroll
window.onscroll = function(){
    efectoHabilidades();
}