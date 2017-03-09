var slideMenu = function() {
  /* Push the body and the nav over by 285px over */
  $('#icon-menu').click(function() {
    $('#menu').animate({
      left: "0px"
    }, 400);

    $('body').animate({
      left: "200px"
    }, 400);
    
     $("#m2").hide(400);  
     
  });

  /* Then push them back */
  $('#icon-close').click(function() {
    $('#menu').animate({
      left: "-200px"
    }, 400);

    $('body').animate({
      left: "0px"
    }, 400);
      
    $("#m2").show(400);
  });
};


$(document).ready(slideMenu);

var postBox = function() {
    $('.btn').click(function() {
        var post = $('.textBox').val();
        $('<li>').text(post).prependTo('.posts');
        $('.textBox').val('');
        $('.label').text('140');
        $('.btn').addClass('disabled');
        });
        
    $('.textBox').keyup(function() {
      var postLength = $(this).val().length;
      var charactersLeft = 140 - postLength;
    $('.label').text(charactersLeft);
    
    if(charactersLeft < 0) {
      $('.btn').addClass('disabled'); 
      }
      else if(charactersLeft == 140) {
         $('.btn').addClass('disabled');
      }
      else {
         $('.btn').removeClass('disabled');
      }
    });

    $('.btn').addClass('disabled');
    
}
    
$(document).ready(postBox);


