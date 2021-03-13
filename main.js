$(function(){
  // RICHIAMO LE FUNZIONI AL CLICK
  $('.prev').click(
    function(){
      prevImg();
      prevDot()
    }
  );

  $('.next').click(
    function(){
      nextImg();
      nextDot()
    }
  );

  $(document).keydown(
    function(e) {
      if(e.key == 'ArrowLeft'){
        prevImg();
        prevDot()
      }else if(e.key == 'ArrowRight'){
        nextImg();
        nextDot()
      }
    }
  );

  // DEFINISCO LE FUNZIONI PER LO SLIDE DELLE IMMAGINI TRAMITE LE FRECCE
  function prevImg(){
    var active = $('img.active');
    active.removeClass('active');
    if(active.hasClass('first') == true){
      $('img.last').addClass('active');
    }else{
      active.prev().addClass('active');
    }
  }

  function nextImg(){
    var active = $('img.active');
    active.removeClass('active');
    if(active.hasClass('last') == true){
      $('img.first').addClass('active');
    }else{
      active.next().addClass('active');
    }
  }

  // DEFINISCO LE FUNZIONI PER LO SLIDE DEI BULLET
  function prevDot(){
    var activeDot = $('.nav i.active');
    activeDot.removeClass('active');
    if(activeDot.hasClass('first') == true){
      $('i.last').addClass('active');
    }else{
      activeDot.prev().addClass('active');
    }
  }

  function nextDot(){
    var activeDot = $('.nav i.active');
    activeDot.removeClass('active');
    if(activeDot.hasClass('last') == true){
      $('i.first').addClass('active');
    }else{
      activeDot.next().addClass('active');
    }
  }

  // DEFINISCO LE FUNZIONI PER MOSTRARE L'IMMAGINE CORRISPONDENTE AL BULLET CLICCATO
  var dot = $('.fa-circle');
  dot.click(
    function(){
      var img = $('img');
      var index = dot.index($(this));
      $('.nav').children('i').removeClass('active');
      $(this).addClass('active');
      img.removeClass('active');
      img.eq(index).addClass('active');
    }
  )

});
