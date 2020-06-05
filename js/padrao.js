$(document).ready(function(){
  //Configuração do Carousel
  $('#my-slide').DrSlider({
    'transition': 'fade',
    'showProgress':false,
    'userCSS':false,
    'navigationType':'circle',
    'controlBackgroundColor': 'transparent',
    'controlColor' : '#fff',
    'positionNavigation': 'center-bottom',
    'navigationColor': '#fff',
    'navigationHoverColor' : 'rgb(245, 245, 70)',
    'navigationHighlightColor' : 'rgb(245, 245, 70)',
    'duration':10000,
  });
  //Configuração do menuAccordion
  var menuAccordion = $(".menuHamburguer");
  var itemMenuAccordion = $(".item-toggle");
  var dropdown = $(".dropdown");
  const produtos = $("#navbarDropdownMenuLink")
  const itensDropdown = $(".dropdown-item");
  var i;
  
  for(i=0; i<produtos.length;i++){
    produtos.on("click",function(){
      produtos.toggleClass("activeDrop");

      var panell = $("#item-dropdown");
      if(panell.css("display")==="block"){
        panell.fadeOut("slow")
      }else{
        panell.fadeIn("slow")
        itensDropdown.fadeIn("slow")
      }
    })
  }

  for(i=0; i<menuAccordion.length;i++){
    menuAccordion.on("click",function(){
      menuAccordion.toggleClass("active");

      var panel = $("#panel");
      if(panel.css("display")==="block"){
        panel.fadeOut("slow")
        itemMenuAccordion.fadeIn("slow")
      }else{
        panel.fadeIn("slow")
        itemMenuAccordion.fadeIn("slow")
      }
    })
  }

  for (i=0;i<dropdown.length; i++){
    dropdown.on("click", function(){
      dropdown.toggleClass("activeDrop");

      var itensDrop = $(".item-dropdown");
      if(itensDrop.css("display")==="block"){
        itensDrop.fadeOut("slow")
      }else{
        itensDrop.fadeIn("slow")
      }
    })
  }


})


