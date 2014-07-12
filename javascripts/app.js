// $(function(){
//   $("#nav a").click(function(e){
//     e.preventDefault();
//     $('html,body').scrollTo(this.hash,this.hash);
//   });
// });


//active nav
$(document).ready(function () {
        $('ul.nav > li').click(function (e) {
            // e.preventDefault();
            $('ul.nav > li').removeClass('active');
            $(this).addClass('active');
        });
    });

// $('.navbar-header li').click(function(e) {
//     $('.navbar-header li.active').removeClass('active');
//     var $this = $(this);
//     if (!$this.hasClass('active')) {
//         $this.addClass('active');
//     }
//     e.preventDefault();
// });

