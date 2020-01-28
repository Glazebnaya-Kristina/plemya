$(document).ready(function () {
   $('.advantages__carousel').slick({
      arrows: true,
      dots: false,
      mobileFirst: true,
      appendArrows: $('.advantages__controls'),
      prevArrow: $('.advantages__arrow--prev'),
      nextArrow: $('.advantages__arrow--next'),
      responsive: [
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 1279,
            settings: {
               slidesToShow: 3
            }
         }
      ]
   });


   var lang = document.querySelectorAll('.lang li');

   for (var i = 0; i < lang.length; i++) {
      lang[i].onclick = function (e) {
         e.preventDefault();
         if (this.classList) {
            for (var j = 0; j < lang.length; j++) {
               lang[j].classList.remove('active');
            }
            this.classList.add('active');
         } else {
            this.active += ' ' + active;
         }
      }
   }
});



