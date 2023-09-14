import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import multiMonth from "@fullcalendar/multimonth";

// const calendarEl = document.getElementById('calendar')
// import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

// let calendar = new Calendar(calendarEl, {
//   plugins: [ resourceTimelinePlugin ],
//   initialView: 'resourceTimeline',
//   resources: [
//     // your resource list
//   ]
// });

document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");

    var calendar = new Calendar(calendarEl, {
        plugins: [
            dayGridPlugin,
            multiMonth,
            // any other plugins
        ],
        initialView: "multiMonth",
        duration: { months: 3 },
        // height: 546,
        aspectRatio: 1.335,
        // visibleRange: {
        //   start: 564,
        //   end: 654654
        // }

        events: [
            {
                start: "2023-09-02",
                end: "2023-09-02",
                allDay: true,
                title: "WIN <b>$5k</b>",
                classNames: ["pink"],
            },
            {
                start: "2023-09-01",
                end: "2023-09-01",
                allDay: true,
                title: "WIN <b>$5k</b>",
                classNames: ["pink"],
            },
            {
                start: "2023-09-03",
                end: "2023-09-03",
                allDay: true,
                title: "WIN <b>$100k</b>",
                classNames: ["green"],
            },
            {
                start: "2023-09-20",
                
                allDay: true,
                title: "WIN <b>$100k</b>",
                classNames: ["green"],
            },
            {
                start: "2023-09-21",
                
                allDay: true,
                title: "WIN <b>$100k</b>",
                classNames: ["vip"],
            },
            {
                start: "2023-09-22",
                
                allDay: true,
                title: "WIN <b>$100k</b>",
                classNames: ["pink"],
            },

        ],
        eventContent: function (arg) {
            let el = document.createElement("div");

            el.innerHTML = arg.event.title;
            let arrayOfDomNodes = [el];
            return { domNodes: arrayOfDomNodes };
        },
        validRange: {
            start: "2023-08-01",
            end: "2024-08-01",
        },
    });

    calendar.render();

    function calculateSize() {
        switch (true) {
            case window.innerWidth < 768:
                calendar.setOption("duration", { months: 1 });
                // calendar.setOption("height", "546");
                
                break;
            case window.innerWidth >= 768 && window.innerWidth <= 1024:
                calendar.setOption("duration", { months: 2 });
                calendar.setOption("aspectRatio", 1.335);
                calendar.setOption("height", 546);

        //         height: 546,
        // aspectRatio: 1.335,
                break;
            default:
                //calendar.gotoDate(new Date());
                var currentDate = calendar.getDate();
                console.log(currentDate);
                var maxDate = new Date(2024, 6, 1); // same as validRange end minus 3 months
                if (currentDate >= maxDate) {
                    calendar.prev();
                }
                calendar.setOption("duration", { months: 3 });
                calendar.setOption("aspectRatio", 1.335);
                calendar.setOption("height", 546);
                break;
        }
        calendar.updateSize();
    }
    calculateSize();

    $(window).resize(calculateSize);
});
