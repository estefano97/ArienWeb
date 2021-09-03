export default function textAnimation() {
    gsap.to(".header-text",{
        delay: .25,
        duration: 1.5,
        x: "-100vw",
    })

    gsap.to(".navigation", {
        duration: .25,
        fontSize: "1.5rem",
    })

    gsap.to(".header-contacto",{
        delay: .25,
        duration: 1.5,
        x: "-100vw",
    })

    gsap.to(".header-paginas",{
        delay: .25,
        duration: 1.5,
        x: "-100vw",
    })
}
