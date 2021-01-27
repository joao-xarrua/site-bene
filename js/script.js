// funcao para mudar a barra de navegação ao descer a página
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("change-header", window.scrollY > 0);
})