$(document).ready(function () {
    const closeNavItems = () => {
        const mobileCollapse = $('.navigation__mobile-wrapper').find('.collapse-custom');
        $(mobileCollapse).find('.collapse-custom__item').each(function (currIndex) {
            const currGrpBody = $(this).find('.collapse-custom__body');
            let largestTransitionDuration = 0;
            const transitionAnimations = $(currGrpBody).css('transition-duration').split(",").map((el) => el.slice(0, -1));
            transitionAnimations.map((el) => el > largestTransitionDuration ? largestTransitionDuration = el : null );
            $(currGrpBody).css("maxHeight", '0px');
            setTimeout(() => {
                $(currGrpBody).addClass('collapsed');
                $(this).find('.collapse-custom__head').attr('aria-expanded', 'false');
            }, largestTransitionDuration * 1000);
        });
    }

    $(".navigation__hamburger").on("click", function () {
        if (!$(".navigation__mobile-wrapper").hasClass('translate-x-full')) {
            $(".navigation__mobile-wrapper").addClass("translate-x-full");
            $(this).removeClass("open").attr('aria-expanded', 'false');
            closeNavItems();
            return
        }

        if (!$(".navigation__mobile-login-wrapper").hasClass("translate-x-full")) {
            $(".navigation__mobile-login-wrapper").addClass("translate-x-full");
            $(this).removeClass("open").attr('aria-expanded', 'false');
            $(this).attr('aria-expanded', 'false');
            return;
        }
        

        $(this).toggleClass("open").attr('aria-expanded', 'true');
        $(".navigation__mobile-wrapper").toggleClass("translate-x-full");
    });

    $(".navigation__login > button:first-of-type").on("click", function () {
        if (!$(".navigation__mobile-wrapper").hasClass('translate-x-full')) {
            $(".navigation__mobile-wrapper").addClass("translate-x-full");
            $(this).toggleClass("open").attr('aria-expanded', 'false');
            $(".navigation__mobile-login-wrapper").toggleClass("translate-x-full");
            closeNavItems();
            return
        }
        $(".navigation__hamburger").toggleClass("open").attr('aria-expanded', 'false');
        $(this).toggleClass("open").attr('aria-expanded', 'true');
        $(".navigation__mobile-login-wrapper").toggleClass("translate-x-full");
        closeNavItems();
    });
    
    $(".navigation__mobile-close").each(function () {
        $(this).on("click", function () {
            $(".navigation__mobile-wrapper").addClass("translate-x-full");
            $(".navigation__mobile-login-wrapper").addClass("translate-x-full");
            $(".navigation__hamburger").removeClass("open").attr('aria-expanded', 'false');
            // $(".navigation__login > button:first-of-type").removeClass("open").attr('aria-expanded', 'false');
            closeNavItems();
        });
    });

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
            $(".navigation__desktop-collapse .collapse-custom").find('.collapse-custom__item').each(function (currIndex) {
                const currGrpBody = $(this).find('.collapse-custom__body');
                let largestTransitionDuration = 0;
                const transitionAnimations = $(currGrpBody).css('transition-duration').split(",").map((el) => el.slice(0, -1));
                transitionAnimations.map((el) => el > largestTransitionDuration ? largestTransitionDuration = el : null );
                $(currGrpBody).css({
                    "maxHeight": '0px'
                });
                $(currGrpBody).removeClass('t1 t2 t3');
                setTimeout(() => {
                    $(currGrpBody).addClass('collapsed');
                    $(this).find('.collapse-custom__head').attr('aria-expanded', 'false');
                }, largestTransitionDuration * 1000);
            });
        }
    }

    const debouncedResizeHandler = debounce(resizeHandler, 100);
    window.addEventListener("resize", debouncedResizeHandler);
});
