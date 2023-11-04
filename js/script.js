
function getVisible() {

    const menu = document.querySelector("div#menu");

    if(menu.classList.contains("visibilidade")) {
        menu.classList.remove("visibilidade");
    } else {
        menu.classList.add("visibilidade");
    }

}