$(document).ready(function () {
  $(".accordion-custom .accordion-custom__item").each((i, el) => {
    const headHeight = $(this).find(".accordion-custom__head").outerHeight();
    $(el).css("max-height", headHeight + "px");

    console.log(el);

    if ($(el).attr("data-acc-cust") === "expanded") {
      $(el).addClass("accordion-item-active");
      $(el)
        .find(".accordion-custom__head")
        .first()
        .addClass("accordion-head-active");
      const bodyHeight = $(el).find(".accordion-custom__inner").outerHeight();
      const initHeight =
        $(el).find(".accordion-custom__body").children().outerHeight() - 10;
      $(el)
        .find(".accordion-custom__head")
        .first()
        .attr("data-acc-cust-init-height", initHeight);
      $(el)
        .find(".accordion-custom__body")
        .first()
        .addClass("accordion-active")
        .css("max-height", initHeight + "px");
    }
  });

  $(".accordion-custom .accordion-custom__head").each(function () {
    $(this).on("click", function () {
      const item = $(this).closest(".accordion-custom__item");
      const headHeight = $(this).outerHeight();
      //   const bodyHeight = $(this).siblings().outerHeight();

      let clickedParentRestHeight = 0;
      let activeAccordHeight = $(this)
        .siblings()
        .find(".accordion-custom__inner")
        .outerHeight();
      console.log(headHeight + activeAccordHeight);
      activeAccordHeight = activeAccordHeight + headHeight;

      // AUTO COLLAPSE GROUPING
      if ($(this).parent().parent().attr("data-acc-cust") === "auto-toggle") {
        $(this)
          .parent()
          .siblings()
          .each((i, el) => {
            $(el).hasClass("accordion-item-active")
              ? $(el).removeClass("accordion-item-active").removeAttr("style")
              : null;
            $(el).find(".accordion-custom__head")
              ? $(el)
                  .find(".accordion-custom__head")
                  .removeClass("accordion-head-active")
              : null;
            $(el).find(".accordion-custom__body")
              ? $(el)
                  .find(".accordion-custom__body")
                  .removeClass("accordion-active")
                  .removeAttr("style")
              : null;
          });
      }

      // INIT LOAD
      if ($(this).attr("data-acc-cust-init-height") === undefined) {
        clickedParentRestHeight = $(this)
          .closest(".accordion-custom__body.accordion-active")
          .outerHeight();
        $(this).attr("data-acc-cust-init-height", clickedParentRestHeight);
      } else {
        clickedParentRestHeight = parseInt(
          $(this).attr("data-acc-cust-init-height")
        );
      }

      // ACTIVE ACCORDION
      if ($(this).hasClass("accordion-head-active")) {
        if ($(this).closest(".accordion-custom__body.accordion-active")) {
          $(this)
            .closest(".accordion-custom__body.accordion-active")
            .css("max-height", clickedParentRestHeight - 0);
        }

        $(this)
          .closest(".accordion-custom__item")
          .css("max-height", clickedParentRestHeight - 0);
        $(this).siblings().removeAttr("style").removeClass("accordion-active");
        $(this).removeClass("accordion-head-active");
        // $(this).siblings('accordion-active');
        return;
      }

      // IF NESTED ACCORD, INCREASE PARENT HEIGHT
      if ($(this).closest(".accordion-custom__body.accordion-active")) {
        $(this)
          .closest(".accordion-custom__body.accordion-active")
          .css(
            "max-height",
            activeAccordHeight + clickedParentRestHeight + "px"
          );
      }

      // NON-ACTIVE ACCORDION
      $(this)
        .parent()
        .toggleClass("accordion-item-active")
        .css({ "max-height": activeAccordHeight + "px" });
      $(this).toggleClass("accordion-head-active");
      //   $(this)
      //     .siblings()
      //     .toggleClass("accordion-active")
      //     .css({ "max-height": activeAccordHeight + "px" });
    });
  });
});
