let menuHamburger = document.querySelector('#cardapio');

menuHamburger.addEventListener("click", function() {
    let menu = document.querySelector('.menu');
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});