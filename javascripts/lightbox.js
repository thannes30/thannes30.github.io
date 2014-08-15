$(function($){
    $('.navigation').animate({'margin-top': '0px'}, 1000);

    $(".projects-container").on('click', '.project', function(e){
    e.preventDefault();
    var image_href = $(this).find("a").attr("href");
    var projectInfo = $(this).find(".info").html();
    // console.log($(this));
    // console.log(projectInfo);
    if ($("#lightbox").length > 0){
      $("#content").html('<img src="'+image_href+'"/>'
                          +'<div id="overlay">'
                          +'<p id="infopar">'
                          +projectInfo+'</p>'+
                          '</div>');
      $("#lightbox").show();
    } else {
      var lightbox =
         '<div id="lightbox">'+
            '<div id="lightbox-wrapper">'+
              '<div id="content">'+
                '<img src="' +image_href+ '"/>'+
                '<div id="overlay">'+
                  '<p id="infopar">' +projectInfo+ '</p>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>';
        $('body').append(lightbox);
    };

     $("#content").on('click', function(){
       $('#lightbox').hide();
     });

  });
});
