import dayjs from "dayjs";

let currentRange;
const weekday = require("dayjs/plugin/weekday");
const weekOfYear = require("dayjs/plugin/weekOfYear");
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(weekday);
dayjs.extend(weekOfYear);
dayjs.extend(isBetween)

$(document).ready(function () {
    const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const TODAY = dayjs().subtract(1, "month").format("YYYY-MM-DD");
    const START_DATE = dayjs().subtract(1, "month").format("YYYY-MM");
    const END_DATE = dayjs().add(11, "month").format("YYYY-MM");
    const RANGE_START_YEAR_INT = parseInt(dayjs().format("YY"));
    const RANGE_START_MONTH_INT = parseInt(dayjs().subtract(1, "month").format("MM"));
    const RANGE_END_YEAR_INT = parseInt(dayjs().add(11, "month").format("YY"));
    const RANGE_END_MONTH_INT = parseInt(dayjs().add(11, "month").format("MM"));
    const END_YEAR = parseInt(dayjs().add(11, "month").format("YYYY"));
    const END_MONTH = parseInt(dayjs().add(11, "month").format("M"));
    const INITIAL_YEAR = dayjs().format("YYYY");
    const INITIAL_MONTH = dayjs().format("M");
    const validDatesRange = {
        start: START_DATE,
        end: END_DATE
    }
    const validDatesRangeInt = {
        startYear: RANGE_START_YEAR_INT,
        startMonth: RANGE_START_MONTH_INT,
        endYear: RANGE_END_YEAR_INT,
        endMonth: RANGE_END_MONTH_INT
    }
    let selectedMonth = dayjs(new Date(INITIAL_YEAR, INITIAL_MONTH - 1));
    let currentMonthDays;
    let previousMonthDays;
    let nextMonthDays;

    const localDrawData = [ 
        { 
            month: 8,
            events: [
                {
                    day: 2, 
                    drawType: 1,
                    drawText: "409",
                },
                {
                    day: 3, 
                    drawType: 3,
                    drawText: "WIN <strong>$5K</strong>",
                }, 
                {
                    day: 10, 
                    drawType: 3,
                    drawText: "WIN <strong>$5K</strong>",
                }, 
                {
                    day: 16, 
                    drawType: 2,
                    drawText: "410",
                },
                {
                    day: 17, 
                    drawType: 3,
                    drawText: "WIN <strong>$5K</strong>",
                }, 
                {
                    day: 15, 
                    drawType: 4,
                    drawText: "WIN <strong>$100K</strong>",
                }, 
                {
                    day: 24, 
                    drawType: 3,
                    drawText: "WIN <strong>$5K</strong>",
                }, 
                {
                    day: 30, 
                    drawType: 1,
                    drawText: "410",
                }, 
                {
                    day: 31, 
                    drawType: 3,
                    drawText: "WIN <strong>$5K</strong>",
                }, 
            ]
        },
        { 
            month: 9,
            events: [
                {
                    day: 7, 
                    drawType: 3,
                    drawText: "WIN <strong>$5K</strong>",
                }, 
                {
                    day: 14, 
                    drawType: 3,
                    drawText: "WIN <strong>$5K</strong>",
                }, 
                {
                    day: 13, 
                    drawType: 2,
                    drawText: "409",
                },
                {
                    day: 21, 
                    drawType: 3,
                    drawText: "WIN <strong>$5K</strong>",
                }, 
                {
                    day: 27, 
                    drawType: 1,
                    drawText: "410",
                },
                {
                    day: 28, 
                    drawType: 3,
                    drawText: "WIN <strong>$5K</strong>",
                }, 
            ]
        },
        { 
            month: 10,
            events: [
                {
                    day: 5, 
                    drawType: 3,
                    drawText: "WIN <strong>$5K</strong>",
                }, 
                {
                    day: 11, 
                    drawType: 1,
                    drawText: "407",
                }, 
                {
                    day: 12, 
                    drawType: 3,
                    drawText: "WIN <strong>$5K</strong>",
                }, 
                {
                    day: 25, 
                    drawType: 2,
                    drawText: "409",
                },
                {
                    day: 19, 
                    drawType: 3,
                    drawText: "WIN <strong>$5K</strong>",
                }, 
                {
                    day: 26, 
                    drawType: 3,
                    drawText: "WIN <strong>$5K</strong>",
                }, 
            ]
        }
    ];

    const calendarWrapper = document.querySelector(".upcoming-draws-calendar");
    
    const btnSelectorsWrapper = document.createElement('div');
    btnSelectorsWrapper.classList.add('upcoming-draws-calendar__btn-selectors-wrapper');
    
    const calendarMonthsWrapper = document.createElement('div');
    calendarMonthsWrapper.classList.add('upcoming-draws-calendar__months-wrapper');
    
    const prevMonthSelectorEl = document.createElement('button');
    prevMonthSelectorEl.classList.add('upcoming-draws-calendar__date-toggle-selector', 'prev');
    prevMonthSelectorEl.innerText = '<';

    const nextMonthSelectorEl = document.createElement('button');
    nextMonthSelectorEl.classList.add('upcoming-draws-calendar__date-toggle-selector', 'next');
    nextMonthSelectorEl.innerText = '>';
    
    function createCalendar(year = INITIAL_YEAR, month = INITIAL_MONTH, calendarRange = 1) {
        calendarMonthsWrapper.innerHTML = '';
        btnSelectorsWrapper.appendChild(prevMonthSelectorEl);
        btnSelectorsWrapper.appendChild(nextMonthSelectorEl);
        calendarWrapper.appendChild(btnSelectorsWrapper);    
        
        for(let i = 0; i < calendarRange; i++) {
            const calendarMonthWrapper = document.createElement('div');
            calendarMonthWrapper.classList.add('upcoming-draws-calendar__month-wrapper');

            const calendarMonthHeader = document.createElement('div');
            calendarMonthHeader.classList.add('upcoming-draws-calendar__month-header');
            calendarMonthHeader.innerText = dayjs(
                new Date(year, month - 1 + i)
            ).format("MMMM YYYY");

            const daysOfWeekEl = document.createElement('ol');
            const calendarDaysEl = document.createElement('ol');
        
            daysOfWeekEl.classList.add('upcoming-draws-calendar__days-of-week');
            calendarDaysEl.classList.add('upcoming-draws-calendar__days-grid');
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

            const days = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];
            let monthlyDraws;

            const currentMonthDraws = localDrawData.filter((element) => element.month == dayjs(selectedMonth).add(i, "month").format("M") && element.events);
            if (currentMonthDraws.length > 0) {
                const currentMonthDrawsEvents = currentMonthDraws.map((element) => element.events);
                monthlyDraws = currentMonthDrawsEvents.flat();
            }

            let isDrawDay = false;
            let drawType = null;
            let drawText = null;

            days.forEach((day, i) => {
                if (monthlyDraws && monthlyDraws.length > 0) {
                    monthlyDraws.every((draw, i) => {
                        if (day.dayOfMonth == draw.day) {
                            isDrawDay = true;
                            drawType = draw.drawType;
                            drawText = draw.drawText;
                            return false
                        } else {
                            isDrawDay = false; 
                            drawType = null;
                            drawText = null;
                            return true;
                        }
                    });
                }
                appendDay(day, isDrawDay, drawType, drawText, calendarMonthWrapper);
            });
        }
    }

    function appendDay(day, isDrawDay = false, drawType = null, drawText = null, calendarMonthWrapper) {
        const dayElement = document.createElement("li");
        const dayElementClassList = dayElement.classList;
        dayElementClassList.add("calendar-day");

        if (isDrawDay) {
            dayElementClassList.add('draw-day', `draw-type-${drawType}`);

            const drawWrapper = document.createElement("div");
            drawWrapper.classList.add('upcoming-draws-calendar__draw-wrapper');

            const drawTextWrapper = document.createElement("span");
            drawTextWrapper.classList.add('upcoming-draws-calendar__draw-text');
            drawTextWrapper.innerHTML = drawText;
            
            drawWrapper.appendChild(drawTextWrapper);
            dayElement.appendChild(drawWrapper);
        } 
        
        const dayOfMonthElement = document.createElement("span");
        dayOfMonthElement.classList.add('date-of-month');
        dayOfMonthElement.innerText = day.dayOfMonth;
        dayElement.appendChild(dayOfMonthElement);
            
        if (!day.isCurrentMonth) {
            dayElementClassList.add("not-current-month-day");
        }

        calendarMonthWrapper.querySelector('.upcoming-draws-calendar__days-grid').appendChild(dayElement);
    }

    function getNumberOfDaysInMonth(year, month) {
        return dayjs(`${year}-${month}-01`).daysInMonth();
    }

    function createDaysForCurrentMonth(year, month) {
        return [...Array(getNumberOfDaysInMonth(year, month))].map((day, index) => {
            return {
            date: dayjs(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD"),
            dayOfMonth: index + 1,
            isCurrentMonth: true
            };
        });
    }

    function createDaysForPreviousMonth(year, month) {
        const firstDayOfTheMonthWeekday = getWeekday(currentMonthDays[0].date);
        const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, "month");
        // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
        const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
            ? firstDayOfTheMonthWeekday
            : 6;

        const previousMonthLastMondayDayOfMonth = dayjs(currentMonthDays[0].date)
            .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
            .date();

        return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((day, index) => {
            return {
            date: dayjs(
                `${previousMonth.year()}-${previousMonth.month() + 1}-${
                previousMonthLastMondayDayOfMonth + index
                }`
            ).format("YYYY-MM-DD"),
            dayOfMonth: previousMonthLastMondayDayOfMonth + index,
            isCurrentMonth: false
            };
        });
    }

    function createDaysForNextMonth(year, month) {
        const lastDayOfTheMonthWeekday = getWeekday(
            `${year}-${month}-${currentMonthDays.length}`
        );
        const nextMonth = dayjs(`${year}-${month}-01`).add(1, "month");
        const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
            ? 7 - lastDayOfTheMonthWeekday
            : lastDayOfTheMonthWeekday;

        return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
            return {
            date: dayjs(
                `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
            ).format("YYYY-MM-DD"),
            dayOfMonth: index + 1,
            isCurrentMonth: false
            };
        });
    }

    function getWeekday(date) {
        return dayjs(date).weekday();
    }

    function initMonthSelectors() {
        prevMonthSelectorEl.addEventListener("click", prevMonthSelectorClickHandler);
        nextMonthSelectorEl.addEventListener("click", nextMonthSelectorClickHandler);
    }

    function getNextToggledDate(toggleDirection = null) {
        const directionalToggleAmount = toggleDirection === 'prev' ? Math.abs(currentRange) * -1 : currentRange;
        return dayjs(selectedMonth).add(directionalToggleAmount, "month").format("YYYY-MM");;
    }

    function isToggleAmountWithinRange(toggleDirection = null) {
        if (getNextToggledDate(toggleDirection) == validDatesRange.start) return false;
        return dayjs(getNextToggledDate(toggleDirection)).isBetween(validDatesRange.start, validDatesRange.end, null, '[]');
    }

    function nextToggledLastShownMonth() {
        return dayjs(selectedMonth).add(currentRange + currentRange - 1, "month");
    }

    function isNextToggleWithinRange() {
        if (parseInt(nextToggledLastShownMonth().format("YY")) === validDatesRangeInt.endYear && parseInt(nextToggledLastShownMonth().format("MM")) >= validDatesRangeInt.endMonth) {
            return false;
        } else {
            return true;
        }
    }

    function amountOfMonthsToRender() {
        const amountPassedLimit = parseInt(selectedMonth.format("M")) - validDatesRangeInt.startMonth
        return amountPassedLimit;
    }

    function nextToggleAmountPassedLimit() {
        let amountPassedLimit = 0;
        if (parseInt(nextToggledLastShownMonth().format("M")) == validDatesRangeInt.endMonth) {
            amountPassedLimit = currentRange;
        }
        if (parseInt(nextToggledLastShownMonth().format("M")) > validDatesRangeInt.endMonth) {
            amountPassedLimit = currentRange - (parseInt(nextToggledLastShownMonth().format("M")) - validDatesRangeInt.endMonth);
        }
        return amountPassedLimit;
    }
    
    const prevMonthSelectorClickHandler = (e) => {
        if ($(nextMonthSelectorEl).attr('style')) $(nextMonthSelectorEl).removeAttr('style');
        if (isToggleAmountWithinRange('prev')) {
            selectedMonth = dayjs(selectedMonth).subtract(currentRange, "month");
        } else {
            $(prevMonthSelectorEl).css('display', 'none');
            selectedMonth = dayjs(selectedMonth).subtract(amountOfMonthsToRender(), "month");
        };
        createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
    }

    const nextMonthSelectorClickHandler = (e) => {
        if ($(prevMonthSelectorEl).attr('style')) $(prevMonthSelectorEl).removeAttr('style');
        if (isNextToggleWithinRange()) {
            selectedMonth = dayjs(selectedMonth).add(currentRange, "month");
        } else {
            selectedMonth = dayjs(selectedMonth).add(nextToggleAmountPassedLimit(), "month");
            $(nextMonthSelectorEl).css('display', 'none');  
        }
        createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);            
    }

    const resizeHandler = () => {
        switch (true) {
            case window.innerWidth < 768:
                if (currentRange === 1) return;
                if (selectedMonth.format("YYYY") == END_YEAR) {
                    if (parseInt(selectedMonth.format("M")) < END_MONTH) {
                        $(nextMonthSelectorEl).removeAttr('style');
                    } 
                }
                currentRange = 1;
                createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                break;
            case window.innerWidth >= 768 && window.innerWidth < 1024:
                if (currentRange === 2) return;
                currentRange = 2;
                createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                if (selectedMonth.format("YYYY") == END_YEAR) {
                    const nextSelectedDate = dayjs(selectedMonth).add(currentRange, "month");
                    if (nextSelectedDate.format("M") > END_MONTH) {
                        $(nextMonthSelectorEl).css('display', 'none');
                    } else {
                        $(nextMonthSelectorEl).removeAttr('style');
                    }

                    if (selectedMonth.format("M") == END_MONTH) {
                        selectedMonth = dayjs(selectedMonth).subtract(1, "month");
                        createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                    }
                }
                break;
            default:
                if (currentRange === 3) return;
                if (selectedMonth.format("YYYY") == END_YEAR) {
                    if (parseInt(selectedMonth.format("M")) + currentRange > END_MONTH) {
                        selectedMonth = dayjs(selectedMonth).subtract(1, "month");
                        $(nextMonthSelectorEl).removeAttr('style');
                    }
                }
                currentRange = 3;
                if (selectedMonth.format("YYYY") == END_YEAR) {
                    if (parseInt(selectedMonth.format("M")) + currentRange > END_MONTH) {
                        nextMonthSelectorEl.style.display = 'none';
                        const amountPassed = currentRange - (parseInt(selectedMonth.format("M")) + currentRange - END_MONTH)
                        
                        if (parseInt(selectedMonth.format("M")) + currentRange - 1 == END_MONTH) {
                            createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                            return
                        }
                        selectedMonth = dayjs(selectedMonth).subtract(amountPassed, "month");
                    }
                }
                createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                break;
        }
    }

    resizeHandler();
    initMonthSelectors();

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
          var context = this, args = arguments;
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