$(document).ready(function() {

  $('.nav-item').hover(function(){
    $(this).animate({
      'width': 80,
      'height': 70,
      'margin-top': -30
    }, 500)
  }, function(){
    $(this).animate({
      'width': 80,
      'height': 50,
      'margin-top': 0
    }, 500)
  });

});
