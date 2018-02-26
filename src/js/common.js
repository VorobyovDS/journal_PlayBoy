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
(function footerRES () {
    var targetFooterSedebar = document.querySelector(".footer__sidebar");
    var footerSocial = document.querySelector(".footer-social");

    var mediaMAX1050 = window.matchMedia("(max-width: 800px)");

    function FooterSedebar() {
        var element = document.querySelector('.footer__digital-magazine');
        var clone = element.cloneNode(true);
        element.remove(true);
        footerSocial.appendChild(clone)
    }
    function reversFooterSedebar() {
        var element = document.querySelector('.footer__digital-magazine');
        var clone = element.cloneNode(true);
        element.remove(true);

        targetFooterSedebar.appendChild(clone)

    }
    if (mediaMAX1050.matches) {
        FooterSedebar();
    } else {
        reversFooterSedebar();
    }
    mediaMAX1050.addListener(function (e) {
        if(e.matches) {
            FooterSedebar();

        } else {
            reversFooterSedebar();
        }
    });
})();

