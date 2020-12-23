/**
 * Created by tanvir on 10/17/15.
 */

(function($) {
    /*$('#sidebar').hasClass('aboutSide').affix({
     offset: {
     top: 150
     }
     });*/

    //$('#sidebar').affix({
    //    offset: {
    //        top: 0
    //    }
    //});
    //$('#sidebar').length===0
    var mq = window.matchMedia( "(min-width: 480px)" );
    var sidebar_found = $('#sidebar');

    if(sidebar_found.length!==0 && mq.matches==true){
        sidebar_found.affix({
            offset: {
                top: $('#sidebar').offset().top
            }
        });
    }

    var $body   = $(document.body);
    var navHeight = $('.navbar').outerHeight(true) + 10;

    $body.scrollspy({
        target: '#leftCol',
        offset: navHeight
    });

    $(function() {
        $('a[href*=#]:not([data-toggle="collapse"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

//Back to top js

// Back to home by #topcontrol
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 500) {
            //when page scrolls past 500px
            $('#topcontrol').css('display', 'inline-block');
        } else {
            //when page within 500px
            $('#topcontrol').css('display', 'none');
        }
    });

// Animating Navigation Menu
    $('#topcontrol').click(function() {
        $('html, body').animate({ scrollTop:0 }, 1000);
        return false;
    });

})( jQuery );