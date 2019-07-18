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