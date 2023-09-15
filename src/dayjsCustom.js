import dayjs from "dayjs";
// import "./styles.css";


// plan of attack: 

// CALENDAR RENDERING FUNCTIONALITY
// render something different on selected date
// iterate through and inject data into current month
// differntiate between different draw types
// setup dummy data to iterate through
// Initially hardcode one month data, iterate through and inject into current month
// Setup month channge, update event injection
// setup responsive multi month rendering - desktop show 3 months, mobile show 1 month

// update next month selection to be responsive to number of months shown


// OTHER
// Setup responsive month rendering 
// Setup responsive event injection 

// API STUFFS
// fetch data from API
// Iterate through and inject API data

// STYLING
// Update styling to match design


const weekday = require("dayjs/plugin/weekday");
const weekOfYear = require("dayjs/plugin/weekOfYear");
var isBetween = require('dayjs/plugin/isBetween')

dayjs.extend(weekday);
dayjs.extend(weekOfYear);
dayjs.extend(isBetween)

let currentRange;

let drawData;
const apiUrl = 'http://127.0.0.1:5501/dist/draw-data.json';

// const getDrawData = async (data) => {
//      fetch(data
//     // , {
//     //     headers: {
//     //         "Content-Type": "application/json",
//     //         Accept: "application/json",
//     //     }
//     // }
//     )
//     .then((response) => {
//         if (response.ok) {
//             console.log('SUCCESS')
//             console.log(response);
//             return response.json();
//         } else {
//             console.log('error', response)
//         }
//     })
//     .then((data) => {
//         drawData = data;
//         console.log(drawData);
//         return drawData;
//     })
//     .catch((err) => {
//         console.log('err', err);
//     });
// };

