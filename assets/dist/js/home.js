$(document).ready(function () {
   // $('.header__slider').slick({
   //    arrows: false,
   //    dots: true
   // });


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



