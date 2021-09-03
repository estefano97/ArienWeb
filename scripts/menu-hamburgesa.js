

export default function hamburgerMenu() {

document.addEventListener("click", (e) => {
const $Hamburgesa = document.querySelector(".hamburger"),
$menuDespegable = document.querySelector(".despegable");
    
//Esto activa el menu, y hace que se desaparezca el menu al tenerlo sin la clase "is-active"
if(e.target.matches(".hamburger *")){
    $Hamburgesa.classList.toggle("is-active");
    $menuDespegable.style.setProperty("margin-left","200vh");
    $menuDespegable.style.setProperty("transition",".5s");
}
//Esto hace que el menu se despliege al tener activo el boton
if(e.target.matches(".is-active *")){
    $menuDespegable.style.setProperty("margin-left","0vh");
}
//Esto Hace Que Al Dar Click En Una Section Del Menu, Este Desaparezca
if(window.innerWidth < 1024) {
    if(e.target.matches(".despegable-section a")){
    $menuDespegable.style.setProperty("margin-left","200vh");
    $Hamburgesa.classList.toggle("is-active");
    }}
})

}



















