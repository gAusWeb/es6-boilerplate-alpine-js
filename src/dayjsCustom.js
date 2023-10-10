import dayjs from "dayjs";
// import axios from "axios";

let currentRange;
const weekday = require("dayjs/plugin/weekday");
const weekOfYear = require("dayjs/plugin/weekOfYear");
var isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(weekday);
dayjs.extend(weekOfYear);
dayjs.extend(isBetween);

$(document).ready(function () {
    const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const START_DATE = dayjs().subtract(1, "month").format("YYYY-MM");
    const END_DATE = dayjs().add(11, "month").format("YYYY-MM");
    const RANGE_START_YEAR_INT = parseInt(dayjs().format("YY"));
    const RANGE_START_MONTH_INT = parseInt(
        dayjs().subtract(1, "month").format("MM")
    );
    const RANGE_END_YEAR_INT = parseInt(dayjs().add(11, "month").format("YY"));
    const RANGE_END_MONTH_INT = parseInt(dayjs().add(11, "month").format("MM"));
    const END_YEAR = parseInt(dayjs().add(11, "month").format("YYYY"));
    const END_MONTH = parseInt(dayjs().add(11, "month").format("M"));
    const INITIAL_YEAR = dayjs().format("YYYY");
    const INITIAL_MONTH = dayjs().format("M");
    const validDatesRange = {
        start: START_DATE,
        end: END_DATE,
    };
    const validDatesRangeInt = {
        startYear: RANGE_START_YEAR_INT,
        startMonth: RANGE_START_MONTH_INT,
        endYear: RANGE_END_YEAR_INT,
        endMonth: RANGE_END_MONTH_INT,
    };
    let selectedMonth = dayjs(new Date(INITIAL_YEAR, INITIAL_MONTH - 1));
    let currentMonthDays;
    let previousMonthDays;
    let nextMonthDays;

    // const localDrawData = [
    //     {
    //         month: 8,
    //         events: [
    //             {
    //                 day: 2,
    //                 drawType: 1,
    //                 drawText: "409",
    //             },
    //             {
    //                 day: 3,
    //                 drawType: 3,
    //                 drawText: "WIN <strong>$5K</strong>",
    //             },
    //             {
    //                 day: 10,
    //                 drawType: 3,
    //                 drawText: "WIN <strong>$5K</strong>",
    //             },
    //             {
    //                 day: 16,
    //                 drawType: 2,
    //                 drawText: "410",
    //             },
    //             {
    //                 day: 17,
    //                 drawType: 3,
    //                 drawText: "WIN <strong>$5K</strong>",
    //             },
    //             {
    //                 day: 15,
    //                 drawType: 4,
    //                 drawText: "WIN <strong>$100K</strong>",
    //             },
    //             {
    //                 day: 24,
    //                 drawType: 3,
    //                 drawText: "WIN <strong>$5K</strong>",
    //             },
    //             {
    //                 day: 30,
    //                 drawType: 1,
    //                 drawText: "410",
    //             },
    //             {
    //                 day: 31,
    //                 drawType: 3,
    //                 drawText: "WIN <strong>$5K</strong>",
    //             },
    //         ]
    //     },
    //     {
    //         month: 9,
    //         events: [
    //             {
    //                 day: 7,
    //                 drawType: 3,
    //                 drawText: "WIN <strong>$5K</strong>",
    //             },
    //             {
    //                 day: 14,
    //                 drawType: 3,
    //                 drawText: "WIN <strong>$5K</strong>",
    //             },
    //             {
    //                 day: 13,
    //                 drawType: 2,
    //                 drawText: "409",
    //             },
    //             {
    //                 day: 21,
    //                 drawType: 3,
    //                 drawText: "WIN <strong>$5K</strong>",
    //             },
    //             {
    //                 day: 27,
    //                 drawType: 1,
    //                 drawText: "410",
    //             },
    //             {
    //                 day: 28,
    //                 drawType: 3,
    //                 drawText: "WIN <strong>$5K</strong>",
    //             },
    //         ]
    //     },
    //     {
    //         month: 10,
    //         events: [
    //             {
    //                 day: 5,
    //                 drawType: 3,
    //                 drawText: "WIN <strong>$5K</strong>",
    //             },
    //             {
    //                 day: 11,
    //                 drawType: 1,
    //                 drawText: "407",
    //             },
    //             {
    //                 day: 12,
    //                 drawType: 3,
    //                 drawText: "WIN <strong>$5K</strong>",
    //             },
    //             {
    //                 day: 25,
    //                 drawType: 2,
    //                 drawText: "409",
    //             },
    //             {
    //                 day: 19,
    //                 drawType: 3,
    //                 drawText: "WIN <strong>$5K</strong>",
    //             },
    //             {
    //                 day: 26,
    //                 drawType: 3,
    //                 drawText: "WIN <strong>$5K</strong>",
    //             },
    //         ]
    //     }
    // ];

    // https://httpstat.us/404
    // const url = "https://httpstat.us/404";

    // const url = "http://localhost:3000/calendarData";

    const url404 = "https://httpstat.us/404";

    const url = "http://localhost:3000/drawDates";
    const loadingSpinner = document.querySelector(".loading-spinner-wrapper");

    const calendarWrapper = document.querySelector(".upcoming-draws-calendar");

    const btnSelectorsWrapper = document.createElement("div");
    btnSelectorsWrapper.classList.add(
        "upcoming-draws-calendar__btn-selectors-wrapper"
    );

    const calendarMonthsWrapper = document.createElement("div");
    calendarMonthsWrapper.classList.add(
        "upcoming-draws-calendar__months-wrapper"
    );

    const prevMonthSelectorEl = document.createElement("button");
    prevMonthSelectorEl.classList.add(
        "upcoming-draws-calendar__date-toggle-selector",
        "prev"
    );
    prevMonthSelectorEl.innerText = "<";

    const nextMonthSelectorEl = document.createElement("button");
    nextMonthSelectorEl.classList.add(
        "upcoming-draws-calendar__date-toggle-selector",
        "next"
    );
    nextMonthSelectorEl.innerText = ">";

    // async function getVIPCart() {
    //     $.ajax({
    //         url: url,
    //         method: "GET",
    //         contentType: "application/json; charset=utf-8",
    //         dataType: "json",
    //         success: function success(result) {
    //             console.log(result);
    //             // $(document.body).append(result.Html);
    //             // VIPCarousel();
    //         },
    //         fail: function (error) {
    //             // Need to handle fail scenario
    //             console.log(error);
    //         },
    //     });
    // }

    // getVIPCart();

    // async function getCalendarEventsRequest() {
    //     calendarMonthsWrapper.innerHTML = '';
    //     prevMonthSelectorEl.style.visibility = 'hidden';
    //     nextMonthSelectorEl.style.visibility = 'hidden';
    //     loadingSpinner.style.display = 'block';

    //     try {
    //         const response = await axios.get(url);
    //         const localDrawData = response.data;
    //         createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange, localDrawData);
    //         loadingSpinner.style.display = 'none';
    //     }
    //     catch (error) {
    //         console.log(error);
    //         calendarWrapper.innerHTML = `
    //         <div class="upcoming-draws-calendar__error-message">
    //             <p>There was an error loading the calendar. Please try to <a href="javascript:window.location.href=window.location.href">refresh this page</a>, or again later.</p>
    //             <p>Should problems persist, please contact <a href="mailto:website@rslunion.com.au?subject=Mail from Our Site">website@rslunion.com.au</a></p>
    //         </div>
    //         `;
    //         loadingSpinner.style.display = 'none';
    //     }
    // }
    async function getCalendarEventsRequest() {
        calendarMonthsWrapper.innerHTML = "";
        prevMonthSelectorEl.style.visibility = "hidden";
        nextMonthSelectorEl.style.visibility = "hidden";
        loadingSpinner.style.display = "block";

        $.ajax({
            url: url,
            method: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function success(response) {
                // console.log(response);
                const localDrawData = response;
                createCalendar(
                    selectedMonth.format("YYYY"),
                    selectedMonth.format("M"),
                    currentRange,
                    localDrawData
                );
                loadingSpinner.style.display = "none";
            },
            fail: function (error) {
                // Need to handle fail scenario
                console.log(error);
                calendarWrapper.innerHTML = `
              <div class="upcoming-draws-calendar__error-message">
                  <p>There was an error loading the calendar. Please try to <a href="javascript:window.location.href=window.location.href">refresh this page</a>, or again later.</p>
                  <p>Should problems persist, please contact <a href="mailto:website@rslunion.com.au?subject=Mail from Our Site">website@rslunion.com.au</a></p>
              </div>
              `;
                loadingSpinner.style.display = "none";
            },
        });

        // try {
        //     const response = await axios.get(url);
        //     const localDrawData = response.data;
        //     createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange, localDrawData);
        //     loadingSpinner.style.display = 'none';
        // }
        // catch (error) {
        //     console.log(error);
        //     calendarWrapper.innerHTML = `
        //     <div class="upcoming-draws-calendar__error-message">
        //         <p>There was an error loading the calendar. Please try to <a href="javascript:window.location.href=window.location.href">refresh this page</a>, or again later.</p>
        //         <p>Should problems persist, please contact <a href="mailto:website@rslunion.com.au?subject=Mail from Our Site">website@rslunion.com.au</a></p>
        //     </div>
        //     `;
        //     loadingSpinner.style.display = 'none';
        // }
    }

    function createCalendar(
        year = INITIAL_YEAR,
        month = INITIAL_MONTH,
        calendarRange = 1,
        localDrawData = null
    ) {
        prevMonthSelectorEl.style.visibility = "visible";
        nextMonthSelectorEl.style.visibility = "visible";

        btnSelectorsWrapper.appendChild(prevMonthSelectorEl);
        btnSelectorsWrapper.appendChild(nextMonthSelectorEl);
        calendarWrapper.appendChild(btnSelectorsWrapper);

        for (let i = 0; i < calendarRange; i++) {
            const calendarMonthWrapper = document.createElement("div");
            calendarMonthWrapper.classList.add(
                "upcoming-draws-calendar__month-wrapper"
            );

            const calendarMonthHeader = document.createElement("div");
            calendarMonthHeader.classList.add(
                "upcoming-draws-calendar__month-header"
            );
            calendarMonthHeader.innerText = dayjs(
                new Date(year, month - 1 + i)
            ).format("MMMM YYYY");

            const daysOfWeekEl = document.createElement("ol");
            const calendarDaysEl = document.createElement("ol");

            daysOfWeekEl.classList.add("upcoming-draws-calendar__days-of-week");
            calendarDaysEl.classList.add("upcoming-draws-calendar__days-grid");
            calendarMonthWrapper.appendChild(calendarMonthHeader);

            WEEKDAYS.forEach((weekday) => {
                const weekDayElement = document.createElement("li");
                daysOfWeekEl.appendChild(weekDayElement);
                weekDayElement.innerText = weekday;
            });

            calendarMonthsWrapper.appendChild(calendarMonthWrapper);
            calendarWrapper.appendChild(calendarMonthsWrapper);
            calendarMonthWrapper.appendChild(daysOfWeekEl);
            calendarMonthWrapper.appendChild(calendarDaysEl);

            currentMonthDays = createDaysForCurrentMonth(
                year,
                parseInt(month) + i,
                dayjs(`${year}-${month}-01`).daysInMonth()
            );

            previousMonthDays = createDaysForPreviousMonth(year, month);
            nextMonthDays = createDaysForNextMonth(year, month);

            const days = [
                ...previousMonthDays,
                ...currentMonthDays,
                ...nextMonthDays,
            ];
            let monthlyDraws;

            if (localDrawData) {
                const newCurrentMonthsDraws = localDrawData.filter(
                    (element) =>
                        element.drawDate.split("-")[0] ==
                            dayjs(selectedMonth)
                                .add(i, "month")
                                .format("YYYY") &&
                        element.drawDate.split("-")[1] ==
                            dayjs(selectedMonth).add(i, "month").format("MM") &&
                        element
                );

                const openDrawDate = localDrawData.filter(
                    (element) =>
                        element.openDate.split("-")[0] ==
                            dayjs(selectedMonth)
                                .add(i, "month")
                                .format("YYYY") &&
                        element.openDate.split("-")[1] ==
                            dayjs(selectedMonth).add(i, "month").format("MM") &&
                        element.drawType !== "Q " &&
                        element.drawType !== "W " &&
                        element
                );

                // console.log("opendrawDate", openDrawDate);

                const drawDate = localDrawData.filter(
                    (element) =>
                        element.drawDate.split("-")[0] ==
                            dayjs(selectedMonth)
                                .add(i, "month")
                                .format("YYYY") &&
                        element.drawDate.split("-")[1] ==
                            dayjs(selectedMonth).add(i, "month").format("MM") &&
                        element
                );

                // console.log('openDrawDate', openDrawDate);
                // console.log("newCurrentMonthsDraws", newCurrentMonthsDraws);

                // const currentMonthDraws = localDrawData.filter((element) => (
                //     element.year == dayjs(selectedMonth).add(i, "month").format("YYYY") &&
                //     element.month == dayjs(selectedMonth).add(i, "month").format("M")) &&
                //     element
                // );

                // if (currentMonthDraws.length > 0) {
                //     const currentMonthDrawsEvents = currentMonthDraws.map((element) => element.events);
                //     monthlyDraws = currentMonthDrawsEvents.flat();
                // }

                let drawData = { test: null, test2: null };

                days.forEach((day) => {
                    if (
                        newCurrentMonthsDraws &&
                        newCurrentMonthsDraws.length > 0
                    ) {
                        newCurrentMonthsDraws.every((draw) => {
                            if (
                                day.dayOfMonth ==
                                draw.drawDate.split("-")[2].split("T")[0]
                            ) {
                                // console.log(
                                //     "draw",
                                //     draw.drawDate.split("-")[2].split("T")[0]
                                // );

                                drawData = {
                                    ...drawData,
                                    drawDate: {
                                        drawType: draw.drawType.trim(),
                                        drawText: draw.drawDescription,
                                        isVIP: draw.isVIPOnly,
                                        drawName: draw.drawName,
                                        drawDate: false,
                                    },
                                };
                                return false;
                            } else {
                                drawData = { ...drawData, drawDate: null };
                                return true;
                            }
                        });
                    }
                    if (openDrawDate && openDrawDate.length > 0) {
                        openDrawDate.every((draw) => {
                            if (
                                day.dayOfMonth ==
                                draw.openDate.split("-")[2].split("T")[0]
                            ) {
                                // console.log("open draw type", draw.drawType);
                                // console.log("open draw ", draw.drawType);

                                drawData = {
                                    ...drawData,
                                    drawOpenDate: {
                                        drawType: draw.drawType.trim(),
                                        drawText: draw.drawDescription,
                                        isVIP: draw.isVIPOnly,
                                        drawName: draw.drawName,
                                        drawOpenDate: true,
                                    },
                                };
                                return false;
                            } else {
                                drawData = { ...drawData, drawOpenDate: null };
                                return true;
                            }
                        });
                    }
                    appendDay(day, drawData, calendarMonthWrapper);
                });
            }
        }
    }

    function appendDay(day, drawData = null, calendarMonthWrapper) {
        const dayElement = document.createElement("li");
        const dayElementClassList = dayElement.classList;
        dayElementClassList.add("calendar-day");

        if (drawData.drawDate || drawData.drawOpenDate) {
            const drawTextWrapper = document.createElement("span");
            drawTextWrapper.classList.add("upcoming-draws-calendar__draw-text");

            const drawText1 = "WIN <strong>$5K</strong>";
            const drawText2 = "WIN <strong>$100K</strong>";
            let drawText3;

            if (drawData.drawDate) {
                // console.log('drawData.test', drawData.test);
                drawText3 = `<strong>${drawData.drawDate.drawName}</strong>`;

                // console.log("drawType", drawData.drawDate.drawType);
                switch (drawData.drawDate.drawType) {
                    case "W": // WIN 5k
                        dayElementClassList.add("draw-day", `draw-type-1`);
                        drawTextWrapper.innerHTML = drawText1;
                        break;

                    case "Q": // WIN 100k
                        dayElementClassList.add("draw-day", `draw-type-2`);
                        drawTextWrapper.innerHTML = drawText2;
                        break;

                    case "H": // WIN a Home vip/non-vip
                        dayElementClassList.add("draw-day", `draw-type-5`);
                        let updatedEventTitle = drawText3
                            .replace("AU", "")
                            .replace("L", "");

                        if (drawData.drawDate.isVIP) {
                            dayElementClassList.add("vip");
                            const vipIcon = document.createElement("div");

                            vipIcon.classList.add("vip-icon");
                            vipIcon.innerHTML =
                                '<img src="./assets/images/crown.svg" alt="vip-icon" />';
                            // drawTextWrapper.innerHTML = "draw type 5";
                            drawTextWrapper.appendChild(vipIcon);
                        } else {
                            updatedEventTitle = `<span>VIP</span> ${updatedEventTitle}`;
                        }
                        drawTextWrapper.innerHTML += updatedEventTitle;
                        break;

                    default: // Standard draws VIP/Non VIP
                        // drawData.isVIP ? dayElementClassList.add('draw-day', `draw-type-3`) :
                        // dayElementClassList.add("draw-day", `draw-type-4`);
                        // drawTextWrapper.innerHTML = drawText3
                        //     .replace("AU", "")
                        //     .replace("L", "");
                        break;
                }
            }

            if (drawData.drawOpenDate) {
                // console.log('drawData.test2', drawData.test2);
                // const drawText = drawData.drawOpenDate.drawText.substr(drawData.drawOpenDate.drawText.length - 3);
                // console.log('drawText', drawData.drawOpenDate.drawText.replace('AU', '').replace('L', ''););

                const drawText = drawData.drawOpenDate.drawText
                    .replace("AU", "")
                    .split(" ")[0];

                drawText3 = `<strong>${drawText}</strong>`;

                if (drawData.drawOpenDate.isVIP) {
                    dayElementClassList.add("draw-day", `draw-type-3`, "vip");
                    const vipIcon = document.createElement("div");
                    // vipIcon.setAttribute('src', '/assets/images/vip-icon.svg');

                    vipIcon.classList.add("vip-icon");
                    vipIcon.innerHTML =
                        '<img src="./assets/images/crown.svg" alt="vip-icon" />';

                    drawTextWrapper.appendChild(vipIcon);
                    drawTextWrapper.innerHTML += drawText3;
                } else {
                    dayElementClassList.add("draw-day", `draw-type-3`);
                    drawTextWrapper.innerHTML += drawText3
                        .replace("AU", "")
                        .replace("L", "");
                }

                // drawTextWrapper.innerHTML = drawText3.replace('AU', '').replace('L', '');
            }

            // console.log('drawText3', drawText3);

            const drawWrapper = document.createElement("div");
            drawWrapper.classList.add("upcoming-draws-calendar__draw-wrapper");

            drawWrapper.appendChild(drawTextWrapper);
            dayElement.appendChild(drawWrapper);
        }

        // if (drawData) {
        //     // console.log('drawData', drawData);
        //     const drawText1 = "WIN <strong>$5K</strong>";
        //     const drawText2 = "WIN <strong>$100K</strong>";
        //     const drawText3 = `<strong>${drawData.drawName}</strong>`;

        //     const drawTextWrapper = document.createElement("span");
        //     drawTextWrapper.classList.add('upcoming-draws-calendar__draw-text');

        //     switch (drawData.drawType) {
        //         case "W": // WIN 5k
        //             dayElementClassList.add('draw-day', `draw-type-1`);
        //             drawTextWrapper.innerHTML = drawText1
        //             break

        //         case "Q": // WIN 100k
        //             dayElementClassList.add('draw-day', `draw-type-2`);
        //             drawTextWrapper.innerHTML = drawText2
        //             break

        //         default: // Standard draws VIP/Non VIP
        //             drawData.isVIP ? dayElementClassList.add('draw-day', `draw-type-3`) :
        //             dayElementClassList.add('draw-day', `draw-type-4`);
        //             drawTextWrapper.innerHTML = drawText3.replace('AU', '').replace('L', '');
        //             break;
        //     }

        //     const drawWrapper = document.createElement("div");
        //     drawWrapper.classList.add('upcoming-draws-calendar__draw-wrapper');

        //     drawWrapper.appendChild(drawTextWrapper);
        //     dayElement.appendChild(drawWrapper);
        // }

        const dayOfMonthElement = document.createElement("span");
        dayOfMonthElement.classList.add("date-of-month");
        dayOfMonthElement.innerText = day.dayOfMonth;
        dayElement.appendChild(dayOfMonthElement);

        if (!day.isCurrentMonth) {
            dayElementClassList.add("not-current-month-day");
        }

        calendarMonthWrapper
            .querySelector(".upcoming-draws-calendar__days-grid")
            .appendChild(dayElement);
    }

    function getNumberOfDaysInMonth(year, month) {
        return dayjs(`${year}-${month}-01`).daysInMonth();
    }

    function createDaysForCurrentMonth(year, month) {
        return [...Array(getNumberOfDaysInMonth(year, month))].map(
            (day, index) => {
                return {
                    date: dayjs(`${year}-${month}-${index + 1}`).format(
                        "YYYY-MM-DD"
                    ),
                    dayOfMonth: index + 1,
                    isCurrentMonth: true,
                };
            }
        );
    }

    function createDaysForPreviousMonth(year, month) {
        const firstDayOfTheMonthWeekday = getWeekday(currentMonthDays[0].date);
        const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, "month");
        // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
        const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
            ? firstDayOfTheMonthWeekday
            : 0; // or EG. set to 6 if calendar-day starts on a monday

        const previousMonthLastMondayDayOfMonth = dayjs(
            currentMonthDays[0].date
        )
            .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
            .date();

        return [...Array(visibleNumberOfDaysFromPreviousMonth)].map(
            (day, index) => {
                return {
                    date: dayjs(
                        `${previousMonth.year()}-${previousMonth.month() + 1}-${
                            previousMonthLastMondayDayOfMonth + index
                        }`
                    ).format("YYYY-MM-DD"),
                    dayOfMonth: previousMonthLastMondayDayOfMonth + index,
                    isCurrentMonth: false,
                };
            }
        );
    }

    function createDaysForNextMonth(year, month) {
        const lastDayOfTheMonthWeekday = getWeekday(
            `${year}-${month}-${currentMonthDays.length}`
        );
        const nextMonth = dayjs(`${year}-${month}-01`).add(1, "month");
        const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
            ? 7 - lastDayOfTheMonthWeekday
            : lastDayOfTheMonthWeekday;

        return [...Array(visibleNumberOfDaysFromNextMonth)].map(
            (day, index) => {
                return {
                    date: dayjs(
                        `${nextMonth.year()}-${nextMonth.month() + 1}-${
                            index + 1
                        }`
                    ).format("YYYY-MM-DD"),
                    dayOfMonth: index + 1,
                    isCurrentMonth: false,
                };
            }
        );
    }

    function getWeekday(date) {
        return dayjs(date).weekday();
    }

    function initMonthSelectors() {
        prevMonthSelectorEl.addEventListener(
            "click",
            prevMonthSelectorClickHandler
        );
        nextMonthSelectorEl.addEventListener(
            "click",
            nextMonthSelectorClickHandler
        );
    }

    function getNextToggledDate(toggleDirection = null) {
        const directionalToggleAmount =
            toggleDirection === "prev"
                ? Math.abs(currentRange) * -1
                : currentRange;
        return dayjs(selectedMonth)
            .add(directionalToggleAmount, "month")
            .format("YYYY-MM");
    }

    function isToggleAmountWithinRange(toggleDirection = null) {
        if (getNextToggledDate(toggleDirection) == validDatesRange.start)
            return false;
        return dayjs(getNextToggledDate(toggleDirection)).isBetween(
            validDatesRange.start,
            validDatesRange.end,
            null,
            "[]"
        );
    }

    function nextToggledLastShownMonth() {
        return dayjs(selectedMonth).add(
            currentRange + currentRange - 1,
            "month"
        );
    }

    function isNextToggleWithinRange() {
        if (
            parseInt(nextToggledLastShownMonth().format("YY")) ===
                validDatesRangeInt.endYear &&
            parseInt(nextToggledLastShownMonth().format("MM")) >=
                validDatesRangeInt.endMonth
        ) {
            return false;
        } else {
            return true;
        }
    }

    function amountOfMonthsToRender() {
        const amountPassedLimit =
            parseInt(selectedMonth.format("M")) - validDatesRangeInt.startMonth;
        return amountPassedLimit;
    }

    function nextToggleAmountPassedLimit() {
        let amountPassedLimit = 0;
        if (
            parseInt(nextToggledLastShownMonth().format("M")) ==
            validDatesRangeInt.endMonth
        ) {
            amountPassedLimit = currentRange;
        }
        if (
            parseInt(nextToggledLastShownMonth().format("M")) >
            validDatesRangeInt.endMonth
        ) {
            amountPassedLimit =
                currentRange -
                (parseInt(nextToggledLastShownMonth().format("M")) -
                    validDatesRangeInt.endMonth);
        }
        return amountPassedLimit;
    }

    const prevMonthSelectorClickHandler = (e) => {
        if ($(nextMonthSelectorEl).attr("style"))
            $(nextMonthSelectorEl).removeAttr("style");
        if (isToggleAmountWithinRange("prev")) {
            selectedMonth = dayjs(selectedMonth).subtract(
                currentRange,
                "month"
            );
        } else {
            $(prevMonthSelectorEl).css("display", "none");
            selectedMonth = dayjs(selectedMonth).subtract(
                amountOfMonthsToRender(),
                "month"
            );
        }
        // createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
        getCalendarEventsRequest(url);
    };

    const nextMonthSelectorClickHandler = (e) => {
        if ($(prevMonthSelectorEl).attr("style"))
            $(prevMonthSelectorEl).removeAttr("style");
        if (isNextToggleWithinRange()) {
            selectedMonth = dayjs(selectedMonth).add(currentRange, "month");
        } else {
            selectedMonth = dayjs(selectedMonth).add(
                nextToggleAmountPassedLimit(),
                "month"
            );
            $(nextMonthSelectorEl).css("display", "none");
        }
        // createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
        getCalendarEventsRequest(url);
    };

    const resizeHandler = () => {
        switch (true) {
            case $(window).width() < 768:
                if (currentRange === 1) return;
                if (selectedMonth.format("YYYY") == END_YEAR) {
                    if (parseInt(selectedMonth.format("M")) < END_MONTH) {
                        $(nextMonthSelectorEl).removeAttr("style");
                    }
                }
                currentRange = 1;

                // createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                getCalendarEventsRequest(url);

                break;
            case $(window).width() >= 768 && $(window).width() < 1140:
                if (currentRange === 2) return;
                currentRange = 2;

                // createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                getCalendarEventsRequest(url);

                if (selectedMonth.format("YYYY") == END_YEAR) {
                    const nextSelectedDate = dayjs(selectedMonth).add(
                        currentRange,
                        "month"
                    );
                    if (nextSelectedDate.format("M") > END_MONTH) {
                        $(nextMonthSelectorEl).css("display", "none");
                    } else {
                        $(nextMonthSelectorEl).removeAttr("style");
                    }

                    if (selectedMonth.format("M") == END_MONTH) {
                        selectedMonth = dayjs(selectedMonth).subtract(
                            1,
                            "month"
                        );

                        // createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                        getCalendarEventsRequest(url);
                    }
                }
                break;
            default:
                if (currentRange === 3) return;
                if (selectedMonth.format("YYYY") == END_YEAR) {
                    if (
                        parseInt(selectedMonth.format("M")) + currentRange >
                        END_MONTH
                    ) {
                        selectedMonth = dayjs(selectedMonth).subtract(
                            1,
                            "month"
                        );
                        $(nextMonthSelectorEl).removeAttr("style");
                    }
                }
                currentRange = 3;
                if (selectedMonth.format("YYYY") == END_YEAR) {
                    if (
                        parseInt(selectedMonth.format("M")) + currentRange >
                        END_MONTH
                    ) {
                        nextMonthSelectorEl.style.display = "none";
                        const amountPassed =
                            currentRange -
                            (parseInt(selectedMonth.format("M")) +
                                currentRange -
                                END_MONTH);

                        if (
                            parseInt(selectedMonth.format("M")) +
                                currentRange -
                                1 ==
                            END_MONTH
                        ) {
                            createCalendar(
                                selectedMonth.format("YYYY"),
                                selectedMonth.format("M"),
                                currentRange
                            );
                            return;
                        }
                        selectedMonth = dayjs(selectedMonth).subtract(
                            amountPassed,
                            "month"
                        );
                    }
                }

                // createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                getCalendarEventsRequest(url);

                break;
        }
    };

    resizeHandler();
    initMonthSelectors();

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    const debouncedResizeHandler = debounce(resizeHandler, 100);
    $(window).resize(debouncedResizeHandler);
});
