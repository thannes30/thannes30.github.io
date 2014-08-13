$(function($){

  $('.navigation').animate({'margin-top': '0px'}, 1000);

  $(".project").click(function(e){
    e.preventDefault();
    // var image_href = $(this).attr("href");
    var image_href = $(this).find("a").attr("href");
    // var projectInfoPar = "<p>Fun project</p>";
    var projectInfo = $(this).find(".info").html();
    console.log($(this));
    console.log(projectInfo);
    if ($("#lightbox").length > 0){
      $("#content").html('<img src="' +image_href+ '"/>');
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

    // $('.findthat').on('click', function(){
    //   var overlay = document.createElement("div");
    //   var infoPar = document.createTextNode("Info paragraph about specific project goes here.");
    //   overlay.appendChild(infoPar);
    //   img = document.getElementbyid("content");
    //   img.append(overlay);
    // });

    // infoPar.style.opacity=0;
    // setTimeout(function(){
    //   infoPar.style.opacity=1;
    // }, 1000);


     $("#content").on('click', function(){
       $('#lightbox').hide();
     });

  });
});
