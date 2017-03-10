

var main = function(){
/* Push the body and the nav over by 285px over */
   var flag = false;
   
   $('#icon-menu').click(function() {
      
       if(flag == false){
	  
		$('#menu').animate({
			left: "0px"
		}, 400);

		$('body').animate({
			left: "200px"
		}, 400);


		flag = true;		
	 }
	 else
	 {
		   $('#menu').animate({
			left: "-200px"
			}, 400);

			$('body').animate({
			left: "0px"
			}, 400);

			
			flag = false;
	 }
   });

   $('.btn').click(function() {
      var post = $('#textBox').val();
      $('<li>').text(post).prependTo('.posts');
      $('#textBox').val('');
      $('#label').text('140');
      $('.btn').addClass('disabled');
   });

   $('#textBox').change(function() {
      var postLength = $(this).val().length;
      var charactersLeft = 140 - postLength;
      $('#label').text(charactersLeft);

      if(charactersLeft < 0 || charactersLeft == 140) {
         $('.btn').addClass('disabled'); 
      }
      else {
         $('.btn').removeClass('disabled');
      }
   });

$('.btn').addClass('disabled');

}

$(document).ready(main);


