$(document).ready(function() {
    // Function to check screen width and move elements accordingly
    function moveElements() {
        if ($(window).width() <= 768) {
            // Move the image element to the top of its parent container
            $('.col-md-6.d-flex.justify-content-end.align-items-center').insertBefore('.col-md-6.mb-4');
        } else {
            // Move the image element back to its original position
            $('.col-md-6.d-flex.justify-content-end.align-items-center').insertAfter('.col-md-6.mb-4');
        }
    }

    // Initial check on document ready
    moveElements();

    // Check on window resize
    $(window).resize(function() {
        moveElements();
    });

    $('.btnB').mouseenter(function() {
        $(this).css({
            'background-color': '#6C5F5B',
            'color': '#ED7D31'
        });
    }).mouseleave(function() {
        $(this).css({
            'background-color': '#ED7D31',
            'color': '#ffffff'
        });
    });
    

    function checkPseudoElement() {
    if ($(window).width() <= 768) {
        $('.p1-beranda').removeClass('before').addClass('after');
    } else {
        $('.p1-beranda').removeClass('after').addClass('before');
    }
    }

    function checkPadding() {
        if ($(window).width() <= 768) {
            $('.p1-beranda').css('padding-left', '0');
        } else {
            $('.p1-beranda').css('padding-left', '55px');
        }
    }

    // function adjustImgT() {
    //     if ($(window).width() < 768) { // Jika tampilan mobile
    //         $(".imgT").css({
    //             "margin-left": "0",
    //             "max-width": "300px"
    //         });
    //     } else { // Jika tampilan tidak mobile
    //         $(".imgT").css({
    //             "margin-left": "300px",
    //             "max-width": "450px"
    //         });
    //     }
    // }
    
    function adjustpkata() {
        if ($(window).width() < 768) { // Jika tampilan mobile
            $(".p1-katakata").css({
                "font-size": "30px"
            });
        } else { // Jika tampilan tidak mobile
            $(".p1-katakata").css({
                "font-size": "72px"
            });
        }
    }

    function adjustimgtent() {
        if ($(window).width() < 768) { // Jika tampilan mobile
            $(".img-tentang").css({
                "margin-left": "auto",
                "width" : "230px",
                "height" : "290px"
            });
        } else { // Jika tampilan tidak mobile
            $(".img-tentang").css({
                "margin-left": "70px",
                "width" : "320px",
                "height" : "380px"
            });
        }
    }

    function adjustdeskrispiT() {
        if ($(window).width() < 880) { // Jika tampilan mobile
            $(".deskripsiT").css({
                "margin-right": "0"
            });
        } else { // Jika tampilan tidak mobile
            $(".deskripsiT").css({
                "margin-right": "190px"
            });
        }
    }



    // Initial check on page load
    checkPseudoElement();
    checkPadding();
    adjustpkata();
    adjustimgtent();
    adjustdeskrispiT()

    // Check on window resize
    $(window).resize(function() {
        checkPseudoElement();
        checkPadding();
        adjustpkata();
        adjustimgtent();
        adjustdeskrispiT()
    });

});



$(window).resize(function () {
    moveElements();
});

$('.card').mouseenter(function () {
    $(this).css({
        'filter': 'brightness(90%)',
    });
}).mouseleave(function () {
    $(this).css({
        'filter': 'brightness(100%)',
    });
});

$(document).ready(function () {
    $('.paket').mouseenter(function () {
        $(this).css({
            'filter': 'brightness(80%)',
        });
    }).mouseleave(function () {
        $(this).css({
            'filter': 'brightness(100%)',
        });
    });
});


