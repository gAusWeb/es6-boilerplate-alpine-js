class CustomCollapse {
    constructor(customCollapse) {
        this.customCollapse = this;
        this.isClicked = false;
        // const _closeClickedCollapse = this.closeClickedCollapse.bind(this);
        // const _openClickedCollapse = this.openClickedCollapse.bind(this);
        // const _setClickOutsideClose = this.setClickOutsideClose.bind(this);
        const _expandItem = this.expandItem.bind(this);
        const _collapseItem = this.collapseItem.bind(this);
        // const _test = this.test.bind(this);
        // let _isClicked = this.isClicked;
        // const outerThis = this;
        // const outerIsClicked = this.isClicked;
        // let newActiveItem;

        // const _newTest = this.newTest.bind(this);


        let prevIndex;
        let currIndex;

        // this.isExpanded = 0;

        // let isExpanded = this.isExpanded;

        // this.count = 0;

        // this.prevIndex = undefined;
        // this.currIndex = undefined;

        // const self = this;

        const collapsedItems = $(customCollapse).find('.collapse-custom__item');
        // const customCollapse = this.customCollapse;

        

        $(customCollapse).find('.collapse-custom__item').each(function(itemIndex) {
            $(this).find('.collapse-custom__head').on("click", function (e) {
                // if (isExpanded === 0) {
                //     isExpanded = isExpanded + 1;
                // } 


                
                e.stopPropagation();
                // if (self.currIndex !== undefined) self.prevIndex = self.currIndex;
                // self.prevIndex = self.currIndex;
                
                // // if (self.prevIndex == self.currIndex && self.prevIndex !== undefined) {     
                // //     _collapseItem(collapsedItems[self.prevIndex]);
                // //     console.log('same same');
                // //     self.currIndex = undefined;
                // //     document.removeEventListener('click', _newTest)
                // //     $(document).off('click.mySpace', _newTest);
                // //     return
                // // }
                
                // // prevIndex = currIndex;
                // self.currIndex = $(this).closest('.collapse-custom__item').index();

                // console.log('self.prev', self.prevIndex);
                // console.log('self.curr', self.currIndex);

                // console.log(this);


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

                
                // document.removeEventListener('click', _newTest, true)

                // if (prevIndex !== undefined && prevIndex == currIndex) {                    
                // if (self.prevIndex == self.currIndex && self.prevIndex !== undefined) {                    
                //     _collapseItem(collapsedItems[self.prevIndex]);
                // // // //     console.log('prev same', this.prevIndex);
                //     // self.prevIndex = undefined;
                //     self.currIndex = undefined;
                // //     console.log('hi same');
                // //     $(document).off('click.mySpace', _newTest);
                //         console.log('hi same');
                //         document.removeEventListener('click.mySpace', (e) => _newTest(e, self.currIndex))
                //     return
                    
                // }

                // // else  {
                // if (this.prevIndex !== undefined) {
                //     _collapseItem(collapsedItems[self.prevIndex]);
                // //     _collapseItem(collapsedItems[self.prevIndex]);
                // //     self.prevIndex = undefined;
                // //     // this.prevIndex = self.currIndex;
                //     self.currIndex = undefined;
                // //     // $(document).off('click.mySpace');                        
                // //     document.removeEventListener('click', _newTest)
                // //     return
                // }
                        
                    // }
                    
                _expandItem($(collapsedItems[currIndex]));
                // console.log(prevIndex)
                // console.log(currIndex)
                // console.log(isExpanded);
                
                // $(this).on('blur', function() {
                //     console.log('blur');
                //     _collapseItem($(collapsedItems[currIndex]));
                // })

                // e.stopPropagation();

                // console.log(customCollapse)
                $(document).on('click.clickOutside', function(e) {
                    if (window.outerWidth < 1024 || $(e.target).closest('.collapse-custom').length > 0) return;
                    _collapseItem(collapsedItems[currIndex]);
                    currIndex = null;
                    $(document).off('click.clickOutside');
                });

                // _newTest, currIndex = null))
                // document.addEventListener('click', (e) => (_newTest(e, self.currIndex), currIndex = null))
                // $(document).on('click.mySpace', function(e) {
                    
                //     _newTest(e, currIndex)
                // } )
                // document.addEventListener('click', _newTest, false)
                // $(document).on('click.mySpace',  (e) => _test($(collapsedItems[currIndex]), e));
                
                // $(document).on('click.mySpace', function(e) {
                //     // console.log('_test', isExpanded, collapsedItems, currIndex);

                // //   console.log('test');
                //     if (isExpanded < 1) {
                //         isExpanded = isExpanded + 1;
                //     }  else {
                //         console.log('expanded', isExpanded);
                //         console.log(collapsedItems[currIndex])
                //         _collapseItem($(collapsedItems[currIndex]));
                //         isExpanded = isExpanded - 1;
                //     }

                    
                //     // if (isExpanded > 0) {

                //     //     console.log('expanded', isExpanded);
                //     //     isExpanded = isExpanded - 1;
                //     //     console.log('expanded', isExpanded);
                //     // }
                // //     if (!$(collapsedItems[currIndex]).parent().hasClass('dropdown')) return;
                // //     if ($(e.target).closest('.collapse-custom').length > 0) return;
                // //     // const _collapseItem = this.collapseItem.bind(this);
                // //     _collapseItem($(collapsedItems[currIndex]));
                // //     prevIndex = undefined;
                // //     console.log(prevIndex)
                // });
            })
        })   
    }

    newTest(e, $item) {
        // console.log('hi', e);
        e.stopPropagation();

        console.log('doc click');

        const dis = this
        
        // console.log(elem);
        // console.log(e.target.closest('.collapse-custom__item'));
        // const item = $(e.target).closest('.collapse-custom__item');
        // $(elem).removeClass('collapse-item-expanded');
        // $(elem).find('.collapse-custom__head').attr('aria-expanded', 'false');
        // $(elem).find('.collapse-custom__body').addClass('collapsed');
        // if (e.target == elem) return;
        // if ($(e.target).closest('.dropdown-custom').length > 0) return 
        
        // if ($(e.target).closest('.collapse-custom').length > 0) return;
        // // console.log('new test', $(e.target).closest('.collapse-custom__item'));

        const item = $(e.target)
        // console.log('new test 2', e.target, $item);

        // console.log('newTest', item)
        // console.log('newTest', $item);
        

        // console.log('e.target', $(e.target).closest('.collapse-custom'));
        // count = 0;
        // this.count = this.count + 1;
        // console.log('count', this.count);
        
        // if (this.count > 1) {
        //     console.log('elem', elem);
            const _collapseItem = this.collapseItem.bind(this);
            _collapseItem($(item));
            // const _prevActive = this.prevIndex;
            // console.log(this)
            // console.log(this.count)
            // console.log(this.prevIndex)
            // console.log(this.currIndex)
            // console.log(_prevActive)

            // this.currIndex = undefined;

            // this.currentIndex = undefined;
        //     this.count = 0;
        //     return;
        // }
        // this.isExpanded = 10;
        // if (this.isExpanded < 1) {
        //     this.expanded = this.expanded + 1;
        //     return;
        // }
        // console.log('new test', this.isExpanded);
        // console.log('new test', prevIndex);
        // e.target.removeEventListener('click', _newTest);

    }



    expandItem(elem) {
        const _getTransitionDuration = this.getTransitionDuration.bind(this);
        // const _test = this.test.bind(this);
        // const _newTest = this.newTest.bind(this);
        // this.isExpanded = isExpanded;
        // this.isExpanded = this.isExpanded + 1;
        const $item = $(elem),
            $head = $item.find('.collapse-custom__head'),
            $body = $item.find('.collapse-custom__body');
        $item.addClass('collapse-item-expanded')
        $head.attr('aria-expanded', 'true');
        $body.removeClass('collapsed');
        $body.attr('aria-expanded', 'true');
        $body.css({"maxHeight": $head.siblings().children().outerHeight()});
        $body.addClass('t1 t2 t3');

        // document.addEventListener('click', (e) => (_newTest(e, $(elem))))

        // $(document).on('click.mySpace', (e) => e, _newTest(e, elem));
        // $(document).on('click.mySpace', function(e, elem) {

        //     _newTest(e, elem)
        // }, true);

        // // $(document).on('click', function() {
        // //     console.log('no name space')
        // // })

        

        // $(document).on('click.mySpace',  function(e) {
            // _test($item, currIndex, e)
            // isExpanded = isExpanded - 1
            // if (isExpanded < 1) {
            // } else {
            // }
            // console.log('hi', isExpanded);
            // console.log('hi this', this.isExpanded);            
            
        // })

        // $(document).on('click.mySpace',  (e) => _test(e));

        setTimeout(() => {
            // this.isClicked = false;
            // this.prevIndex = currIndex;
            // this.prevIndex = this.currIndex;
            // this.currIndex = undefined;
        }, _getTransitionDuration($body)); 
    }

    test($item, e) {
        console.log('_test', $(e.target).closest('.collapse-custom'));
        if (!$item.parent().hasClass('dropdown')) return;
        if ($(e.target).closest('.collapse-custom').length > 0) return;
        const _collapseItem = this.collapseItem.bind(this);
        _collapseItem($item);
        this.currIndex = undefined;
    }

    collapseItem(elem, currIndex) {
        const _getTransitionDuration = this.getTransitionDuration.bind(this);
        const _setClickOutsideClose = this.setClickOutsideClose.bind(this);
        const _test = this.test.bind(this);

        const $item = $(elem),
            $head = $item.find('.collapse-custom__head'),
            $body = $item.find('.collapse-custom__body');
            $body.css({"maxHeight": '0px'});
            $body.removeClass('t1 t2 t3');
            // $(document).off('click', _test);
            // document.removeEventListener('click', _test);
            
            
        setTimeout(() => {
            $item.removeClass('collapse-item-expanded')
            $head.attr('aria-expanded', 'false');
            $body.addClass('collapsed');
            $body.attr('aria-expanded', 'true');        
            this.isClicked = false;
            this.isExpanded = 0;
        }, _getTransitionDuration($body)); 
    }
            
    // test($item, currIndex, e) {
    //     console.log('_test');
    //     if (!$item.parent().hasClass('dropdown')) return;
    //     if ($(e.target).closest('.collapse-custom').length > 0) return;
    //     // console.log('_test', this.isExpanded);
        
    //     // console.log('_test', this.isExpanded);
    //     const _collapseItem = this.collapseItem.bind(this);
    //     // const _collapseAllActiveItems = this.collapseAllActiveItems.bind(this);
    //     // const $target = $(e.target);
    //     // if ($target.closest('.collapse-custom').length > 0) return;
    //     // console.log('test', $item);
    //     // $item.addClass('test');
    //     // const _collapsedItems = this.collapsedItems;
    //     _collapseItem($item);
    //     this.currIndex = undefined;
    //     // console.log('_test',this.currIndex)


    //     // console.log('hi test curr open', currIndex);
    //     // console.log('hi test', _collapsedItems);
    //     // const _isExpanded = this.isExpanded;
    //     // console.log('isExpanded', _isExpanded);
    // //    if (this.isExpanded > 0 ) console.log('isExpanded', this.isExpanded);



    //     // const _collapseItem = this.collapseItem.bind(this);
    //     // // const _collapsedItems = this.collapsedItems;
    //     // console.log(currentIndex);
    //     // _collapseItem(currentIndex);
    //     // currentIndex = undefined;
    // }


    setClickOutsideClose(e) {
        const _collapsedItems = this.collapsedItems;

        console.log('hi currentIndex new', _collapsedItems);
        if ($(e.target).closest('.collapse-custom').length > 0) return;
        console.log('hi currentIndex', this.collapsedItems);
        console.log('nada', this.currIndex)
        if ($target.closest('.collapse-custom').length > 0) return;

    }

    // setClickOutsideClose($item, e) {

    //     const _collapseItem = this.collapseItem.bind(this);
    //     const _expanditem = this.expandItem.bind(this);

    //     console.log('click active',$item);
    //     if (!$item.closest('.collapse-custom').hasClass('dropdown')) return;
    //     const $target = $(e.target);
    //     if ($target.closest('.collapse-custom').length > 0) return;
    //     _collapseItem($item);        
    // }

    collapseAllActiveItems(customCollapse) {
        const _getTransitionDuration = this.getTransitionDuration.bind(this);
        const outerThis = this;

        console.log('collapse', this);
        
        $(customCollapse).find('.collapse-custom__item').each(function (currIndex) {
            const clickedBody = $(this).find('.collapse-custom__body');
            $(clickedBody).css({"maxHeight": '0px'});
            $(clickedBody).removeClass('t1 t2 t3');
            
            setTimeout(() => {
                $(this).find('.collapse-custom__head').removeClass('collapse-item-expanded').attr('aria-expanded', 'false');
                $(clickedBody).addClass('collapsed');
                outerThis.isClicked = false;
            }, _getTransitionDuration(clickedBody)); 
        });
    }

    closeClickedCollapse(thisClickedItem) {
        const _getTransitionDuration = this.getTransitionDuration.bind(this);
        const clickedBody = $(thisClickedItem).siblings();
        const outerThisIsClicked = this.isClicked;

        // console.log('closeCollapsed',this);

        $(clickedBody).css({"maxHeight": '0px'});
        $(clickedBody).removeClass('t1 t2 t3');
        
        setTimeout(() => {
            $(thisClickedItem).closest('.collapse-custom__item').addClass('collapsed-item').attr('aria-expanded', 'false');
            $(clickedBody).addClass('collapsed');
            
            console.log('hi', outerThisIsClicked);
            this.isClicked = false;
        }, _getTransitionDuration(clickedBody)); 
    }

    openClickedCollapse(thisClickedItem) {
        const _getTransitionDuration = this.getTransitionDuration.bind(this);
        const clickedBody = $(thisClickedItem).siblings();

        console.log('open collapse',this);
        $(thisClickedItem).closest('.collapse-custom__item').addClass('collapse-item-expanded');
        $(thisClickedItem).attr('aria-expanded', 'true');
        $(clickedBody).removeClass('collapsed');
        $(clickedBody).css({"maxHeight": $(thisClickedItem).siblings().children().outerHeight()});
        $(clickedBody).addClass('t1 t2 t3');

        setTimeout(() => {
            this.isClicked = false;
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