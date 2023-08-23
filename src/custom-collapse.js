// $(document).ready(function() {
//     $('.head').each(function() {
//         $(this).on('click', function() {
//             if ($(this).siblings().hasClass('collapsed')) {
//                 $(this).siblings().removeClass('collapsed');
//                 $(this).siblings().css("maxHeight", $(this).siblings().children().outerHeight());
//                 return;
//             }

//             $(this).siblings().css("maxHeight", '0px');
//             setTimeout(() => {
//                 $(this).siblings().addClass('collapsed');
//             }, $(this).siblings().css('transition-duration').slice(0, -1) * 1000);
//         });
//     });
// });

// const toggleCollapse = (item) => {
//     console.log('toggle', item);

//     $(item).each(function (currentIndex) {
//         console.log(currentIndex)
//         // const body = $(this).find('.body');
//         // if (currentIndex != itemIndex) {
//         //     if (!$(body).hasClass('collapsed')) {
//         //         $(body).addClass('collapsed').removeAttr('style');
//         //     }
//         // }
//     });
// }

// $(document).ready(function() {
//     $(".collapse-wrapper .item").each(function (i) {
//         $(this).find(".head").on("click", function (e) {
//             // console.log('test', $(this).closest('.collapse-wrapper').find('.item'));
//             const thisCollapseWrapper = $(this).closest('.collapse-wrapper')
//             $(thisCollapseWrapper).each(function (i) {
//                 console.log(i);
//             });
//             const body = $(this).siblings();
//             console.log(i)

//             // toggleCollapse($(this).closest('.collapse-wrapper').find('.item'));
//         });
//     });
// });


class CustomCollapse {
    constructor(customCollapse) {
        this.customCollapse = this;
        console.log('imit', this);

        this.isClicked = false;

        $(customCollapse).find('.item').each(function(itemIndex) {
            $(this).find(".head").on("click", function () {
                // console.log(this);
                if(this.isClicked) return;
                this.isClicked = true;

                $(customCollapse).find('.item').each(function (currIndex) {
                    const currGrpBody = $(this).find('.body');

                    let largestTransitionDuration = 0;
                    const transitionAnimations = $(currGrpBody).css('transition-duration').split(",").map((el) => el.slice(0, -1));
                    transitionAnimations.map((el) => el > largestTransitionDuration ? largestTransitionDuration = el : null );
    

                    if (currIndex != itemIndex) {
                        $(currGrpBody).css({
                            "maxHeight": '0px'
                            // ,
                            // "opacity": 0
                        });

                        
                        setTimeout(() => {
                            $(currGrpBody).addClass('collapsed');
                            this.isClicked = false;
                            // console.log(this.isClicked)
                        }, largestTransitionDuration * 1000);
                    } else {
                    } 
                });

                const clickedBody = $(this).siblings();
                // console.log($(clickedBody).css('transition-duration').slice(0, -1) * 1000);
                // console.log($(clickedBody).css('transition-duration'));

                let largestTransitionDuration = 0;
                const transitionAnimations = $(clickedBody).css('transition-duration').split(",").map((el) => el.slice(0, -1));
                transitionAnimations.map((el) => el > largestTransitionDuration ? largestTransitionDuration = el : null );

                // console.log('transitionAnimations', transitionAnimations);
                // console.log(Math.max($(clickedBody).css('transition-duration').split(",").map((el) => el.slice(0, -1))));
                
                // const longestDuration = transitionAnimations.map((currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber);
                // console.log('longestDuration', previousLargestNumber)

                if (!$(clickedBody).hasClass('collapsed')) {
                    $(clickedBody).css({
                        "maxHeight": '0px'
                        // ,
                        // "opacity": 0
                        // ,
                        // "transform": "scaleX(0)"
                    });
                    $(clickedBody).removeClass('t1 t2 t3');
                    setTimeout(() => {
                        this.isClicked = false;
                        $(clickedBody).addClass('collapsed');
                    }, largestTransitionDuration * 1000);
                    return;
                }

                $(clickedBody).removeClass('collapsed');

                $(clickedBody).css({
                    "maxHeight": $(this).siblings().children().outerHeight()
                //     ,
                //     "opacity": 1
                //     ,
                //     "transform": "scaleX(1)"
                });

                $(clickedBody).addClass('t1 t2 t3');

                setTimeout(() => {
                    this.isClicked = false;
                }, largestTransitionDuration * 1000);
                
                
                // const body = $(this).find('.body');
                
                // const body = $(this).find('.body');

                // if ($(body).hasClass('collapsed')) {
                //     $(this).siblings().removeClass('collapsed');
                //     $(this).siblings().css("maxHeight", $(this).siblings().children().outerHeight());
                    
                // }

                // $(this).siblings().css("maxHeight", '0px');
                // setTimeout(() => {
                //     $(this).siblings().addClass('collapsed');
                // }, $(this).siblings().css('transition-duration').slice(0, -1) * 1000);
                
            })
        })

        this.setClickOutsideClose(customCollapse);
    }

    setClickOutsideClose(customCollapse) {
        $(document).on('click', function (e) {
            const $target = $(e.target);
            
            if (!$(customCollapse).hasClass('dropdown')) return;
            if ($target.closest('.collapse-wrapper').length > 0) return;

            
            
            $(customCollapse).find('.item').each(function (currIndex) {
                const currGrpBody = $(this).find('.body');

                let largestTransitionDuration = 0;
                const transitionAnimations = $(currGrpBody).css('transition-duration').split(",").map((el) => el.slice(0, -1));
                transitionAnimations.map((el) => el > largestTransitionDuration ? largestTransitionDuration = el : null );

                // console.log(largestTransitionDuration);

                $(currGrpBody).css({
                    "maxHeight": '0px'
                    // ,
                    // "opacity": 0
                    // ,
                    // "transform": "scaleX(0)"
                });
                $(currGrpBody).removeClass('t1 t2 t3');
                setTimeout(() => {
                    $(currGrpBody).addClass('collapsed');
                }, largestTransitionDuration * 1000);
            });
            
            this.isClicked = false;
        });
    }

    
}
  
export default function () {
    // add the 'custom' class to a .carousel element to stop it from being initialised with these defaults and instead, initialise your carousel inside your own module's js passing in your custom settings to the constructor above
    $(".collapse-wrapper").each(function () {
      new CustomCollapse(this);
    });
  }
  
export { CustomCollapse };
  



/*
todo:
- login desktop menu
- burger > login desktop/mobile menu
- pageResize, reset/close appropriate menus

*/