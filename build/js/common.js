/*
 * Third party
 */
(function() {

    var button = document.querySelector(".MiniNavButton__trigger");
    var list_button = document.querySelector(".MiniNavButton__list");
    var miniIcon = document.querySelector(".MiniNavButton__icon");






    button.onclick = function (e) {
        e.preventDefault()
        if (list_button.classList.contains("MiniNavButton__list_is-visible") === true) {
            this.classList.remove("MiniNavButton__trigger_menu-is-open");
            list_button.classList.remove("MiniNavButton__list_is-visible");
            miniIcon.classList.remove("MiniNavButton__icon_is-visible");
        }
        else {
            this.classList.add("MiniNavButton__trigger_menu-is-open");
            list_button.classList.add("MiniNavButton__list_is-visible") ;
            miniIcon.classList.add("MiniNavButton__icon_is-visible");
            window.addEventListener('click', remove);
        }
    };


    function remove(e) {
        if(!e.target.matches('.MiniNavButton__trigger,.MiniNavButton__trigger *, .MiniNavButton__list a')) {
            button.classList.remove("MiniNavButton__trigger_menu-is-open");
            list_button.classList.remove("MiniNavButton__list_is-visible");
            miniIcon.classList.remove("MiniNavButton__icon_is-visible");
            this.removeEventListener('click', remove);
        }
    };

})();

//MiniNavButton__icon_is-visible
//.MiniNavButton__trigger_menu-is-open




//------------------------------
(function sidebarRES () {
var targetSidebar = document.querySelector(".content__main-sidebar");
var targetContainer = document.querySelector(".content__container");

var mediaMAX1050 = window.matchMedia("(max-width: 1050px)");

function Sidebar() {
    var sidebar = document.querySelector('.sidebar');
    var clone = sidebar.cloneNode(true);
    sidebar.remove(true);
    targetSidebar.appendChild(clone)
}
function reversSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var clone = sidebar.cloneNode(true);
    sidebar.remove(true);
    targetContainer.appendChild(clone)

}
if (mediaMAX1050.matches) {
    Sidebar();
} else {
    reversSidebar();
}
mediaMAX1050.addListener(function (e) {
    if(e.matches) {
        Sidebar();

    } else {
        reversSidebar();
    }
});
})();
//----------------------------