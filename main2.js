$(document).ready(function(){
	$('.slider').slider({
		indicators:false,
		interval:3000		
	});
	$(".button-collapse").sideNav();

	$('.modal').modal({
		dismissible: true,
		opacity: .5,
		inDuration: 300,
		outDuration: 200,
		startingTop: '4%',
		endingTop: '10%',
		complete: function() { 
			$('#scale').addClass('scale-out');
			$('#scale').css({'display':'none'});
			$('.erria').css({'display':'block'});
			Materialize.showStaggeredList('#staggered');
      }
  });

});