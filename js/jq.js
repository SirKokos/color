
// var intervalId = setInterval(function() {
//       $(function (){
//          $(".main-block__title").slideUp(800).slideDown(1500)
//       })
//    }, 4000);


// var intervalId = setInterval(function() {
//   $(function (){
//       $(".main-block__img").slideDown(3000).slideUp(2000)//.fadeTo(1000,0.2).fadeTo(2200,1);
//    })
//    }, 4000);
//



// $(window).scroll(function() {
//
//    var target = $(this).scrollTop();
//
//    if(target == 0) {
//
//       $(function (){
//          $(".main-block__title").slideDown(1000)
//       });
//       $(function (){
//          $(".page__main_text-white").slideDown(1000)
//       });
//
//
//
//    } else {
//
//       $(function (){
//          $(".main-block__title").slideUp(3000)
//       });
//       $(function (){
//          $(".page__main_text-white").slideUp(4000)
//       });
//
//    }
//
// });

let isScroll = 0 // доп. проверка
    targetScroll =  (window.screen.width)// расстояние до действия / в px

$(window).on('scroll', function(){
   if($(this).scrollTop() >= targetScroll/2) {
      isScroll = 1;

      $(function (){
         $(".main-block__title").fadeOut(1000).fadeIn(2000);
      });


      $(function (){
         $(".main-purple__text").slideDown(1000)
      });

      $(function (){
         $(".page__green-tittle").slideDown(2000)
      });

      $(function (){
         $(".violet__text").slideDown(2000)
      });

      $(function (){
         $(".beige__container ").slideDown(2000)
      });


      $(function (){
         $(".beige__img-lists").slideDown(2000)
      });


   } else if(isScroll === 0 || $(this).scrollTop() < targetScroll/2) {
      isScroll = 0;

      $(function (){
         $(".main-purple__text").slideUp(3000)
      });

      $(function (){
         $(".page__green-tittle").slideUp(1000)
      });


      $(function (){
         $(".violet__text").slideUp(2000)
      });

      $(function (){
         $(".beige__container").slideUp(3000)
      });

      $(function (){
         $(".beige__img-lists").slideUp(3000)
      });

   }
});