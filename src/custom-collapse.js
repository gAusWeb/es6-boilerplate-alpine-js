class CustomCollapse {
    constructor(customCollapse) {
        this.customCollapse = this;
        this.isClicked = false;
        const closeClickedCollapse = this.closeClickedCollapse.bind(this);
        const openClickedCollapse = this.openClickedCollapse.bind(this);
        const _setClickOutsideClose = this.setClickOutsideClose.bind(this);
        const _getTransitionDuration = this.getTransitionDuration.bind(this);

        
        $(customCollapse).find('.item').each(function(itemIndex) {
            const _isClicked = this.isClicked;
            
            $(this).find('.collapse-custom__head').on("click", function () {

                if (_isClicked) return;
                this.isClicked = true;

                // close all except clicked element
                $(customCollapse).find('.item').each(function (currIndex) {
                    currIndex != itemIndex && closeClickedCollapse($(this).find('.collapse-custom__head'));
                });

                // toggle collapsed elements
                if ($(this).siblings().hasClass('collapsed')) {
                    openClickedCollapse($(this));

                    $(document).on('click', function (e) {
                        _setClickOutsideClose(customCollapse, e);
                    });
                } else {
                    closeClickedCollapse($(this));

                    $(document).off('click', function (e) {
                        _setClickOutsideClose(customCollapse, e);
                    });
                }
            })
        })   
    }

    setClickOutsideClose(customCollapse, e) {
        const _collapseAllActiveItems = this.collapseAllActiveItems.bind(this);
        if (!$(customCollapse).hasClass('dropdown')) return;
        const $target = $(e.target);
        if ($target.closest('.collapse-custom').length > 0) return;
        _collapseAllActiveItems(customCollapse);        
    }

    // setClickOutsideClose(customCollapse) {
    //     const _collapseAllActiveItems = this.collapseAllActiveItems.bind(this);
    //     $(document).on('click', function (e) {
    //         if (!$(customCollapse).hasClass('dropdown')) return;
    //         const $target = $(e.target);
    //         if ($target.closest('.collapse-custom').length > 0) return;
    //         _collapseAllActiveItems(customCollapse);        
    //     });
    // }

    collapseAllActiveItems(customCollapse) {
        const _getTransitionDuration = this.getTransitionDuration.bind(this);
        let _isClicked = this.isClicked;
        $(customCollapse).find('.item').each(function (currIndex) {
            const clickedBody = $(this).find('.collapse-custom__body');
            $(this).find('.collapse-custom__head').attr('aria-expanded', 'false');
            $(clickedBody).css({"maxHeight": '0px'});
            $(clickedBody).removeClass('t1 t2 t3');

            setTimeout(() => {
                $(clickedBody).addClass('collapsed');
                _isClicked = false;
            }, _getTransitionDuration(clickedBody)); 
        });
    }

    closeClickedCollapse(thisClickedItem) {
        const _getTransitionDuration = this.getTransitionDuration.bind(this);
        let _isClicked = this.isClicked;
        const clickedBody = $(thisClickedItem).siblings();

        $(clickedBody).css({"maxHeight": '0px'});
        $(clickedBody).removeClass('t1 t2 t3');
        
        setTimeout(() => {
            $(this).attr('aria-expanded', 'false');
            $(clickedBody).addClass('collapsed');
            _isClicked = false;
        }, _getTransitionDuration(clickedBody)); 
    }

    openClickedCollapse(thisClickedItem) {
        const _getTransitionDuration = this.getTransitionDuration.bind(this);
        let _isClicked = this.isClicked;
        const clickedBody = $(thisClickedItem).siblings();

        $(thisClickedItem).attr('aria-expanded', 'true');
        $(clickedBody).removeClass('collapsed');
        $(clickedBody).css({"maxHeight": $(thisClickedItem).siblings().children().outerHeight()});
        $(clickedBody).addClass('t1 t2 t3');

        setTimeout(() => {
            _isClicked = false;
        }, _getTransitionDuration(clickedBody)); 
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