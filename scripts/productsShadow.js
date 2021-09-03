export default function productsShadow() {

document.addEventListener("mouseover", e => {
if(e.target.matches(".products > section"))  {
    e.target.classList.add("transition1")
    e.target.classList.add("productsShadow")
}
        
if(e.target.matches(".products > section > *")) {
    e.path[1].classList.add("transition1")
    e.path[1].classList.add("productsShadow")
}

if(e.target.matches(".products > section > * > *")) {
    e.path[2].classList.add("transition1")
    e.path[2].classList.add("productsShadow")
}

if(e.target.matches(".products > section > * > * > *")) {
    e.path[3].classList.add("transition1")
    e.path[3].classList.add("productsShadow")
}
})

document.addEventListener("mouseout", e => {
if(e.target.matches(".products > section"))  {
    e.target.classList.remove("productsShadow")
}
        
if(e.target.matches(".products > section > *")) {
    e.path[1].classList.remove("productsShadow")
}

if(e.target.matches(".products > section > * > *")) {
    e.path[2].classList.remove("productsShadow")
}

if(e.target.matches(".products > section > * > * >*")) {
    e.path[3].classList.remove("productsShadow")
}
})
}