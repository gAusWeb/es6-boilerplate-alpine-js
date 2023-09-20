import dayjs from "dayjs";

let currentRange;
const weekday = require("dayjs/plugin/weekday");
const weekOfYear = require("dayjs/plugin/weekOfYear");
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(weekday);
dayjs.extend(weekOfYear);
dayjs.extend(isBetween)

$(document).ready(function () {
    const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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
            month: 9,
            events: [
                {
                    day: 2, 
                    drawType: 1 
                }, 
                {
                    day: 8, 
                    drawType: 1 
                }, 
                {
                    day: 9, 
                    drawType: 1 
                }, 
                {
                    day: 3, 
                    drawType: 2
                },
                {
                    day: 19, 
                    drawType: 3
                }
            ]
        },
        { 
            month: 10,
            events: [
                {
                    day: 4,
                    drawType: 1
                },
                {
                    day: 11,
                    drawType: 1
                },
                {
                    day: 17,
                    drawType: 2
                },
                {
                    day: 30,
                    drawType: 3
                }
            ]
        }
    ];

    const calendarWrapper = document.getElementById("calendar-wrapper-custom");
    const prevMonthSelectorEl = document.createElement('button');
    const nextMonthSelectorEl = document.createElement('button');
    prevMonthSelectorEl.setAttribute('id', 'previous-month-selector');
    nextMonthSelectorEl.setAttribute('id', 'next-month-selector');
    prevMonthSelectorEl.classList.add('calendar-selectors');
    nextMonthSelectorEl.setAttribute('id', 'next-month-selector');
    nextMonthSelectorEl.classList.add('calendar-selectors');
    prevMonthSelectorEl.innerText = '<';
    nextMonthSelectorEl.innerText = '>';

    function createCalendar(year = INITIAL_YEAR, month = INITIAL_MONTH, calendarRange = 1) {
        calendarWrapper.innerHTML = '';
        const calendarMonthHeaderEl = document.createElement('section');
        calendarMonthHeaderEl.classList.add('calendar-month-header');
        
        for(let i = 0; i < calendarRange; i++) {
            const calendarMonthsWrapper = document.createElement('div');
            calendarMonthsWrapper.classList.add('calendar-months-wrapper');

            const calendarMonthEl = document.createElement('div');
            const selectedMonthEl = document.createElement('div');
            const selectedMonthHeaderSelectorsEl = document.createElement('div');
            const daysOfWeekEl = document.createElement('ol');
            const calendarDaysEl = document.createElement('ol');
        
            calendarMonthEl.classList.add('calendar-month');
            selectedMonthEl.classList.add('calendar-month-header-selected-month');
            selectedMonthEl.setAttribute('id', 'selected-month');
            selectedMonthHeaderSelectorsEl.classList.add('calendar-month-header-selectors');
            daysOfWeekEl.classList.add('days-of-week');
            daysOfWeekEl.setAttribute('id', 'days-of-week');
            calendarDaysEl.classList.add('days-grid');
            calendarDaysEl.setAttribute('id', 'calendar-days');
            const calendarDaysElement = document.getElementById("calendar-days");
            
            selectedMonthEl.innerText = dayjs(
                new Date(year, month - 1 + i)
            ).format("MMMM YYYY");
            
            selectedMonthHeaderSelectorsEl.appendChild(selectedMonthEl);
            calendarMonthEl.appendChild(selectedMonthHeaderSelectorsEl);
            calendarMonthsWrapper.appendChild(selectedMonthEl);
            
            WEEKDAYS.forEach((weekday) => {
                const weekDayElement = document.createElement("li");
                daysOfWeekEl.appendChild(weekDayElement);
                weekDayElement.innerText = weekday;
            });
            
            calendarWrapper.appendChild(calendarMonthsWrapper);
            calendarMonthsWrapper.appendChild(daysOfWeekEl);
            calendarMonthsWrapper.appendChild(calendarDaysEl);
            
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

            days.forEach((day, i) => {
                if (monthlyDraws && monthlyDraws.length > 0) {
                    monthlyDraws.every((element, i) => {
                        if (day.dayOfMonth == element.day) {
                            isDrawDay = true;
                            drawType = element.drawType;
                            return false
                        } else {
                            isDrawDay = false; 
                            drawType = null;
                            return true;
                        }
                    });
                }
                appendDay(day, calendarDaysElement, isDrawDay, drawType, calendarMonthsWrapper);
            });
        }
        calendarWrapper.appendChild(prevMonthSelectorEl);
        calendarWrapper.appendChild(nextMonthSelectorEl);
    }

    function appendDay(day, calendarDaysElement, isDrawDay = false, drawType = null, calendarMonthsWrapper) {
        const dayElement = document.createElement("li");
        const dayElementClassList = dayElement.classList;
        dayElementClassList.add("calendar-day");

        if (isDrawDay) {
            dayElementClassList.add('draw-day', `draw-type-${drawType}`);
        } 
        
        const dayOfMonthElement = document.createElement("span");
        dayOfMonthElement.innerText = day.dayOfMonth;
        dayElement.appendChild(dayOfMonthElement);
            
        if (!day.isCurrentMonth) {
            dayElementClassList.add("not-current-month-day");
        }

        calendarMonthsWrapper.querySelector('.days-grid').appendChild(dayElement);
    }

    function removeAllDayElements(calendarDaysElement) {
        let first = calendarDaysElement.firstElementChild;

        while (first) {
            first.remove();
            first = calendarDaysElement.firstElementChild;
        }
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
            ? firstDayOfTheMonthWeekday - 1
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