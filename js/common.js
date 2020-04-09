$(document).ready(function() {
    $(".menu-btn").on("click", function () {
       $("nav").slideToggle(200);
       $(".backdrop").toggleClass("backdrop-active");
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 2) {
            $('header').addClass("fixed-header");
        } else {
            $('header').removeClass("fixed-header");
        }
    });

    $(".zakaz-form").submit(function() {
      var form_data = $(this).serializeArray();
      $.ajax({
          type: "POST",
          url: "../../mail.php",
          data: form_data,
          success: function(success) {
              $('.popup-with-form').click();
              console.log(success);
          },
          error: function(error) {
              $('.popup-with-form').click();
              console.log(error);
          }
      });
      return false;
  });

  $('.copy-click').click(function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('.link-copy').text()).select();
    document.execCommand("copy");
    $temp.remove();

    $(this).text('Тест скопирован!');
});
  
  $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

  $('.usluga').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

    $('.multiple-items-2').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        margin: 10,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                arrows: true,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        margin: 10,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });


});