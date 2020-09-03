if (typeof jQuery === "undefined") {
    throw new Error("Bootstrap's JavaScript requires jQuery");

    
  }

  
  
  $(document).ready(function() { 
   

    
   
  });//doc ready
  
$(window).load(function() {
    
});
jQuery(window).on('load', function($){
    var elem = document.querySelector('.cuadros');
    var msnry = new Masonry( elem, {
    // options
    itemSelector: '.tiles'
    });

    // element argument can be a selector string
    //   for an individual element
    var msnry = new Masonry( '.tiles', {
    // options
    });
});

var image = document.getElementsByClassName('thumbnailpara');
new simpleParallax(image);


  
  
  