//Testi
$(document).ready(function() {
    // Function to check screen width and move elements accordingly
    function moveElements() {
        if ($(window).width() <= 768) {
            // Move the image element to the top of its parent container
            $('.col-md-6.d-flex.justify-content-end.align-items-center').insertBefore('.col-md-6.mb-4');
        } else {
            // Move the image element back to its original position
            $('.col-md-6.d-flex.justify-content-end.align-items-center').insertAfter('.col-md-6.mb-4');
        }
    }

    // Initial check on document ready
    moveElements();

    // Check on window resize
    $(window).resize(function() {
        moveElements();
    });

    $('.btnB').mouseenter(function() {
        $(this).css({
            'background-color': '#6C5F5B',
            'color': '#ED7D31'
        });
    }).mouseleave(function() {
        $(this).css({
            'background-color': '#ED7D31',
            'color': '#ffffff'
        });
    });
    

    function checkPseudoElement() {
    if ($(window).width() <= 768) {
        $('.p1-beranda').removeClass('before').addClass('after');
    } else {
        $('.p1-beranda').removeClass('after').addClass('before');
    }
    }

    function checkPadding() {
        if ($(window).width() <= 768) {
            $('.p1-beranda').css('padding-left', '0');
        } else {
            $('.p1-beranda').css('padding-left', '55px');
        }
    }

    // function adjustImgT() {
    //     if ($(window).width() < 768) { // Jika tampilan mobile
    //         $(".imgT").css({
    //             "margin-left": "0",
    //             "max-width": "300px"
    //         });
    //     } else { // Jika tampilan tidak mobile
    //         $(".imgT").css({
    //             "margin-left": "300px",
    //             "max-width": "450px"
    //         });
    //     }
    // }
    
    function adjustpkata() {
        if ($(window).width() < 768) { // Jika tampilan mobile
            $(".p1-katakata").css({
                "font-size": "30px"
            });
        } else { // Jika tampilan tidak mobile
            $(".p1-katakata").css({
                "font-size": "72px"
            });
        }
    }

    function adjustimgtent() {
        if ($(window).width() < 768) { // Jika tampilan mobile
            $(".img-tentang").css({
                "margin-left": "auto",
                "width" : "230px",
                "height" : "290px"
            });
        } else { // Jika tampilan tidak mobile
            $(".img-tentang").css({
                "margin-left": "70px",
                "width" : "320px",
                "height" : "380px"
            });
        }
    }

    function adjustdeskrispiT() {
        if ($(window).width() < 880) { // Jika tampilan mobile
            $(".deskripsiT").css({
                "margin-right": "0"
            });
        } else { // Jika tampilan tidak mobile
            $(".deskripsiT").css({
                "margin-right": "190px"
            });
        }
    }



    // Initial check on page load
    checkPseudoElement();
    checkPadding();
    adjustpkata();
    adjustimgtent();
    adjustdeskrispiT()

    // Check on window resize
    $(window).resize(function() {
        checkPseudoElement();
        checkPadding();
        adjustpkata();
        adjustimgtent();
        adjustdeskrispiT()
    });

});

$(document).ready(function(){
    $('.card-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:3
        },
        1000:{
          items:4
        },
      }
    });
  });


  $(document).ready(function() {
    $('#gambar').change(function() {
      var fileName = $(this).val().split('\\').pop(); // Mendapatkan nama file yang diunggah
      if (fileName) {
        $('.upload-btn-img').addClass('file-uploaded'); // Menambah kelas 'file-uploaded' ke label
        $('.upload-btn-img').text('Diunggah'); // Mengganti teks label menjadi "Done"
      } else {
        $('.upload-btn-img').removeClass('file-uploaded'); // Menghapus kelas 'file-uploaded' dari label
        $('.upload-btn-img').text('Unggah'); // Mengembalikan teks label menjadi "Unggah"
      }
    });
  
    function adjustPadding() {
          if ($(window).width() <= 768) { // Angka 768 bisa disesuaikan dengan breakpoint yang diinginkan
              $('.container-form').css('padding', '15px');
          } else {
              $('.container-form').css('padding', '10vh 30vh');
          }
      }
  
      adjustPadding(); // Panggil fungsi saat dokumen siap
  
      $(window).resize(function() {
          adjustPadding(); // Panggil fungsi saat ukuran layar berubah
      });
  });
  