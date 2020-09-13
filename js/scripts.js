if (typeof jQuery === "undefined") {
    throw new Error("Bootstrap's JavaScript requires jQuery");

    
  }

  
  
  $(document).ready(function() { 

    $('.noURL').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      }
    });
   
    // $('.noURL').magnificPopup({
    //   delegate: 'a', // child items selector, by clicking on it popup will open
    //   type: 'image'
    //   // other options
    // });

    $('.jabboltWeb').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '&nbsp;<a href="https://jabbolt.com" target="_blank">Go to Site</a>';
        }
      }
    });

    $('.upwardWeb').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '&nbsp;<a href="https://www.upward.net/" target="_blank"> Go to site</a>';
        }
      }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });

    

    
   
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


  
  
  