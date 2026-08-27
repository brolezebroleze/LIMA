const cardsConteudo = document.querySelectorAll(".conteudo");

window.addEventListener("mousemove", (evento) => {
  cardsConteudo.forEach((conteudo) => {
    const hobby = conteudo.parentElement;
    const luz = hobby.querySelector(".luz");
    if (!luz) return;

    const posicaocard = hobby.getBoundingClientRect();

    const mouseX = evento.clientX - posicaocard.left;
    const mouseY = evento.clientY - posicaocard.top;

    luz.style.opacity = 1;
    luz.style.transform = `translate(${mouseX - 100}px, ${mouseY - 100}px)`;
  });
});