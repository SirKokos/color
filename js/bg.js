//дожидаемся полной загрузки страницы
window.onload = function () {

    //получаем идентификатор элемента
    let open = document.getElementsByClassName('burger-menu')[0];
    let close = document.getElementsByClassName('burger-menu-close')[0];
    //вешаем на него событие
    close.style.display = "none"
    open.onclick = function() {
        //производим какие-то действия
        open.style.display = "none"
        close.style.display = "flex"

    }
    close.onclick = function() {
        //производим какие-то действия
        open.style.display = "flex"
        close.style.display = "none"
       

    }
}