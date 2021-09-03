export default function contactForm () {
    const d = document,
    $form = d.querySelector(".contact-form"),
    $input = d.querySelectorAll(".contact-form [required]");

    const $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response"),
    $textResponse = d.querySelector(".contact-form-response p");


    d.addEventListener("submit", async e => {
    e.preventDefault();
    $loader.classList.remove("none");
    try {
    let res = await fetch("https://formsubmit.co/ajax/kaliestefano@gmail.com", {
        method: "POST",
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            nombre: $form.name.value,
            email: $form.email.value,
            asunto: $form.asunto.value,
            comentarios: $form.coments.value
        })
    })
    $loader.classList.add("none");
    let success = await res.json();
    if(success.success === "false") throw success.message;

    $response.classList.remove("none");
    setTimeout(() => $response.classList.add("none") ,4000) 
    $textResponse.textContent = success.message && "Correo Enviado Exitosamente!";
    $form.reset();

    } catch (err) {
    let message = err || "Ocurrio Un Error";
    $textResponse.textContent = `Error: "${message}"`;
    $response.classList.remove("none");
    setTimeout(() => $response.classList.add("none") ,4000);
    }
    })
}