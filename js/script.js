var slideMenu = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "200px"
    }, 200);
      
    $('.m2').addClass('selected');
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-200px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
      
    $('.m2').removeClass('selected');
  });
};


$(document).ready(slideMenu);

var main = function() {
    $('.btn').click(function() {
        var post = $('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
        $('.status-box').val('');
        $('.counter').text('140');
        $('.btn').addClass('disabled');
        });
        
    $('.status-box').keyup(function() {
      var postLength = $(this).val().length;
      var charactersLeft = 140 - postLength;
    $('.counter').text(charactersLeft);
    
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
    
$(document).ready(main);
