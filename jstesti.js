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
  document.getElementById("testimonyForm").addEventListener("submit", function(event){
    event.preventDefault();
    let formData = new FormData(this);
  });