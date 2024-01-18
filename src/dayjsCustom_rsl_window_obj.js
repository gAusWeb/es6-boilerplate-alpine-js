import dayjs from "dayjs";

const weekday = require("dayjs/plugin/weekday");
var isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(weekday);
dayjs.extend(isBetween);

$(document).ready(function () {
    let currentRange;
    const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const START_DATE = dayjs().subtract(1, "month").format("YYYY-MM");
    const END_DATE = dayjs().add(11, "month").format("YYYY-MM");
    const END_YEAR = parseInt(dayjs().add(11, "month").format("YYYY"));
    const END_MONTH = parseInt(dayjs().add(11, "month").format("M"));
    const INITIAL_YEAR = dayjs().format("YYYY");
    const INITIAL_MONTH = dayjs().format("M");
    const validDatesRange = {
        start: START_DATE,
        end: END_DATE,
    };
    const validDatesRangeInt = {
        startYear: parseInt(dayjs().format("YY")),
        startMonth: parseInt(dayjs().subtract(1, "month").format("MM")),
        endYear: parseInt(dayjs().add(11, "month").format("YY")),
        endMonth: parseInt(dayjs().add(11, "month").format("MM")),
    };
    let selectedMonth = dayjs(new Date(INITIAL_YEAR, INITIAL_MONTH - 1));
    let currentMonthDays;
    let previousMonthDays;
    let nextMonthDays;
    let localDrawData = [];

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

    function getCalendarData() {
        if (!window.upcomingDrawsData) return;
        
        localDrawData = window.upcomingDrawsData.drawDates;

        if (localDrawData.length < 1) {
            console.log('window data not found');
            return;
        }
    }

    function updateEventsCalendarView() {
        calendarMonthsWrapper.innerHTML = "";
        prevMonthSelectorEl.style.visibility = "hidden";
        nextMonthSelectorEl.style.visibility = "hidden";
        loadingSpinner.style.display = "block";

        console.log(localDrawData);
        
        if (localDrawData.length > 0) {
            createCalendar(
                selectedMonth.format("YYYY"),
                selectedMonth.format("M"),
                currentRange,
                localDrawData
            );
            loadingSpinner.style.display = "none";
        } else {
            calendarWrapper.innerHTML = `
            <div class="upcoming-draws-calendar__error-message">
                <p>There was an error loading the calendar. Please try to <a href="javascript:window.location.href=window.location.href">refresh this page</a>, or again later.</p>
                <p>Should problems persist, please contact <a href="mailto:website@rslunion.com.au?subject=Mail from Our Site">website@rslunion.com.au</a></p>
            </div>
            `;
              loadingSpinner.style.display = "none";
        }
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

            if (localDrawData) {
                // filter 'draw-dates' to within current calendar range (1 month behind, 11 months ahead)
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

                // filter `open-draw-dates` within current calendar range
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

                let drawData;

                days.forEach((day) => {
                    // filter draw-dates down to current day
                    if (drawDate && drawDate.length > 0) {
                        drawDate.every((draw) => {
                            if (
                                day.dayOfMonth ==
                                draw.drawDate.split("-")[2].split("T")[0]
                            ) {
                                drawData = {
                                    ...drawData,
                                    drawDate: {
                                        drawType: draw.drawType.trim(),
                                        drawText: draw.drawDescription,
                                        drawIsVIP: draw.isVIPOnly,
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
                    // filter open-draw-dates down to current day
                    if (openDrawDate && openDrawDate.length > 0) {
                        openDrawDate.every((draw) => {
                            if (
                                day.dayOfMonth ==
                                draw.openDate.split("-")[2].split("T")[0]
                            ) {
                                drawData = {
                                    ...drawData,
                                    drawOpenDate: {
                                        drawType: draw.drawType.trim(),
                                        drawText: draw.drawDescription,
                                        drawIsVIP: draw.isVIPOnly,
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

        if (drawData) {
            const drawTextWrapper = document.createElement("span");
            drawTextWrapper.classList.add("upcoming-draws-calendar__draw-text");

            const win_5k_tile_html = "WIN <strong>$5K</strong>";
            const win_100k_tile_html = "WIN <strong>$100K</strong>";
            let vip_home_tile_html;

            if (
                (drawData.drawDate && drawData.drawDate.drawIsVIP) ||
                (drawData.drawOpenDate && drawData.drawOpenDate.drawIsVIP)
            ) {
                const vipIcon = document.createElement("div");
                vipIcon.classList.add("vip-icon");
                vipIcon.innerHTML =
                    // '<img src="/RSLLOTT/assets/Frontend RSLLOTT/images/icons/crown.svg" alt="vip-icon" />';
                    '<img src="./assets/Frontend RSLLOTT/images/icons/calendar-vip-crown.svg" alt="vip-icon" />';
                drawTextWrapper.appendChild(vipIcon);
            }

            if (drawData.drawDate) {
                vip_home_tile_html = `<strong>${drawData.drawDate.drawName}</strong>`;

                switch (drawData.drawDate.drawType) {
                    case "W": // WIN 5k
                        dayElementClassList.add("draw-day", `draw-type-1`);
                        drawTextWrapper.innerHTML = win_5k_tile_html;
                        break;

                    case "Q": // WIN 100k
                        dayElementClassList.add("draw-day", `draw-type-2`);
                        drawTextWrapper.innerHTML = win_100k_tile_html;
                        break;

                    case "H": // WIN a Home VIP/non-VIP
                        dayElementClassList.add("draw-day", `draw-type-4`);
                        let updatedEventTitle = vip_home_tile_html
                            .replace("AU", "")
                            .replace("L", "");

                        if (drawData.drawDate.drawIsVIP) {
                            dayElementClassList.add("vip");
                        } else {
                            updatedEventTitle = `<span>VIP</span> ${updatedEventTitle}`;
                        }
                        drawTextWrapper.innerHTML += updatedEventTitle;
                        break;

                    default: // do nothing
                        break;
                }
            }

            // Render relevant open-draw tiles
            if (drawData.drawOpenDate) {
                const drawText = drawData.drawOpenDate.drawText
                    .replace("AU", "")
                    .split(" ")[0];

                vip_home_tile_html = `<strong>${drawText}</strong>`;

                if (drawData.drawOpenDate.drawIsVIP) {
                    dayElementClassList.add("draw-day", `draw-type-3`, "vip");
                    drawTextWrapper.innerHTML += vip_home_tile_html;
                } else {
                    dayElementClassList.add("draw-day", `draw-type-3`);
                    drawTextWrapper.innerHTML += vip_home_tile_html
                        .replace("AU", "")
                        .replace("L", "");
                }
            }

            const drawWrapper = document.createElement("div");
            drawWrapper.classList.add("upcoming-draws-calendar__draw-wrapper");

            drawWrapper.appendChild(drawTextWrapper);
            dayElement.appendChild(drawWrapper);
        }

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
        // Render calendar-week start to be sunday (firstDayOfTheMonthWeekday === 0)
        // or for EG. set to 6 if calendar-day starts on a Monday
        const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
            ? firstDayOfTheMonthWeekday
            : 0;

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
        updateEventsCalendarView();
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
        updateEventsCalendarView();
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

                break;
            case $(window).width() >= 768 && $(window).width() < 1140:
                if (currentRange === 2) return;
                currentRange = 2;

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
                break;
            }

            updateEventsCalendarView();
    };

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

    const init = () => {
        getCalendarData();
        resizeHandler();
        initMonthSelectors();

        const debouncedResizeHandler = debounce(resizeHandler, 100);
        $(window).resize(debouncedResizeHandler);
    };

    init();
});