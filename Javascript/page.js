
$(window).on('scroll', function() {
    
    var $skills = $('.skills-section'), $skillpos = $skills.offset().top;
    var $indicator = $('.circles');
    var $about = $('#about'), $aboutpos = $about.offset().top;
    var $ws = $(window).scrollTop();
  
    // SCROLL ANIMATE INTO VIEW
        if ($ws <= $skillpos && window.innerWidth > 600) { 
            if (document.querySelector('#skills').style.opacity == 0) {
                anime({
                    targets: '#skills',
                    translateY: {
                        value: ['100px', '0px'],
                        duration: 1000,
                        easing: 'easeInOutCubic'
                    },
                    opacity: {
                        value: 1,
                        delay: 200,
                        duration: 1000,
                        easing: 'easeInOutSine'
                    }
                });
            }
        }
        // PAGE INDICATOR 
        if($ws > $('.intro__container h4').offset().top && $ws < $aboutpos) { 
            $indicator.removeClass('here');
            $indicator.css({
                backgroundColor: 'gray',
                borderColor: 'gray'
            })       
            $('.c-skills').addClass('here'); 
        }
        // INDICATES PROJECT SECTION
        if ( $ws >= $('.skills').offset().top && $ws < $aboutpos) {
            $indicator.removeClass('here');
            $('.c-projs').addClass('here');  
        }
        //INDICATES ABOUT SECTION
        if ($ws < $aboutpos && $ws > $('.js').offset().top) {
            $indicator.removeClass('here');
            $('.c-about').addClass('here');  
        }
        // INDICATES HOME
        if ($ws < $('.container__text').offset().top) {
            $indicator.removeClass('here');
            $('.c-home').addClass('here');
            $indicator.css({
                backgroundColor: 'white',
                borderColor: 'white'
            })  

        }
});
// ANIMATES THE ARROW
$(window).on('load', function() {
   anime({
       targets: '.arrow',
       translateY: ['-20px', 0],
       duration: 300,
       delay: 1000,
       loop: true,
       direction: 'alternate',
       easing: 'easeInOutSine'
   });
    $('.home').addClass('this');
    $('.c-home').addClass('here');
});