const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

if (menuButton && menu) {

    menuButton.addEventListener("click", () => {
        menu.classList.toggle("open");

        const isOpen = menu.classList.contains("open");

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Fermer le menu" : "Ouvrir le menu"
        );

        menuButton.textContent = isOpen ? "×" : "☰";
    });

    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("open");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Ouvrir le menu");
        });
    });
}
