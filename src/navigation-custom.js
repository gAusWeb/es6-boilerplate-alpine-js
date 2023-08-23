$(document).ready(function () {
    const closeNavItems = () => {
        const mobileCollapse = $('.navigation__mobile-wrapper').find('.collapse-wrapper');

        $(mobileCollapse).find('.item').each(function (currIndex) {
            const currGrpBody = $(this).find('.body');
            $(currGrpBody).css("maxHeight", '0px');
            setTimeout(() => {
                $(currGrpBody).addClass('collapsed');
            }, $(currGrpBody).css('transition-duration').slice(0, -1) * 1000);
        });
    }
    
    $(".navigation__hamburger").on("focus", function () {
        const mobileMenu = $('.navigation__mobile-wrapper')[0];
        const firstMobileElement = $(mobileMenu).find('.collapse-wrapper > *:first-child');

        // $(firstMobileElement).on('focus', function() {
        //     this.focus();
        // });

        $(this).on('keydown', function(e) { 
            var keyCode = e.keyCode || e.which; 
          
            if (keyCode == 9) { 
            //   e.preventDefault(); 
              // call custom function here
              console.log('tab detected');
              console.log(!$(mobileMenu).hasClass('translate-x-full'));
              if (!$(mobileMenu).hasClass('translate-x-full')) {
                $(firstMobileElement).on('focus', function() {
                    $(this).trigger("blue");
                });
              }
            } 
          });
        console.log(firstMobileElement)
    });

    $(".navigation__hamburger").on("click", function () {
        if (!$(".navigation__mobile-login-wrapper").hasClass("translate-x-full")) {
            $(".navigation__mobile-login-wrapper").addClass("translate-x-full");
            $("body").removeClass("overflow-y-auto");
            $(this).removeClass("open");
            return;
        }
        
        if (!$(".navigation__mobile-wrapper").hasClass('translate-x-full')) {
            $(".navigation__mobile-wrapper").addClass("translate-x-full");
            $("body").removeClass("overflow-y-auto");
            $(this).removeClass("open");
            closeNavItems();
            return
        }

        $(this).toggleClass("open");
        $(".navigation__mobile-wrapper").toggleClass("translate-x-full");
        $("body").toggleClass("overflow-y-auto");
    });

    $(".navigation__login").on("click", function () {
        if (!$(".navigation__mobile-wrapper").hasClass('translate-x-full')) {
            $(".navigation__mobile-wrapper").addClass("translate-x-full");
            closeNavItems();
            $(this).toggleClass("open");
            $(".navigation__mobile-login-wrapper").toggleClass("translate-x-full");
            return
        }
        $(".navigation__hamburger").toggleClass("open");
        $("body").toggleClass("overflow-y-auto");
        $(".navigation__mobile-login-wrapper").toggleClass("translate-x-full");
    });

    // $(".mobile-sub-menu-collapse-trigger").each(function(i) {
    //     $(this).on("click", function() {
    //         $(".mobile-sub-menu-collapse-trigger").each(function (ind) {
    //             if (ind != i && $(this).hasClass("open")) {
    //                 $(this).removeClass("open");
    //                 $(this).siblings().slideUp(300);
    //             } 
    //         });
            
    //         $(this).toggleClass("open");
    //         $(this).siblings().slideToggle(300);
    //     });
    // })

    // $(document).click(function (e) {
    //     console.log($(e.target).closest(".dropmenu-custom__mobile-login-wrapper").length > 0);
    //     if (
    //         $(e.target).closest(".dropmenu-custom__mobile-wrapper").length > 0 || 
    //         $(e.target).closest(".dropmenu-custom__mobile-login-wrapper").length > 0 || 
    //         $(e.target).closest(".navigation__hamburger").length > 0 ||
    //         $(e.target).closest(".navigation__login").length > 0
    //     ) return;
        
    //     if ($(".navigation__hamburger").hasClass('open')) {
    //         $(".navigation__hamburger").removeClass("open");   
    //     }

    //     if ($(".navigation__login").hasClass('open')) {
    //         $(".navigation__login").removeClass("open");   
    //     }
        
    //     if (!$(".navigation__mobile-wrapper").hasClass('translate-x-full')) {
    //         $(".navigation__mobile-wrapper").addClass("translate-x-full");   
    //     }
        
    //     if (!$(".navigation__mobile-login-wrapper").hasClass('translate-x-full')) {
    //         $(".navigation__mobile-login-wrapper").addClass("translate-x-full");
    //     }
            
    //     if ($("body").hasClass("overflow-y-auto")) {
    //         $("body").removeClass("overflow-y-auto");
    //     }
    // });

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
          var context = this, args = arguments;
          var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
    }

    const resizeHandler = () => {
        if (window.innerWidth > 1024) {
            if (!$(".navigation__mobile-wrapper").hasClass('translate-x-full')) {
                $(".navigation__mobile-wrapper").addClass("translate-x-full");
            }

            if (!$(".navigation__mobile-login-wrapper").hasClass('translate-x-full')) {
                $(".navigation__mobile-login-wrapper").addClass("translate-x-full");
            }

            if ($(".navigation__hamburger").hasClass("open")) {
                $(".navigation__hamburger").removeClass("open")
            };

            if ($(".navigation__login").hasClass("open")) {
                $(".navigation__login").removeClass("open")
            };  

            closeNavItems();

        } else {

            $(".navigation__desktop-menu-wrapper .collapse-wrapper").find('.item').each(function (currIndex) {
                const currGrpBody = $(this).find('.body');

                let largestTransitionDuration = 0;
                const transitionAnimations = $(currGrpBody).css('transition-duration').split(",").map((el) => el.slice(0, -1));
                transitionAnimations.map((el) => el > largestTransitionDuration ? largestTransitionDuration = el : null );

                $(currGrpBody).css({
                    "maxHeight": '0px'
                });
                $(currGrpBody).removeClass('t1 t2 t3');
                setTimeout(() => {
                    $(currGrpBody).addClass('collapsed');
                }, largestTransitionDuration * 1000);
            });
             
        }
    }


    const debouncedResizeHandler = debounce(resizeHandler, 100);
    window.addEventListener("resize", debouncedResizeHandler);

    // const navWrapper = $(".navigation");
    // const navHeader = $(navWrapper).find("header.navigation__header");
    // const desktopNavItems = $(navWrapper).find(".navigation__primary-btn");

    // desktopNavItems.each(function () {
    //     $(this).on("click", function () {
    //         $(this).toggleClass("open");
    //         $(this).siblings().removeClass("open");
    //         $(this)
    //             .closest("li")
    //             .find(".navigation__ul.dropdown")
    //             .addClass("open");
    //     });
    // });
});
