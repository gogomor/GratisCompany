$( document ).ready(function() {
    // begin slideshow
            setInterval("rotateImages()", 6000);


    // ROTIRANJE KRUGA
    $('.proizvodnja img').hover(function(){
    	$('.rotirani').css("visibility","visible");
    	$('.rotirani').css("transform","rotateZ(-180deg)");
    },function(){ $('.rotirani').css("transform","rotateZ(90deg)");
	});

    // LOGO CHANGE ON HOVER
	$('.logo').mouseover(function() {
  		$('.logo-slika').attr('src', 'images/logo2.png');
	});
	$('.logo').mouseout(function() {
  		$('.logo-slika').attr('src', 'images/logo.png');
	});

	//POJAVLJIVANJE NASLOVA U KRUGOVIMA

	// var timer;
	// var delay = 1000;

	// $('.grafika').mouseover(function() {
	//     // on mouse in, start a timeout

	//     timer = setTimeout(function() {
	//         // do your stuff here
	//         $('.grafika h2').css("visibility","visible");
	//     }, delay);
	// }, function() {
	//     // on mouse out, cancel the timer
	//     clearTimeout(timer);
	   	
	    
	// });
	var delay = 100;//the delay interval

	// $(".grafika").mouseover(function() {     
	// 	  $( ".grafika h2" ).fadeIn(500);
	// });
	// $(".grafika").mouseout(function() {    
	//   	 $( ".grafika h2" ).fadeOut(-500);
	// });



	// $('.grafika').hover(function(){
	// 	$('.grafika h2').css("visibility","visible");
	// });

});

//SLIDESHOW//
function rotateImages() {
    var currImg = $('#hero div.current');
    var nextImg = currImg.next();
    // ako nema sledece slike, sledeca postaje prva
    if (nextImg.length == 0)
        nextImg = $('#hero div:first');
    //current je z-index 2, previous je z-index 1
    currImg.removeClass('current').addClass('previous');
    nextImg.css({ opacity: 0.0 }).addClass('current')
            .animate({ opacity: 1.0 }, 1000, function() {
                            currImg.removeClass('previous');
                        });
}