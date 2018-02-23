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

