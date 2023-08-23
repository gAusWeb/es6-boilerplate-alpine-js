export default function () {
    $(document).ready(function () {
        const navWrapper = $(".navigation__mobile");
        const allNavItems = $(navWrapper).find("> ul > li > ul");
        $(navWrapper)
            .find("> ul > li button")
            .each(function () {
                const navItem = $(this);

                navItem.on("click", function () {
                    console.log(allNavItems);

                    const navItem = $(this);
                    console.log(navItem[0]);
                    $(navItem).siblings().removeAttr("style").addClass("h-0");
                    // const navItemAnchor = $(navItem).find('> a');
                    // const navItemSubmenu = $(navItem).find('> ul');

                    // if (navItemSubmenu.length > 0) {
                    //     navItemAnchor.on('click', function (e) {
                    //         e.preventDefault();
                    //     });

                    //     navItemSubmenu.toggleClass('hidden');
                    // }
                });
            });
    });
}
