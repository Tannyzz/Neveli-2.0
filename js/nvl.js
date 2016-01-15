$(document).ready(function(){
	    $(".button-collapse").sideNav();
	    $('.parallax').parallax();
	    $('.modal-trigger').leanModal();
	    $('.scrollspy').scrollSpy();
	    $('.slider').slider({full_width: true});

	      var options = [ {selector: '#parallax', offset: 100, callback: 'Materialize.toast("Sómos Naveli", 5000 )' },
	       {selector: '#serv', offset: 205, callback: 'Materialize.toast("Servicios", 5000 )' }, 
	       {selector: '#contact', offset: 400, callback: 'Materialize.toast("Contacto Naveli", 5000)' }, 
	       {selector: '#nvl', offset: 500, callback: 'Materialize.fadeInImage("#nvl")' },
	       {selector: '#gestion', offset: 500, callback: 'Materialize.fadeInImage("#gestion")' },
	       {selector: '#code', offset: 500, callback: 'Materialize.fadeInImage("#code")' },
	       {selector: '#android', offset: 500, callback: 'Materialize.fadeInImage("#android")' } ]; Materialize.scrollFire(options); 
    });