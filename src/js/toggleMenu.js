const showMenu = () => {
    var menu = document.querySelector(".menu");
    const ellipsis = document.querySelector(".fa-ellipsis-h");
    
    ellipsis.addEventListener("mousedown", function() {
        menu.classList.add("show");
    });
}

const hideMenu = () => {
    var menu = document.querySelector(".menu");
    const ellipsis1 = document.querySelector(".fa-times");

    ellipsis1.addEventListener("mousedown", function() {
        menu.classList.remove("show");
    });
}

export {
    showMenu,
    hideMenu
};