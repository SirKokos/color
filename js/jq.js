
document.addEventListener('DOMContentLoaded', () => {

    const scrollItems = document.querySelectorAll('.scrollItem');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        // console.log(windowCenter)
        scrollItems.forEach(el => {

            let scrollOffset = el.offsetTop+ (el.offsetHeight / 2) ;

            if (windowCenter>= scrollOffset) {

                $("."+el.className.split(" ")[0]).slideDown(1000)

            } else {
                $("."+el.className.split(" ")[0]).hide()
            }
        });
    };

    scrollAnimation();
    window.addEventListener('scroll', () => {
        scrollAnimation();
    });
});

      $(function (){
         $(".main-block__title").fadeOut(2000).fadeIn(5000);
      })


document.addEventListener("DOMContentLoaded", hiddenCloseclick_lorem);
for (let i = 0; i<8;i++){

    document.getElementsByClassName('plus')[i].addEventListener("click", hiddenCloseclick_lorem);

    function hiddenCloseclick_lorem(){
        let x = document.getElementsByClassName('lorem')[i];
        if (x.style.display == "block"){
            x.style.display = "none";
        } else {
            x.style.display = "block"}

    };
};

