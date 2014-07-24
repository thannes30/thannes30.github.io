
//active nav
// $(document).ready(function () {
//   $('ul.nav > li').click(function (e) {
//       // e.preventDefault();
//       $('ul.nav > li').removeClass('active');
//       $(this).addClass('active');
//   });
// });



//ScrollIt code
$(function() {
$.scrollIt({
  upKey: 38,             // key code to navigate to the next section
  downKey: 40,           // key code to navigate to the previous section
  easing: 'linear',      // the easing function for animation
  scrollTime: 700,       // how long (in ms) the animation takes
  activeClass: 'active', // class given to the active nav element
  onPageChange: null,    // function(pageIndex) that is called when page is changed
});
});
