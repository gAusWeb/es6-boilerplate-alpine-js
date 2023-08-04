import Throttle from "./throttle";

export default function () {
    $(document).ready(function () {
        // console.log("hi");
        const subscribePanel = $(".subscribe-now-panel");
        if (subscribePanel.length < 1) return;

        const appendDrawTerms = (el) => {
            const drawTerms = $(el).find(".subscribe-now-panel__tcs");
            const drawTermsAnchor = $(drawTerms).find("a");

            if (drawTermsAnchor) {
                if (window.matchMedia("(max-width: 460px)").matches) {
                    // $(drawTerms).css("transform")
                    if ($(drawTerms).css("transform") === "translateX(-50%)")
                        return;
                    $(drawTerms).css({
                        left: "50%",
                        bottom: "1.5rem",
                        top: "auto",
                        transform: "translateX(-50%)",
                    });
                } else {
                    const rightCol = $(el).find(
                        ".subscribe-now-panel__column-right"
                    );

                    if (rightCol.length < 1) return;

                    // const innerWrap = subscribePanel
                    //     .find(".subscribe-now-panel__inner-wrapper")
                    //     .css("padding-left");

                    // console.log("innerWrap", innerWrap);

                    const rightColLeftPos =
                        Math.round($(rightCol).position().left) + "px";

                    const rightColHeight = Math.round(
                        $(rightCol).outerHeight()
                    );

                    const rightColTopPos = Math.round(
                        $(rightCol).position().top
                    );
                    // let rightColXPos = Math.round(rightCol.offset().left - 8);
                    // console.log("rightColXPos", rightColXPos);

                    // console.log("rightColLeftPos", rightColLeftPos);
                    // console.log("$positionLeft", $(rightCol).position().left);
                    // console.log("$positionBott", $(rightCol).position().top);
                    // console.log("rightColHeight", rightColHeight);

                    // console.log('',
                    //     subscribePanel
                    //         .find(".subscribe-now-panel__anchor-inner")
                    //         .offset().left
                    // );
                    // console.log("rightColXPos", rightColXPos);
                    // console.log("rightColXPos", rightColHeight);
                    // console.log("innerWrap", innerWrap);
                    // console.log("innerWrap", rightCol.offset());
                    // console.log((innerWrap - rightColHeight) / 2);
                    // console.log("debouncedResizeHandler");

                    // save into const, a calculation of padding-left of .subscribe-now-panel__inner-wrapper

                    // get padding left amount of .subscribe-now-panel__inner-wrapper
                    //

                    if ($(drawTerms).css("transform") != "none")
                        $(drawTerms).removeAttr("style");

                    // return;
                    // $(drawTerms).attr("style") &&
                    //     $(drawTerms).removeAttr("style");

                    $(drawTerms).css({
                        left: rightColLeftPos,
                        top: rightColTopPos + rightColHeight - 20 + "px",
                    });

                    /*
                    $(drawTerms).css({
                        left: Math.round($(rightCol).position().left) + "px",
                        top:
                            Math.round($(rightCol).position().top) +
                            rightColHeight -
                            20 +
                            "px",
                        // top:
                        //     Math.round(rightCol.offset().top) +
                        //     rightColHeight +
                        //     "px",
                        // bottom: "initial",
                        // bottom:
                        //     (innerWrap - rightColHeight) / 2 +
                        //     "px",
                        // transform: "translateX(0%)",
                    });
                    */
                }

                // console.log("rightColXPos", rightColXPos);

                $(drawTermsAnchor).attr("style") &&
                    $(drawTermsAnchor).removeAttr("style");
            }
        };

        setTimeout(() => {
            $(subscribePanel).each((undefined, el) => {
                $(el).find(".subscribe-now-panel__tcs").length > 0 &&
                    appendDrawTerms(el);
            });
        }, 50);

        // add debounce to below function
        // function debounce(func, wait, immediate) {
        //     var timeout;
        //     return function () {
        //         var context = this,
        //             args = arguments;
        //         var later = function () {
        //             timeout = null;
        //             if (!immediate) func.apply(context, args);
        //         };
        //         var callNow = immediate && !timeout;
        //         clearTimeout(timeout);
        //         timeout = setTimeout(later, wait);
        //         if (callNow) func.apply(context, args);
        //     };
        // }

        const debouncedResizeHandler = Throttle(function () {
            $(subscribePanel).each((undefined, el) => {
                $(el).find(".subscribe-now-panel__tcs").length > 0 &&
                    appendDrawTerms(el);
            });
        }, 100);

        $(window).on("resize", debouncedResizeHandler);

        // $(window).resize(function() {
        //   // const subscribePanel = $('.subscribe-now-panel');
        //   console.log('subscribe panel', subscribePanel);
        //   // if (subscribePanel.length < 1) return;

        //   $(subscribePanel).each((undefined, el) => {
        //     $(el).find('.subscribe-now-panel__tcs').length > 0 && appendDrawTerms(el);
        //   });
        // });
    });
}
