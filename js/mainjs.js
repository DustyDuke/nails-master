$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	dots:false,
	autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.open-button').click(function() {
$('.modal-window').css({'display': 'block'})
});
$('.close').click(function() {
$('.modal-window').css({'display': 'none'})
});

//contact-form
 $(document).ready(function() {
	$("#ajaxform").submit(function(){ 
		var form = $(this); 
		var error = false; 
		form.find('input').each( function(){ 
			if ($(this).val() == '') { 
				alert('Зaпoлнитe пoлe "'+$(this).attr('placeholder')+'"!'); 
				error = true; 
			}
		});
		if (!error) { 
			var data = form.serialize(); 
			$.ajax({ 
			   type: 'POST', 
			   url: 'contact-form.php', 
			   dataType: 'json', 
			   data: data, 
		       beforeSend: function(data) { 
		            form.find('button').attr('disabled', 'disabled'); 
		          },
		       success: function(data){ 
		       		if (data['error']) { 
		       			alert(data['error']); 
		       		} else { 
					$('.thanks-window').css({'display': 'block'});
					setTimeout(function(){$('.modal-window').css({'display': 'none'});},3000);
		       		}
		         },
		       error: function (xhr, ajaxOptions, thrownError) { 
		            alert(xhr.status); 
		            alert(thrownError); 
		         },
		       complete: function(data) { 
		            form.find('button').prop('disabled', false); 
		         }
		                  
			     });
		}
		return false;
	});
});
$("#ajaxform").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            window.location = "/thanks";
        });
        return false;
    });

		$(document).ready(function() {
	checkwidth = $(window).width();
	 if (checkwidth < 767) {
		 $('.orders ul').removeClass('last').addClass('first');
	 }
});
$(window).one('scroll' , function(){
    scroll_pos = $(window).scrollTop() + $(window).height();
    element_pos = $('.examples').offset().top + $('.orders').height() ;
    if (scroll_pos > element_pos) {
var items = $('.first > li');
items.css({ 'left': '-1500px'});
for (var i = 0; i < items.length; i++) {
  $(items[i]).delay(i * 600).animate({ left: 0  }, 600)
	};
};
});;
$(window).one('scroll' , function(){
    scroll_pos = $(window).scrollTop() + $(window).height();
    element_pos = $('.examples').offset().top + $('.orders').height() ;
    if (scroll_pos > element_pos) {
var items = $('.last > li');
items.css({ 'right': '-1500px'});
for (var i = 0; i < items.length; i++) {
  $(items[i]).delay(i * 600).animate({ right: 0 }, 600)
	};
};
});
