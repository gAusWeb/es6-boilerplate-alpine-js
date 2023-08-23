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

        $(customCollapse).find('.item').each(function(itemIndex) {
            $(this).find(".head").on("click", function () {
                
                $(customCollapse).find('.item').each(function (currIndex) {
                    const currGrpBody = $(this).find('.body');
                    if (currIndex != itemIndex) {
                        $(currGrpBody).css("maxHeight", '0px');
                        setTimeout(() => {
                            $(currGrpBody).addClass('collapsed');
                        }, $(currGrpBody).css('transition-duration').slice(0, -1) * 1000);
                    } else {
                    } 
                });

                const clickedBody = $(this).siblings();

                if (!$(clickedBody).hasClass('collapsed')) {
                    $(clickedBody).css("maxHeight", '0px');
                    setTimeout(() => {
                        $(clickedBody).addClass('collapsed');
                    }, $(clickedBody).css('transition-duration').slice(0, -1) * 1000);
                    return;
                }

                $(clickedBody).removeClass('collapsed');
                $(clickedBody).css("maxHeight", $(this).siblings().children().outerHeight());
                
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
                $(currGrpBody).css("maxHeight", '0px');
                setTimeout(() => {
                    $(currGrpBody).addClass('collapsed');
                }, $(currGrpBody).css('transition-duration').slice(0, -1) * 1000);
            });
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
  