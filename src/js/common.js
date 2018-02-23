/*
 * Third party
 */
//= vue




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