//  const test = getDrawData(apiUrl);
// // console.log('fetch var', test);
// // test(drawData).then((data) => {
// //     console.log('fetch var', data);
// // })
// await test.then((data) => {
//     console.log('fetch var', data);
// });

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
    // console.log('END_MONTH',END_YEAR);
    // console.log('END_MONTH',END_MONTH);

    const INITIAL_YEAR = dayjs().format("YYYY");
    const INITIAL_MONTH = dayjs().format("M");
    const INITIAL_YEAR_MONTH = dayjs().format("YYYY-MM");


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
    // console.log('selectedMonth init', selectedMonth.format("M"));
    // let selectedYearMonth = selectedMonth.format("YYYY-MM-DD");

    // let selectedMonthInit = dayjs(INITIAL_YEAR, INITIAL_MONTH - 1, 1).format("YYYY-MM-DD");
    
    // console.log('initMonth', INITIAL_MONTH);
    // // console.log('selectedMonth', selectedMonth);
    // console.log('selectedMonthInit', selectedMonthInit);
    
    // console.log('2day',TODAY);
    // console.log('end_date', END_DATE);
    // let newDate = dayjs().add(1, "month").format("YYYY-MM-DD");
    // let newDate2 = dayjs(newDate);
    // console.log('newDate', newDate);
    // console.log('newDate2', newDate2);
    // const isInTestRange = newDate2.isBetween(TODAY, END_DATE, null, '[]');
    // console.log('isInTestRange', isInTestRange) // Output: true


    // const isWithinRange = targetDate.isBetween(startDate, endDate, null, '[]'); 
    // console.log(isWithinRange) // Output: true


    
    let currentMonthDays;
    let previousMonthDays;
    let nextMonthDays;

    


    // const daysOfWeekElement = document.getElementById("days-of-week");
    // const calenderWrapper = document.getElementById("calender-wrapper");

    // WEEKDAYS.forEach((weekday) => {
    //     const weekDayElement = document.createElement("li");
    //     daysOfWeekElement.appendChild(weekDayElement);
    //     weekDayElement.innerText = weekday;
    // });

    // console.log('sm', INITIAL_MONTH, selectedMonth)

    const localDrawData = [ 
        { 
            month: 9,
            events: [
                {
                    day: 7, 
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

    // createCalendar();
    
    
    // initMonthSelectors();


    function createCalendar(year = INITIAL_YEAR, month = INITIAL_MONTH, calendarRange = 1) {
        calendarWrapper.innerHTML = '';
        
        const calendarMonthHeaderEl = document.createElement('section');
        calendarMonthHeaderEl.classList.add('calendar-month-header');
        
        for(let i = 0; i < calendarRange; i++) {
            
            // console.log('selectedMonth', selectedMonth.format("M"));
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
            daysOfWeekEl.classList.add('day-of-week');
            daysOfWeekEl.setAttribute('id', 'days-of-week');
            calendarDaysEl.classList.add('days-grid');
            calendarDaysEl.setAttribute('id', 'calendar-days');

            // calendarMonthEl.innerText = 'test'
            
            
            // console.log('createCalendar init');
            const calendarDaysElement = document.getElementById("calendar-days");

            //   console.log(dayjs());
            // console.log(new Date())
            // document.getElementById("selected-month").innerText = dayjs(
            //     new Date(year, month - 1)
            // ).format("MMMM YYYY");

            

            selectedMonthEl.innerText = dayjs(
                new Date(year, month - 1 + i)
            ).format("MMMM YYYY");



            // console.log('month days', new Date(year, month - 1 + i))
            // console.log('selectedMonthEl', selectedMonthEl);

            
            // removeAllDayElements(calendarDaysElement);

            // calendarMonthHeaderEl.appendChild(selectedMonthEl);
            // calendarMonthEl.appendChild(calendarMonthHeaderEl);

            
            // calendarMonthsWrapper.appendChild(selectedMonthEl);

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

            // console.log('month', month );

            previousMonthDays = createDaysForPreviousMonth(year, month);

            nextMonthDays = createDaysForNextMonth(year, month);

            const days = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];
            // const days = [...currentMonthDays];



            // console.log('days', i + 1);


            // console.log('selectedMonth.add(i).format("M")', dayjs(selectedMonth).add(i, "month").format("M"));
            // console.log('selectedMonth.add(i).format("M")', selectedMonth.add(i + 1).format("M"));
            let monthlyDraws;
            const currentMonthDraws = localDrawData.filter((element) => element.month == dayjs(selectedMonth).add(i, "month").format("M") && element.events);

            if (currentMonthDraws.length > 0) {
                const currentMonthDrawsEvents = currentMonthDraws.map((element) => element.events);
                monthlyDraws = currentMonthDrawsEvents.flat();
            }

            // console.log('monthlyDraws', monthlyDraws);

            //   console.log('currentMonthDraws', currentMonthDraws);
            //   console.log('currentMonthDrawsEvents', currentMonthDrawsEvents);
            //   console.log('test', monthlyDraws[0].day);
            //   console.log('monthlyDraws', monthlyDraws);
            //   console.log('INITAL_MONTH', month);

            
            days.forEach((day, i) => {
                if (monthlyDraws && monthlyDraws.length > 0) {
                    monthlyDraws.forEach((element, i) => {
                        // console.log('context', calendarMonthsWrapper);
                        if (day.dayOfMonth == element.day) {
                            // console.log(element.day)
                            appendDay(day, calendarDaysElement, true, element.drawType, calendarMonthsWrapper);
                            return;
                        }
                    });
                }

                appendDay(day, calendarDaysElement, undefined, undefined, calendarMonthsWrapper);
            });
            // selectedMonth = dayjs(new Date(year, month - 1 + i, 1));
        }

        

        calendarWrapper.appendChild(prevMonthSelectorEl);
        // calendarWrapper.appendChild(calendarMonthEl);
        calendarWrapper.appendChild(nextMonthSelectorEl);
    }

    // function getMonthDates() {
    //   console.log("getMonthDates init");
    //   // const response = await fetch("./drawData.json");
    //   // const movies = await response.json();
    //   // console.log("yo", movies);

    //   console.log();

    //   // fetch('/drawData.json')
    //   //   .then(response => response)
    //   //   .then(data => console.log('yo', data));
    //   fetch("drawData", {
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json"
    //     }
    //   })
    //     .then((response) => response.json())
    //     .then((response) => console.log(JSON.stringify(response)));
    // }

    // getMonthDates();

    function appendDay(day, calendarDaysElement, isDrawDay = false, drawType = null, calendarMonthsWrapper) {
        const dayElement = document.createElement("li");
        const dayElementClassList = dayElement.classList;
        dayElementClassList.add("calendar-day");

        if (isDrawDay) {
            // console.log('drawType',drawType);
            switch (drawType) {
                case 3:
                    dayElementClassList.add("draw-type-3")
                    break;
                case 2:
                    dayElementClassList.add("draw-type-2")
                    break;
            
                default:
                    dayElementClassList.add("draw-type-1")
                    break;
            }
            dayElementClassList.add("draw-day")
        } else {
            const dayOfMonthElement = document.createElement("span");
            dayOfMonthElement.innerText = day.dayOfMonth;
            dayElement.appendChild(dayOfMonthElement);
        }
        // calendarDaysElement.appendChild(dayElement);

        if (!day.isCurrentMonth) {
            dayElementClassList.add("calendar-day--not-current");
        }

        calendarMonthsWrapper.querySelector('.days-grid').appendChild(dayElement);
        // if (day.date === TODAY) {
        //     dayElementClassList.add("calendar-day--today");
        // }
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

    function getNextToggledDate(toggleDirection = null) {
        let updatedRange;
        // if (currentRange === 1) {
        //     updatedRange = currentRange + 2;
        // // } else if (currentRange === 2) {
        // //     updatedRange = currentRange + 1;
        // // } else {
        // //     updatedRange = currentRange;
        // // }
        // // else if (currentRange === 2) {
        // //     updatedRange = currentRange + 1;
        // // } else if (currentRange === 3) {
        // //     updatedRange = currentRange;
        // // }
        // } else {
        //     updatedRange = currentRange;
        // }
        // const directionalToggleAmount = toggleDirection === 'prev' ? Math.abs(updatedRange) * -1 : updatedRange;
        const directionalToggleAmount = toggleDirection === 'prev' ? Math.abs(currentRange) * -1 : currentRange;
        return dayjs(selectedMonth).add(directionalToggleAmount, "month").format("YYYY-MM");;
    }

    function isToggleAmountWithinRange(toggleDirection = null) {
        // console.log(getNextToggledDate(toggleDirection) == validDatesRange.start);
        // console.log();

        if (getNextToggledDate(toggleDirection) == validDatesRange.start) return false;
        // console.log(parseInt(selectedMonth.format("MM")) == validDatesRangeInt.startMonth);
        // console.log(getNextToggledDate(toggleDirection), validDatesRange.start);
        // if (getNextToggledDate(toggleDirection) === validDatesRange.start) return true;
        return dayjs(getNextToggledDate(toggleDirection)).isBetween(validDatesRange.start, validDatesRange.end, null, '[]');
    }

    function getNextToggledDate2() {
        return dayjs(selectedMonth).add(currentRange + currentRange + 1, "month");
    }

    function nextToggledLastShownMonth() {
        return dayjs(selectedMonth).add(currentRange + currentRange - 1, "month");
    }

    function isNextToggleWithinRange() {
        console.log('nextShownLastYear', parseInt(nextToggledLastShownMonth().format("YY")));
        console.log('validNextShownYear', validDatesRangeInt.endYear);
        console.log('nextShownLastMonth', parseInt(nextToggledLastShownMonth().format("MM")));
        console.log('validNextShownMonth', validDatesRangeInt.endMonth);
        // console.log('validDatesRange.end', getNextToggledDate2().format("YYYY-MM"));
        // console.log('validDatesRange.end', validDatesRange.end);
        // console.log('next next', getNextToggledDate2().add(currentRange, "month").format("MM"));
        // if (getNextToggledDate2().format("YYYY-MM") == validDatesRange.endMonth) return false;
        // if (getNextToggledDate2().add(currentRange, "month").format("MM") > validDatesRangeInt.endMonth) return false;
        if (parseInt(nextToggledLastShownMonth().format("YY")) === validDatesRangeInt.endYear && parseInt(nextToggledLastShownMonth().format("MM")) >= validDatesRangeInt.endMonth) {
            return false;
        } else {
            return true;
        }
        // return dayjs(getNextToggledDate2().format("YYYY-MM")).isBetween(validDatesRange.start, validDatesRange.end, null, '[]');
    }

    function amountOfMonthsToRender() {
        const amountPassedLimit = parseInt(selectedMonth.format("M")) - validDatesRangeInt.startMonth
        console.log('amountPassedLimit', amountPassedLimit);
        return amountPassedLimit;
    }

    function nextToggleAmountPassedLimit() {
        let amountPassedLimit = 0;
        // console.log('nextNextToggle', parseInt(getNextToggledDate2().format("M")));
        // console.log('nextNextToggle 2', parseInt(selectedMonth.add(currentRange).format("M")));
        // console.log('nextNextToggle 3', parseInt(getNextToggledDate2().add(currentRange - 1, "month").format("M")));
        // console.log('endMonth', validDatesRangeInt.endMonth);
        // let amountPassedLimit = parseInt(getNextToggledDate2().format("M")) - validDatesRangeInt.endMonth
        // console.log('next => amountPassedLimit', amountPassedLimit);
        // if (currentRange < amountPassedLimit) amountPassedLimit = currentRange - amountPassedLimit;
        // if (currentRange < amountPassedLimit) amountPassedLimit = currentRange - amountPassedLimit;
        // if (currentRange === 2 && validDatesRangeInt.endMonth === parseInt(selectedMonth.format("M")) + currentRange) amountPassedLimit = 1;
        // if (currentRange === 2 && validDatesRangeInt.endMonth === parseInt(selectedMonth.add(currentRange - 1, "month").format("M")) ) amountPassedLimit = 1;
        // if (currentRange === 3 && validDatesRangeInt.endMonth === parseInt(getNextToggledDate2().add(currentRange - 1, "month").format("M")) ) amountPassedLimit = 3;

        // if (parseInt(getNextToggledDate2().format("M")) == validDatesRangeInt.endMonth) {
        //     amountPassedLimit = 1;
        // }

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
            // console.log('');
            selectedMonth = dayjs(selectedMonth).subtract(currentRange, "month");
        } else {
            $(prevMonthSelectorEl).css('display', 'none');
            selectedMonth = dayjs(selectedMonth).subtract(amountOfMonthsToRender(), "month");
        };

        createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);

        return;

        amountOfMonthsToRender(parseInt(selectedMonth.format("M")));
        let nextSelectedDate = dayjs(selectedMonth);
        let amountPassedLimit = 0;
        nextSelectedDate =  dayjs(selectedMonth).subtract(currentRange, "month"); 
        // if ($(nextMonthSelectorEl).attr('style')) $(prevMonthSelectorEl).removeAttr('style');

        if (nextSelectedDate.format("YYYY") == INITIAL_YEAR) {
            if (parseInt(selectedMonth.format("M")) == INITIAL_MONTH ) {
                if (parseInt(nextSelectedDate.format("M")) < parseInt(INITIAL_MONTH) - 1) {
                    selectedMonth = dayjs(selectedMonth).subtract(1, "month");
                    $(thisButton).css('display', 'none');
                    createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                    return;
                }
            }

            if (parseInt(nextSelectedDate.format("M")) < parseInt(INITIAL_MONTH) - 1) {
                amountPassedLimit = (parseInt(INITIAL_MONTH)) - parseInt(nextSelectedDate.format("M")); 
                selectedMonth = dayjs(selectedMonth).subtract(amountPassedLimit, "month");
                $(thisButton).css('display', 'none');
                createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                return;
            }

            if (parseInt(nextSelectedDate.format("M")) == parseInt(INITIAL_MONTH - 1)) {
                if (currentRange === 2) $(thisButton).css('display', 'none');
            }

            if (parseInt(nextSelectedDate.format("M")) == parseInt(INITIAL_MONTH) - 1) {
                if (currentRange === 3) $(thisButton).css('display', 'none');
            }
        }

        selectedMonth = dayjs(selectedMonth).subtract(currentRange, "month");
        nextSelectedDate =  dayjs(selectedMonth).subtract(currentRange, "month"); 

        if (parseInt(nextSelectedDate.format("M")) < parseInt(INITIAL_MONTH) - 1) {
           if (currentRange === 1) $(thisButton).css('display', 'none');
        }

        // if (parseInt(nextSelectedDate.format("M")) < parseInt(INITIAL_MONTH)) {
        //    if (currentRange === 2) $(thisButton).css('display', 'none');
        // }

        // if (!isWithinRange) {
        //     // if ($(nextMonthSelectorEl).attr('style')) $(nextMonthSelectorEl).removeAttr('style');
        //     // console.log(selectedMonth.format("YY-M"));
        //     // if (selectedMonth.format("YYYY-M") <= `${INITIAL_YEAR}-${INITIAL_MONTH}`) {
        //     //     selectedMonth = dayjs(selectedMonth).subtract(1, "month");
        //     //     $(thisButton).css('display', 'none');
        //     // } else {
        //     //     selectedMonth = dayjs(selectedMonth).subtract(currentRange, "month");
        //     // }
        //     // currentRange = 1;
        // //     selectedMonth = dayjs(selectedMonth).add(currentRange, "month");
        // // } else  {
        //     if (currentRange === 1) ($(thisButton).css('display', 'none'));
        //     if (currentRange === 2) (selectedMonth = dayjs(selectedMonth).add(1, "month"), $(thisButton).css('display', 'none'));
        //     if (currentRange === 3) (selectedMonth = dayjs(selectedMonth).subtract(currentRange - 2, "month"), $(thisButton).css('display', 'none'));
        // } else {
        //     selectedMonth = dayjs(selectedMonth).subtract(currentRange, "month");
        // }
        // if (selectedMonth.format("M") == INITIAL_MONTH) {
        //     selectedMonth = dayjs(selectedMonth).subtract(1, "month");
        //     $(thisButton).css('display', 'none');
        // } else {
        //     $(nextMonthSelectorEl).removeAttr('style');
        //     selectedMonth = dayjs(selectedMonth).subtract(currentRange, "month");
        // }
        

        // if (currentRange === 1) {
        //     if (selectedMonth.format("YYYY-M") == dayjs(TODAY).subtract(1, "month").format("YYYY-M")) {
        //         $(thisButton).css('display', 'none');
        //     }
        // }

        // if (currentRange === 2) {
        //     if (
        //         selectedMonth.format("YYYY-M") == dayjs(TODAY).subtract(2, "month").format("YYYY-M") ||
        //         selectedMonth.format("YYYY-M") == dayjs(TODAY).subtract(3, "month").format("YYYY-M")
        //     ) {
        //         $(thisButton).css('display', 'none');
        //     }
        // }

        // if (currentRange === 3) {
        //     if (selectedMonth.format("YYYY-M") == dayjs(TODAY).subtract(3, "month").format("YYYY-M")) {
        //         $(thisButton).css('display', 'none');
        //     }
        // }
        if ($(nextMonthSelectorEl).attr('style')) $(nextMonthSelectorEl).removeAttr('style');
        createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
    }

    const nextMonthSelectorClickHandler = (e) => {
        if ($(prevMonthSelectorEl).attr('style')) $(prevMonthSelectorEl).removeAttr('style');

        // console.log('nextToggledLastShownMonth', nextToggledLastShownMonth().format("MM"));
        // console.log('isNextToggleWithinRange', isNextToggleWithinRange());


        if (isNextToggleWithinRange()) {
            // console.log('within range', getNextToggledDate(), parseInt(getNextToggledDate2().format("MM")) + 1, validDatesRangeInt.endMonth);
            // if (parseInt(getNextToggledDate2().format("MM")) + 1 == validDatesRangeInt.endMonth && currentRange != 1) nextMonthSelectorEl.style.display = 'none';
            selectedMonth = dayjs(selectedMonth).add(currentRange, "month");
        } else {
            console.log('not within range', nextToggleAmountPassedLimit());
            // amountOfMonthsToRender();
            selectedMonth = dayjs(selectedMonth).add(nextToggleAmountPassedLimit(), "month");
            $(nextMonthSelectorEl).css('display', 'none');  
            // if (getNextToggledDate2().format("YYYY-MM") == validDatesRange.end) {
            //     selectedMonth = dayjs(selectedMonth).add(currentRange, "month");
            // } else {
            //     selectedMonth = dayjs(selectedMonth).add(nextToggleAmountPassedLimit(), "month");
            // }
            
        }

        createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);            
        return;

        let nextSelectedDate = dayjs(selectedMonth);
        // if (currentRange === 1 ) {
        //     nextSelectedDate =  dayjs(selectedMonth).add(currentRange, "month"); 
        // } else {
        // }
        nextSelectedDate =  dayjs(selectedMonth).add(currentRange, "month");
        // const isWithinRange = nextSelectedDate.isBetween(START_DATE, END_DATE, null, '[]'); 
        const thisButton = e.target;
        let amountPassedLimit = 0;
        // if (currentRange === 1 ) {
        //     selectedMonth = dayjs(selectedMonth).add(currentRange, "month");
        // //     $(thisButton).css('display', 'none');
        //     createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
        //     return;
        // }

        if (nextSelectedDate.format("YYYY") == END_YEAR) {
            if (parseInt(nextSelectedDate.format("M")) >= END_MONTH) {
                selectedMonth = dayjs(selectedMonth).add(currentRange, "month");
                $(thisButton).css('display', 'none');
                createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                return;
            }

            if (parseInt(nextSelectedDate.format("M")) > END_MONTH) {
                amountPassedLimit = parseInt(nextSelectedDate.format("M")) - END_MONTH;
                selectedMonth = dayjs(selectedMonth).add(amountPassedLimit, "month");
                $(thisButton).css('display', 'none');
                createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                return;
            }

            nextSelectedDate = dayjs(selectedMonth).add(currentRange + currentRange, "month");
            if (parseInt(nextSelectedDate.format("M")) > END_MONTH) {
                amountPassedLimit = parseInt(nextSelectedDate.format("M")) - END_MONTH;
                if (amountPassedLimit > currentRange) {
                    $(thisButton).css('display', 'none');
                    selectedMonth = dayjs(selectedMonth).add(amountPassedLimit, "month");
                    createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                    return;
                } 
                
                // if (amountPassedLimit === currentRange) {
                //     $(thisButton).css('display', 'none');
                //     selectedMonth = dayjs(selectedMonth).add(amountPassedLimit, "month");
                //     createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                //     return;
                // }
                    $(thisButton).css('display', 'none');
                selectedMonth = dayjs(selectedMonth).add(currentRange, "month");
                createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                return;
            }
        }
            
        selectedMonth = dayjs(selectedMonth).add(currentRange, "month");

        // console.log(selectedMonth.format("YYYY-M"));
        // console.log(dayjs(TODAY).add(12, "month").format("YYYY-M"));

        // if (!isWithinRange) {
            
        //     if (currentRange === 1) ($(thisButton).css('display', 'none'));
        //     if (currentRange === 2) (selectedMonth = dayjs(selectedMonth).subtract(2, "month"), $(thisButton).css('display', 'none'));
        //     if (currentRange === 3) (selectedMonth = dayjs(selectedMonth).add(currentRange - 3, "month"), $(thisButton).css('display', 'none'));
        // } else {
        //     selectedMonth = dayjs(selectedMonth).add(currentRange, "month");
        // }

        // if (currentRange === 1) {    
        //     if (selectedMonth.format("YYYY-M") == dayjs(TODAY).add(12, "month").format("YYYY-M")) {
        //         $(thisButton).css('display', 'none');
        //     }
        // }

        // if (currentRange === 2) {
        //     if (
        //         selectedMonth.format("YYYY-M") == dayjs(TODAY).add(11, "month").format("YYYY-M") ||
        //         selectedMonth.format("YYYY-M") == dayjs(TODAY).add(10, "month").format("YYYY-M")
        //     ) {
        //         $(thisButton).css('display', 'none');
        //     }
        // }

        // if (currentRange === 3) {
        //     if (selectedMonth.format("YYYY-M") == dayjs(TODAY).add(10, "month").format("YYYY-M")) {
        //         $(thisButton).css('display', 'none');
        //     }

        //     // if (selectedMonth.format("YYYY-M") == dayjs(TODAY).add(9, "month").format("YYYY-M")) {
        //     //     $(thisButton).css('display', 'none');
        //     //     currentRange = 2;
        //     // }
        // }

        // if (currentRange === 1 && selectedMonth.format("YYYY-M") == dayjs(TODAY).add(11, "month").format("YYYY-M")) {
        //     $(thisButton).css('display', 'none');
        //     return;
        // } else if (currentRange === 2 && selectedMonth.format("YYYY-M") >= dayjs(TODAY).add(10, "month").format("YYYY-M")) {
        //     $(thisButton).css('display', 'none');
        //     return;
        // } else if (currentRange === 3 && selectedMonth.format("YYYY-M") >= dayjs(TODAY).add(9, "month").format("YYYY-M")) {
        //     $(thisButton).css('display', 'none');
        //     return;
        // }
        // if (!isWithinRange) {
        //     $(thisButton).css('display', 'none');
        // }
        if ($(prevMonthSelectorEl).attr('style')) $(prevMonthSelectorEl).removeAttr('style');
        // console.log(currentRange);
        // if (selectedMonth.format("YYYY-M") >= dayjs(TODAY).add(11, "month").format("YYYY-M")) {
        //     selectedMonth = dayjs(selectedMonth).add(1, "month");
        //     $(thisButton).css('display', 'none');
        // } else {
            // selectedMonth = dayjs(selectedMonth).add(currentRange, "month");
        
        // }
        // createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
        // console.log(selectedMonth.format("M"));
        // const thisButton = e.target;
        // if (parseInt(selectedMonth.format("YYYY")) >= parseInt(INITIAL_YEAR) + 1 && 
        //     parseInt(selectedMonth.format("M")) >= parseInt(INITIAL_MONTH) - 1 - currentRange
        // ) {
        //     $(thisButton).css('display', 'none');
        // } else {
        //     $(prevMonthSelectorEl).removeAttr('style');
        // }
        // selectedMonth = dayjs(selectedMonth).add(currentRange , "month");
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

                // console.log('SELECTED MONTH 1', selectedMonth.format("M"));

                // if (currentRange === 2) {
                //     selectedMonth = dayjs(selectedMonth).add(1, "month");
                // } 
                // else if (currentRange === 3) {
                //     selectedMonth = dayjs(selectedMonth).subtract(2, "month");
                // }


                // console.log(parseInt(selectedMonth.format("M")), INITIAL_MONTH - 1, currentRange);
                // if (parseInt(selectedMonth.format("M")) == parseInt(INITIAL_MONTH) - 1 && currentRange == 1) return;
                
                // else 
                // if (currentRange === 3) {
                //     selectedMonth = dayjs(selectedMonth).add(1, "month");
                // }

                // createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                currentRange = 1;
                createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                // console.log(parseInt(selectedMonth.format("YYYY")) == parseInt(INITIAL_YEAR) && parseInt(selectedMonth.format("M")) == parseInt(END_MONTH));
                // console.log(parseInt(selectedMonth.format("YYYY")) == parseInt(INITIAL_YEAR) + 1 && parseInt(selectedMonth.format("M")) < parseInt(END_MONTH));
                // console.log(parseInt(selectedMonth.format("YYYY")) == parseInt(INITIAL_YEAR) + 1);
                // console.log(parseInt(selectedMonth.format("YYYY")));
                // console.log(parseInt(INITIAL_YEAR + 1));

                // console.log(parseInt(selectedMonth.format("M")) < parseInt(END_MONTH));
                // if (
                //     parseInt(selectedMonth.format("YYYY")) == END_YEAR && 
                //     parseInt(selectedMonth.format("M")) < END_MONTH + 1
                // ) {
                //     $(nextMonthSelectorEl).removeAttr('style');
                // }
                //  == dayjs(TODAY).add(11, "month").format("YYYY-M")) nextMonthSelectorEl.style.display = 'none';
                break;
            case window.innerWidth >= 768 && window.innerWidth < 1024:
                if (currentRange === 2) return;
                
                // if (currentRange === 1) {
                //     selectedMonth = dayjs(selectedMonth).subtract(1, "month");
                // } 
                // else 
                // if (currentRange === 3) {
                //     selectedMonth = dayjs(selectedMonth).add(1, "month");
                // }

                currentRange = 2;
                createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                // console.log('2 resize', selectedMonth.format("YYYY-M"));
                // console.log('2 resize', dayjs(TODAY).add(10, "month").format("YYYY-M"));
                // if (selectedMonth.format("YYYY-M") == dayjs(TODAY).add(11, "month").format("YYYY-M")) nextMonthSelectorEl.style.display = 'none';
                if (selectedMonth.format("YYYY") == END_YEAR) {
                    const nextSelectedDate = dayjs(selectedMonth).add(currentRange, "month");
                    if (nextSelectedDate.format("M") > END_MONTH) {
                        $(nextMonthSelectorEl).css('display', 'none');
                    } else {
                        $(nextMonthSelectorEl).removeAttr('style');
                    }
                }
                break;
            default:
                if (currentRange === 3) return;



                if (selectedMonth.format("YYYY") == END_YEAR) {
                    if (parseInt(selectedMonth.format("M")) + currentRange > END_MONTH) {
                        selectedMonth = dayjs(selectedMonth).subtract(1, "month");
                        $(nextMonthSelectorEl).removeAttr('style');
                        console.log('new cond');
                    } 
                    // if (parseInt(selectedMonth.format("M")) + currentRange < END_MONTH) {
                    //     $(nextMonthSelectorEl).removeAttr('style');
                    // } 
                }
                
                // if (currentRange === 1) {
                //     selectedMonth = dayjs(selectedMonth).subtract(2, "month");
                // } else if (currentRange === 2) {
                //     selectedMonth = dayjs(selectedMonth).subtract(1, "month");
                // }
                
                // selectedMonth = dayjs(new Date(INITIAL_YEAR, INITIAL_MONTH - 1 + currentRange  - 1, 1));
                // if (currentRange === 1) {
                //     selectedMonth = dayjs(selectedMonth).subtract(1, "month");
                // } 
                // else if (currentRange === 2) {
                //     selectedMonth = dayjs(selectedMonth).subtract(1, "month");
                // }
                // console.log('SELECTED MONTH 3', selectedMonth.format("M"));
                currentRange = 3;

                // if (selectedMonth.format("YYYY") == END_YEAR) {
                //     if (parseInt(selectedMonth.format("M")) + currentRange < END_MONTH) {
                //         $(nextMonthSelectorEl).removeAttr('style');
                //     } 
                // }
                
                // if (selectedMonth.format("YYYY-M") == dayjs(TODAY).add(10, "month").format("YYYY-M")) nextMonthSelectorEl.style.display = 'none';
//                 if (selectedMonth.format("YYYY") == END_YEAR) {
//                     if (parseInt(selectedMonth.format("M")) === END_MONTH) {
//                         nextMonthSelectorEl.style.display = 'none';
//                         createCalendar(selectedMonth.format("YYYY"), selectedMonth.subtract(currentRange).format("M"), currentRange);
//                         return;
//                     }
//                     const nextSelectedDate = dayjs(selectedMonth).add(currentRange, "month");
//                     let amountPassedLimit = 0;
                    
//                     if (parseInt(nextSelectedDate.format("M")) > END_MONTH) {
//                         amountPassedLimit = parseInt(nextSelectedDate.format("M")) - END_MONTH;
//                         if (amountPassedLimit + parseInt(selectedMonth.format("M")) > END_MONTH) {
//                             amountPassedLimit = amountPassedLimit + parseInt(selectedMonth.format("M")) - END_MONTH;
//                             if (amountPassedLimit == 2) amountPassedLimit = 1;
//                         }
//                         createCalendar(selectedMonth.format("YYYY"), selectedMonth.add(amountPassedLimit).format("M"), currentRange);
//                         $(nextMonthSelectorEl).css('display', 'none');
//                         return;
//                     }
//                 }
//                 if (!isNextToggleWithinRange){
// console.log('aint');
//                 }
                if (selectedMonth.format("YYYY") == END_YEAR) {
                    if (parseInt(selectedMonth.format("M")) + currentRange > END_MONTH) {
                        nextMonthSelectorEl.style.display = 'none';
                        const amountPassed = currentRange - (parseInt(selectedMonth.format("M")) + currentRange - END_MONTH)
                        console.log('yo resize 3', parseInt(selectedMonth.format("M")) + currentRange - END_MONTH);
                        // console.log('modulas', END_MONTH + currentRange == END_MONTH% parseInt(selectedMonth.format("M")) + currentRange);
                        if (parseInt(selectedMonth.format("M")) + currentRange - 1 == END_MONTH) {
                            createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                            return
                        }
                        // if (amountPassed === 1) {
                        //     selectedMonth = dayjs(selectedMonth).add(amountPassed, "month");
                        // } else {
                            selectedMonth = dayjs(selectedMonth).subtract(amountPassed, "month");
                        // }
                    }
                }
                createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                break;
        }

        // console.log(selectedMonth.format("M") + currentRange > END_MONTH);
        // if (selectedMonth.format("YYYY") == END_YEAR) {
        //     const nextSelectedDate = dayjs(selectedMonth).add(currentRange, "month");
        //     if (nextSelectedDate.format("M") > END_MONTH) {
        //     // if (selectedMonth.format("M") + currentRange > END_MONTH) {
        //         selectedMonth = dayjs(selectedMonth).subtract(1, "month");
        //         createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
                
        //     } else {
        //         $(nextMonthSelectorEl).removeAttr('style');
        //     }
        // } 

        // console.log('resize');
        // let nextSelectedDate = dayjs(selectedMonth).add(currentRange, "month");
        // if (currentRange === 1 ) {
        //     nextSelectedDate =  dayjs(selectedMonth).add(currentRange, "month"); 
        // } else {
        //     nextSelectedDate =  dayjs(selectedMonth).add(currentRange + currentRange, "month");
        // }

        // console.log(parseInt(selectedMonth.format("M")));
        // if (nextSelectedDate.format("YYYY") == END_YEAR) {
        //     if (parseInt(nextSelectedDate.format("M")) <= END_MONTH) {
        //         console.log('show next btn');
        //         if ($(nextMonthSelectorEl).attr('style')) $(nextMonthSelectorEl).removeAttr('style');
        //     }
        // }

        // console.log(parseInt(selectedMonth.format("M")));
        // if (selectedMonth.format("YYYY") == END_YEAR) {
        //     if (parseInt(selectedMonth.format("M")) <= END_MONTH) {
        //         console.log('show next btn');
        //         if ($(nextMonthSelectorEl).attr('style')) $(nextMonthSelectorEl).removeAttr('style');
        //     }
        // }
        

        // switch (currentRange) {
        //     case 1:
                
        //         break;
        
        //     default:
        //         break;
        // }
        // selectedMonth = dayjs(selectedMonth).subtract(currentRange, "month");
    }

    resizeHandler();
    initMonthSelectors();

    const debouncedResizeHandler = debounce(resizeHandler, 100);
    $(window).resize(debouncedResizeHandler);
});
