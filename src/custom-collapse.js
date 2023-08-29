class CustomCollapse {
    constructor(customCollapse) {
        this.customCollapse = this;
        this.isClicked = false;
        const _expandItem = this.expandItem.bind(this);
        const _collapseItem = this.collapseItem.bind(this);
        let prevIndex;
        let currIndex;
        const collapsedItems = $(customCollapse).find('.collapse-custom__item');

        $(customCollapse).find('.collapse-custom__item').each(function(itemIndex) {
            $(this).find('.collapse-custom__head').on("click", function (e) {
                e.stopPropagation();
                prevIndex = currIndex;
                currIndex = $(this).closest('.collapse-custom__item').index();

                if (prevIndex == currIndex) {
                    _collapseItem(collapsedItems[prevIndex]);
                    console.log('same same');
                    currIndex = null;
                    $(document).off('click.clickOutside')
                    return
                }

                if (prevIndex !== undefined) {
                    _collapseItem(collapsedItems[prevIndex]);
                    $(document).off('click.clickOutside')
                }
                    
                _expandItem($(collapsedItems[currIndex]));
             
                $(document).on('click.clickOutside', function(e) {
                    if (window.outerWidth < 1024 || $(e.target).closest('.collapse-custom').length > 0) return;
                    _collapseItem(collapsedItems[currIndex]);
                    currIndex = null;
                    $(document).off('click.clickOutside');
                });
            })
        })   
    }

    expandItem(elem) {
        const $item = $(elem),
            $head = $item.find('.collapse-custom__head'),
            $body = $item.find('.collapse-custom__body');
        $item.addClass('collapse-item-expanded')
        $head.attr('aria-expanded', 'true');
        $body.removeClass('collapsed');
        $body.attr('aria-expanded', 'true');
        $body.css({"maxHeight": $head.siblings().children().outerHeight()});
        $body.addClass('t1 t2 t3');
    }

    collapseItem(elem) {
        const _getTransitionDuration = this.getTransitionDuration.bind(this);
        const $item = $(elem),
            $head = $item.find('.collapse-custom__head'),
            $body = $item.find('.collapse-custom__body');
            $body.css({"maxHeight": '0px'});
            $body.removeClass('t1 t2 t3');            
        setTimeout(() => {
            $item.removeClass('collapse-item-expanded')
            $head.attr('aria-expanded', 'false');
            $body.addClass('collapsed');
            $body.attr('aria-expanded', 'true');        
            this.isClicked = false;
            this.isExpanded = 0;
        }, _getTransitionDuration($body)); 
    }

    getTransitionDuration(clickedBody) {
        let largestTransitionDuration = 0;
        if ($(clickedBody).length > 0) {
            const transitionAnimations = $(clickedBody).css('transition-duration').split(",").map((el) => el.slice(0, -1));
            transitionAnimations.map((el) => el > largestTransitionDuration ? largestTransitionDuration = el : null );
        }
        return largestTransitionDuration * 1000;
    }
}
  
export default function () {
    // init unique instance: wrap in a unique class then pass it to the class constructor
    $(".collapse-custom").each(function () {
      new CustomCollapse(this);
    });
}
  
export { CustomCollapse };