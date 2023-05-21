document.addEventListener("DOMContentLoaded", hiddenCloseclick);






for (let i = 0; i<5;i++){

    document.getElementsByClassName('button__footer')[i].addEventListener("click", hiddenCloseclick);
    function hiddenCloseclick() {
        let x = document.getElementsByClassName('hide')[i];
        if (x.style.display == "block"){
            x.style.display = "none";
        } else {
            x.style.display = "block"}
    };
};

