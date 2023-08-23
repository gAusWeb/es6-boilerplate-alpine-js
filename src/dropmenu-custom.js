// $(document).ready(function () {
//     $(".dropmenu-custom").each(function (i) {
//         $(this).find(".dropmenu-custom__head").on("click", function (e) {
//             $(".dropmenu-custom").each(function (ind) {
//                 if (ind != i) {
//                     $(this).find(".dropmenu-custom__head").removeClass("active");
//                     $(this).find(".dropmenu-custom__head").siblings().removeClass("active");
//                 }
//             });
//             $(this).closest(".dropmenu-custom__head").toggleClass("active");
//             $(this).closest(".dropmenu-custom__head").siblings().toggleClass("active");
//         });
//     });

//     $(document).click(function (e) {
//         if ($(e.target).closest(".dropmenu-custom__head").length > 0)  return;
//         $(".dropmenu-custom").each(function () {
//             $(this).find(".dropmenu-custom__head").removeClass("active");
//             $(this).find(".dropmenu-custom__head").siblings().removeClass("active");
//         });
//     });
// });

// $(document).ready(function () {
//     $(".dropmenu-custom").each(function (i) {
//         $(this).find(".dropmenu-custom__head").on("click", function (e) {
//             $(".dropmenu-custom").each(function (ind) {
//                 if (ind != i) {
//                     $(this).find(".dropmenu-custom__head").siblings().slideUp(300, "swing");
//                 } else {
//                     $(this).find(".dropmenu-custom__head").siblings().slideToggle(300, "swing");
//                 }
//             });
//         });
//     });

//     $(document).click(function (e) {
//         if ($(e.target).closest(".dropmenu-custom__head").length > 0)  return;
//         $(".dropmenu-custom").each(function () {
//             $(this).find(".dropmenu-custom__head").siblings().slideUp();    
//         });
//     });
// });
$(document).ready(function () {
    // $(".dropmenu-custom").each(function (i) {
    //     $(this).find(".dropmenu-custom__head").on("click", function (e) {
    //         $(".dropmenu-custom").each(function (ind) {
    //             if (ind != i) {
    //                 $(this).find(".dropmenu-custom__head").siblings().slideUp(300, "swing");
    //             } else {
    //                 $(this).find(".dropmenu-custom__head").siblings().slideToggle(300, "swing");
    //             }
    //         });
    //     });
    // });

    // $(document).click(function (e) {
    //     if ($(e.target).closest(".dropmenu-custom__head").length > 0)  return;
    //     $(".dropmenu-custom").each(function () {
    //         $(this).find(".dropmenu-custom__head").siblings().slideUp();    
    //     });
    // });
});