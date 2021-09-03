export default function navbar() {
const $header = document.querySelector("header");
const $textsHeaders = document.querySelectorAll(".navigation a");
const $foco = document.querySelector(".foco");
const $headerText = document.querySelector(".header-arien p")

if(scrollY > 80 && innerWidth > 480){
    $header.style.backgroundColor = "white";
    $headerText.style.color = "#292F33";
    $header.style.boxShadow = "#292F33 1px 1px 10px";
    $textsHeaders.forEach(el => {
        if(el.textContent === $foco.textContent) return;
        el.style.color = "#292F33";
    });
} else if (scrollY < 80 && innerWidth > 480){
    $header.style.backgroundColor = "transparent";
    $headerText.style.color = "white";
    $header.style.boxShadow = "none";
    $textsHeaders.forEach(el => {
    if(el.textContent === $foco.textContent) return;
        el.style.color = "white";
    });
}
if (innerWidth < 480) $header.classList.add("despegable");


}