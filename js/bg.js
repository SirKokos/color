//дожидаемся полной загрузки страницы


    //получаем идентификатор элемента
    let open = document.getElementsByClassName('burger-menu')[0];
    let close = document.getElementsByClassName('burger-menu-close')[0];
let body = document.getElementsByTagName('body')[0];
    //вешаем на него событие
    // close.style.display = "none"
    open.onclick = function() {
        //производим какие-то действия
        open.style.display = "none"
        close.style.display = "flex"
        body.style.overflow = 'hidden'
    }
    close.onclick = function() {
        //производим какие-то действия
        open.style.display = "flex"
        close.style.display = "none"
        body.style.overflow = ''

    }
