import dayjs from "dayjs";

const weekday = require("dayjs/plugin/weekday");
var isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(weekday);
dayjs.extend(isBetween);

$(document).ready(function () {
  let calendarForecaseAmount = 3;
  // make a copy of INITIAL_YEAR but update it to be 2 months ahead
  let INITIAL_YEAR_2 = dayjs();
  INITIAL_YEAR_2 = dayjs(INITIAL_YEAR_2).add(0, "month");
  // make a copy of INITIAL_MONTH but update it to be 2 months ahead
  let INITIAL_MONTH_2 = dayjs().format("M");
  INITIAL_MONTH_2 = dayjs(INITIAL_MONTH_2).add(0, "month").format("M");

  let currentRange;
  const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const START_DATE = dayjs(INITIAL_YEAR_2).subtract(1, "month").format("YYYY-MM");
  const END_DATE = dayjs(INITIAL_YEAR_2).add(11, "month").format("YYYY-MM");
  const END_YEAR = parseInt(dayjs(INITIAL_YEAR_2).add(11, "month").format("YYYY"));
  const END_MONTH = parseInt(dayjs(INITIAL_YEAR_2).add(11, "month").format("M"));
  const INITIAL_YEAR = dayjs(INITIAL_YEAR_2).format("YYYY");
  const INITIAL_MONTH = dayjs(INITIAL_YEAR_2).format("M");
  // // make a copy of INITIAL_YEAR but update it to be 2 months ahead
  // let INITIAL_YEAR_2 = dayjs().format("YYYY");
  // INITIAL_YEAR_2 = dayjs(INITIAL_YEAR_2).add(2, "month").format("YYYY");
  // // make a copy of INITIAL_MONTH but update it to be 2 months ahead
  // let INITIAL_MONTH_2 = dayjs().format("M");
  // INITIAL_MONTH_2 = dayjs(INITIAL_MONTH_2).add(2, "month").format("M");
  
  

  const validDatesRange = {
    start: START_DATE,
    end: END_DATE,
  };
  const validDatesRangeInt = {
    startYear: parseInt(dayjs(INITIAL_YEAR_2).format("YY")),
    startMonth: parseInt(dayjs(INITIAL_YEAR_2).subtract(1, "month").format("MM")),
    endYear: parseInt(dayjs(INITIAL_YEAR_2).add(11, "month").format("YY")),
    endMonth: parseInt(dayjs(INITIAL_YEAR_2).add(11, "month").format("MM")),
  };
  let selectedMonth = dayjs(new Date(INITIAL_YEAR, INITIAL_MONTH - 1));
  let currentMonthDays;
  let previousMonthDays;
  let nextMonthDays;
  let localDrawData = [];

  const url404 = "https://httpstat.us/404";
  const url = "http://localhost:3000/DrawDates";

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
    localDrawData = window.upcomingDrawsData.DrawDates;

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

      // console.log(localDrawData);
      
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
        const DrawDate = localDrawData.filter(
          (element) =>
            element.DrawDate.split("-")[0] ==
              dayjs(selectedMonth).add(i, "month").format("YYYY") &&
            element.DrawDate.split("-")[1] ==
              dayjs(selectedMonth).add(i, "month").format("MM") &&
            element
        );

        // filter `open-draw-dates` within current calendar range
        const openDrawDate = localDrawData.filter(
          (element) =>
            element.OpenDate.split("-")[0] ==
              dayjs(selectedMonth).add(i, "month").format("YYYY") &&
            element.OpenDate.split("-")[1] ==
              dayjs(selectedMonth).add(i, "month").format("MM") &&
            element.DrawType !== "Q " &&
            element.DrawType !== "W " &&
            element
        );

        let drawData;

        days.forEach((day) => {
          // filter draw-dates down to current day
          if (DrawDate && DrawDate.length > 0) {
            DrawDate.every((draw) => {
              if (day.dayOfMonth == draw.DrawDate.split("-")[2].split("T")[0]) {
                drawData = {
                  ...drawData,
                  DrawDate: {
                    DrawType: draw.DrawType.trim(),
                    drawText: draw.DrawDescription,
                    drawIsVIP: draw.IsVIPOnly,
                    DrawName: draw.DrawName,
                    DrawDate: false,
                    DrawDateStamp: draw.OpenDate,
                  },
                };
                return false;
              } else {
                drawData = { ...drawData, DrawDate: null };
                return true;
              }
            });
          }
          // filter open-draw-dates down to current day
          if (openDrawDate && openDrawDate.length > 0) {
            openDrawDate.every((draw) => {
              if (day.dayOfMonth == draw.OpenDate.split("-")[2].split("T")[0]) {
                drawData = {
                  ...drawData,
                  drawOpenDate: {
                    DrawType: draw.DrawType.trim(),
                    drawText: draw.DrawDescription,
                    drawIsVIP: draw.IsVIPOnly,
                    DrawName: draw.DrawName,
                    drawOpenDate: true,
                    DrawDateStamp: draw.OpenDate,
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
        (drawData.DrawDate && drawData.DrawDate.drawIsVIP) ||
        (drawData.drawOpenDate && drawData.drawOpenDate.drawIsVIP)
      ) {
        const vipIcon = document.createElement("div");
        vipIcon.classList.add("vip-icon");
        vipIcon.innerHTML =
          '<img src="./assets/images/calendar-vip-crown.svg" alt="vip-icon" />';
          // '<img src="/RSLLOTT/assets/Frontend RSLLOTT/images/icons/calendar-vip-crown.svg" alt="vip-icon" />';
          // '<img src="./assets/Frontend RSLLOTT/images/icons/calendar-vip-crown.svg" alt="vip-icon" />';
        drawTextWrapper.appendChild(vipIcon);
      }

      if (drawData.DrawDate) {
        vip_home_tile_html = `<strong>${drawData.DrawDate.DrawName}</strong>`;

        switch (drawData.DrawDate.DrawType) {
          case "W": // WIN 5k
            dayElementClassList.add("draw-day", `draw-type-1`);
            drawTextWrapper.innerHTML = win_5k_tile_html;
            break;

          case "Q": // WIN 100k
            dayElementClassList.add("draw-day", `draw-type-2`);
            drawTextWrapper.innerHTML = win_100k_tile_html;
            break;

          case "H": // WIN a Home VIP/non-VIP
            break;

          default: // do nothing
            dayElementClassList.add("draw-day", `draw-type-4`);
            let updatedEventTitle = vip_home_tile_html
              .replace("AU", "")
              .replace("L", "");

            if (drawData.DrawDate.drawIsVIP) {
              dayElementClassList.add("vip");
            } else {
              // updatedEventTitle = `<span>VIP</span> ${updatedEventTitle}`;
            }
            drawTextWrapper.innerHTML += updatedEventTitle;
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
    return [...Array(getNumberOfDaysInMonth(year, month))].map((day, index) => {
      return {
        date: dayjs(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD"),
        dayOfMonth: index + 1,
        isCurrentMonth: true,
      };
    });
  }

  function createDaysForPreviousMonth(year, month) {
    const firstDayOfTheMonthWeekday = getWeekday(currentMonthDays[0].date);
    const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, "month");
    // Render calendar-week start to be sunday (firstDayOfTheMonthWeekday === 0)
    // or for EG. set to 6 if calendar-day starts on a Monday
    const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
      ? firstDayOfTheMonthWeekday
      : 0;

    const previousMonthLastMondayDayOfMonth = dayjs(currentMonthDays[0].date)
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

    return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
      return {
        date: dayjs(
          `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
        ).format("YYYY-MM-DD"),
        dayOfMonth: index + 1,
        isCurrentMonth: false,
      };
    });
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
      toggleDirection === "prev" ? Math.abs(currentRange) * -1 : currentRange;
    return dayjs(selectedMonth)
      .add(directionalToggleAmount, "month")
      .format("YYYY-MM");
  }

  function isToggleAmountWithinRange(toggleDirection = null) {

    // 12
    // 11
    // 11 + 3 = 2 

    let index = 0;
    var futureRange = dayjs(validDatesRange.start).add(currentRange - 1, 'M'); // 2 feb
    console.log('passedRange', futureRange.format('YYYY-MM'));
    // let myFutureMonth = dayjs(selectedMonth).add(currentRange + 2, "M").format('YYYY-MM');
    while(index < currentRange) {
        // selectedMonth = dayjs(selectedMonth).subtract(1, "month");
        selectedMonth = dayjs(selectedMonth).subtract(1, "month");
        $(nextMonthSelectorEl).removeAttr("style");

      if (dayjs(validDatesRange.start).format("YYYY-MM") == dayjs(selectedMonth).format('YYYY-MM')) {
        console.log('futureRange', futureRange.format('YYYY-MM'));
        console.log('selectedMonth', dayjs(selectedMonth).format('YYYY-MM'));

        $(prevMonthSelectorEl).css('display', 'none');
        console.log('selectedMonth', nextMonthSelectorEl);
        return false;
      }

      index++;
    }

    return;




    if (getNextToggledDate(toggleDirection) == validDatesRange.start)
      return false;
    return dayjs(getNextToggledDate(toggleDirection)).isBetween(
      validDatesRange.start,
      validDatesRange.end,
      null,
      "[]"
    );
  }

  function isNextToggleWithinRange() {

    let index = 0;
    var passedRange = dayjs(validDatesRange.end).subtract(currentRange - 1, 'M'); // 5 + 3 = 8
    console.log('passedRange', passedRange.format('YYYY-MM'));
    // let myFutureMonth = dayjs(selectedMonth).add(currentRange + 2, "M").format('YYYY-MM');
    while(index < currentRange) {
        // selectedMonth = dayjs(selectedMonth).subtract(1, "month");
        selectedMonth = dayjs(selectedMonth).add(1, "month");
        $(prevMonthSelectorEl).removeAttr("style");

      if (passedRange.format('YYYY-MM') == dayjs(selectedMonth).format('YYYY-MM')) {
        console.log('passedRange', passedRange.format('YYYY-MM'));
        console.log('selectedMonth', dayjs(selectedMonth).format('YYYY-MM'));

        $(nextMonthSelectorEl).css('display', 'none');
        console.log('selectedMonth', nextMonthSelectorEl);
        return false;

      }
      
      // let myFutureMonth = dayjs(selectedMonth).add(currentRange + 1, "M").format('YYYY-MM');

      // if (myFutureMonth == validDatesRange.end) {
      //   console.log(myFutureMonth == validDatesRange.end)
      //   console.log('fut', myFutureMonth, 'end', validDatesRange.end)
      // } 
      index++;
      
      // myFutureMonth = dayjs(myFutureMonth).add(1, "M").format('YYYY-MM');
      
      // if (myFutureMonth == validDatesRange.end) {
      //   console.log(myFutureMonth == validDatesRange.end)
      //   console.log('fut', myFutureMonth, 'end', validDatesRange.end)
      // } 
      

      // if (myFutureMonth == validDatesRange.end) {
      //   return false;
      // }
      
      // console.log(myFutureMonth == validDatesRange.end)
      // console.log('fut', myFutureMonth, 'end', validDatesRange.end)
      
      
      // console.log(selectedMonth.format('YYYY-MM'));
      
    }
    return;

    console.log('hi')

    // if (index == currentRange - 1) {
    //   return false;
    // } else {
    //   return true;
    // }


        // var currentDate = moment('2015-10-31');
    // var futureMonth = moment(currentDate).add(12, 'M');
    // var futureMonthEnd = moment(futureMonth).endOf('month');

    let shownMonths;
    if (currentRange == 2) shownMonths = 1;
    if (currentRange == 3) shownMonths = 2;

    var currentDate = dayjs(selectedMonth); // 5
    var passedRange = dayjs(currentDate).subtract(currentRange, 'M'); // 5 + 3 = 8
    
    var futureMonth = dayjs(currentDate).add(currentRange + shownMonths, 'M'); // 5 + 3 + 2 = 10
    var futureMonthEnd = dayjs(futureMonth).endOf('month');
    // console.log('passedRange', passedRange.format('YYYY-MM-DD'));

    // console.log('yo', passedRange.isSame(currentDate.format('YYYY-MM-DD')))
    // console.log('yo', passedRange.format('YYYY-MM-DD'))
    // console.log('yo', currentDate.format('YYYY-MM-DD'))

    // dayjs()




// console.log('orig', currentDate.format('YYYY-MM-DD'));
// console.log('orig', futureMonth.format('YYYY-MM-DD'));
// console.log('orig', futureMonthEnd.format('YYYY-MM-DD'));


if(currentDate.date() != futureMonth.date() && futureMonth.isSame(futureMonthEnd.format('YYYY-MM-DD'))) {
    console.log('true');
} else {
  console.log('false');
}
    console.log(dayjs(validDatesRange.end).subtract(currentRange + 1, "month").format("YYYY-MM"))
    if (getNextToggledDate() == validDatesRange.start)
    return false;
    return dayjs(getNextToggledDate()).isBetween(
      validDatesRange.start,
      dayjs(validDatesRange.end).subtract(currentRange + 1, "month"),
      null,
      "[]"
    );

    if (getNextToggledDate() == validDatesRange.end) {

      console.log('false');
    return false;
    }


    console.log(dayjs(validDatesRange.end).subtract(currentRange, "month").format("YYYY-MM"));

  console.log('isBetween ??', dayjs(getNextToggledDate()).isBetween(
    validDatesRange.start,
    dayjs(validDatesRange.end).subtract(currentRange, "month"),
    null,
    "[]"
  ));
  return dayjs(getNextToggledDate()).isBetween(
    validDatesRange.start,
    validDatesRange.end,
    null,
    "[]"
  );


    let currentMonth = parseInt(dayjs(selectedMonth).format("MM"));
    let currentYear = parseInt(dayjs(selectedMonth).format("YY"));

    
   
    
    if (currentRange == 1) {
      if (currentMonth == 12) {
        currentMonth = 0;
        currentYear += 1;
      }

      if (currentYear >= (validDatesRangeInt.endYear) && currentMonth + currentRange  == validDatesRangeInt.endMonth) {
        return false;
      } else {
        return true;
      }
    }

    if (currentRange == 2) {
      if (currentMonth % currentRange == 1) {
        currentMonth = currentMonth - 1;
      }

      if (parseInt(dayjs(selectedMonth).format("YY")) >= (validDatesRangeInt.endYear) && currentMonth + currentRange + currentRange  >= validDatesRangeInt.endMonth) {
        return false;
      } else {
        return true;
      }
    }

    if (parseInt(dayjs(selectedMonth).format("YY")) >= (validDatesRangeInt.endYear) && currentMonth + shownMonths  + currentRange >= validDatesRangeInt.endMonth) {
      return false;
    } else {
      return true;
    }
  }

  function amountOfMonthsToRender() {
    let nextClickStartMonth = parseInt(dayjs(selectedMonth)
      .subtract(currentRange, "month")
      .format("M")); // 10 | 11 | 12

    if (
      currentRange == 1 ||
      nextClickStartMonth - validDatesRangeInt.startMonth == 0
    ) {
      return currentRange;
    }

    // const currentMonth = dayjs(selectedMonth).format("MM");
    let currentMonth = parseInt(dayjs(selectedMonth).format("MM"));
    const prevMonth = dayjs(selectedMonth).subtract(currentRange, "month").format("MM");

    // console.log(currentMonth, pew);

    console.log( dayjs(prevMonth).isBetween(
      validDatesRange.start,
      validDatesRange.end,
      null,
      "[]"
    ));

    // isBetween(currentMonth, prevMonth, currentMonth, null, "[]");
    // 2 - 3 > 1 || 

      // let currentMonth = parseInt(dayjs(selectedMonth).format("MM"));
      // let currentYear = parseInt(dayjs(selectedMonth).format("YY"));
      if (nextClickStartMonth == 12) {
        nextClickStartMonth = 0;
        // currentYear += 1;
      }

      // if (currentMonth + currentRange > 12) {
      //   return currentMonth + currentRange - 12;

      // }

      // if (currentRange === 2) {
      //   if(currentMonth % currentRange == 1) {
      //     return currentRange - 1;
      //   }
      //   return currentRange ;
      // }


      // const date1 = dayjs(selectedMonth);
      // const newDate = dayjs(selectedMonth).subtract(currentRange, "month").format("YYYY-MM");

      // console.log(date1.diff(newDate, 'month')) // 7


      // if (nextClickStartMonth > 1) {

      // if (currentMonth - currentRange == -1) {
      //   return currentRange - 1;
      // } else if (currentMonth - currentRange == -2) {
      //   return currentRange - 2;
      // }


    if (nextClickStartMonth - validDatesRangeInt.startMonth == -1) {
      if (currentRange == 2) {
        return currentRange - 1;
      }
      // return currentRange - 2;
    }

    // if (nextClickStartMonth - validDatesRangeInt.startMonth == -2) {
    //   if (currentRange == 2) return currentRange - 1;
    //   return currentRange - 2;
    // } 

    return currentMonth - validDatesRangeInt.startMonth;

    if (currentMonth - currentRange == -1) {
      return currentRange - 2;
    }

    if (currentMonth - currentRange == 0) {
      return currentRange - 1;
    }

    if (currentMonth - currentRange == 1) {
      return currentRange - 3;
    }

    // 3 - 3 > 1 = 0
    // 3 - 2 = 1
    // 3 - 1 = 2
    
    
    // 4 - 3 == 1
    // 3 - 3 == 0
    // 2 - 3 == -1

    // 3 - 2 == 1
    // 2 - 2 == 0




    // if (currentMonth % currentRange == 1) {
    //   return currentRange - 1;
    // }

    // if (currentMonth - currentRange == 0) {
    //   if (currentRange == 3) return currentRange - 1;
    //   return currentRange - 1;
    // } else if (currentMonth - currentRange == -1) {
    //   return currentRange - 2;
    // }
  }

  function nextToggleAmountPassedLimit() {
    const currentMonth = parseInt(dayjs(selectedMonth).format("MM"));

    let shownMonths;
    if (currentRange == 2) shownMonths = 1;
    if (currentRange == 3) shownMonths = 2;

    if (currentMonth % currentRange == 1) {
      return currentRange - 1;
    }

    if (currentMonth + currentRange + shownMonths > 12) {
      // return currentMonth + currentRange + 2 - 12;
      const newTime = validDatesRangeInt.endMonth + 12;
		 if (newTime - (currentMonth + currentRange + shownMonths) == 0) {
      return currentRange;
     };
     
     if (newTime - (currentMonth + currentRange + shownMonths) == 1) {
      return currentRange - 1;
     }

    }

    if ((currentMonth + currentRange - 1 + currentRange) > 12) {
      // if (currentMonth + currentRange - 1 + currentRange == 12) return currentRange;
      return currentRange - ((currentMonth + currentRange + 2) - 12)
    }
    

    // 7 + 2 + 3

    // validDatesRangeInt.endMonth - (currentMonth + currentRange - 1 + currentRange)
    // validDatesRangeInt.endMonth - (currentMonth + currentRange - 1 + currentRange)
    return validDatesRangeInt.endMonth - (currentMonth + currentRange)
    // let shownMonths;
    if (currentRange == 2) shownMonths = 2;
    if (currentRange == 3) shownMonths = 2;
    
    if (currentRange === 1) {
      return currentRange;
    }

   
    
    if (currentRange === 2) {
      if(currentMonth % currentRange == 1) {
        return currentRange - 1;
      }
      return currentRange ;
    }

    const amountOfMonthsToRender = currentRange - ((currentMonth + shownMonths + currentRange) - validDatesRangeInt.endMonth);

    return amountOfMonthsToRender
  }

  const prevMonthSelectorClickHandler = (e) => {
    isToggleAmountWithinRange();
    // if ($(nextMonthSelectorEl).attr("style"))
    //   $(nextMonthSelectorEl).removeAttr("style");
    // if (isToggleAmountWithinRange("prev")) {
    //   selectedMonth = dayjs(selectedMonth).subtract(currentRange, "month");
    // } else {
    //   $(prevMonthSelectorEl).css("display", "none");
    //   selectedMonth = dayjs(selectedMonth).subtract(
    //     amountOfMonthsToRender(),
    //     "month"
    //   );
    // }
    updateEventsCalendarView(url);
  };

  const nextMonthSelectorClickHandler = (e) => {
    isNextToggleWithinRange();
    // if ($(prevMonthSelectorEl).attr("style"))
    //   $(prevMonthSelectorEl).removeAttr("style");
    // if (isNextToggleWithinRange()) {
    //   selectedMonth = dayjs(selectedMonth).add(currentRange, "month");
    // } else {
    //   selectedMonth = dayjs(selectedMonth).add(
    //     nextToggleAmountPassedLimit(),
    //     "month"
    //   );
    //   $(nextMonthSelectorEl).css("display", "none");
    // }
    updateEventsCalendarView(url);
  };

  const resizeHandler = () => {
		let monthAdjustAmnt;
				
		switch (true) {
			case $(window).width() < 768:
				if (currentRange === 1) return;
				if (selectedMonth.format("YYYY") == END_YEAR) {
					if (parseInt(selectedMonth.format("M")) < END_MONTH) {
						$(nextMonthSelectorEl).removeAttr("style");
					}
				}
				currentRange = 1;
				updateEventsCalendarView();
			break;

			case $(window).width() >= 768 && $(window).width() < 1140:
				if (currentRange === 2) return;
				
				let currMonth = parseInt(dayjs(selectedMonth).format("M"));

				if (currentRange === 1) {
					if (selectedMonth.format("YYYY") == END_YEAR) {
						if (currMonth == END_MONTH) {
							$(nextMonthSelectorEl).css("display", "none");
							selectedMonth = dayjs(selectedMonth).subtract(1, "month");
						}
					}
					$(nextMonthSelectorEl).removeAttr("style");
					currentRange = 2;
					updateEventsCalendarView();
					return
				}

				if (currentRange === 3) {
					if (selectedMonth.format("YYYY") == END_YEAR) {
						if (currMonth == (END_MONTH - currentRange)) {
							$(nextMonthSelectorEl).css("display", "none");
							selectedMonth = dayjs(selectedMonth).subtract(2, "month");
						} else if (currMonth == (END_MONTH - currentRange + 1)) {
							$(nextMonthSelectorEl).css("display", "none");
							selectedMonth = dayjs(selectedMonth).subtract(1, "month");
						}
					}
					$(nextMonthSelectorEl).removeAttr("style");
					currentRange = 2;
					updateEventsCalendarView();
					return
				}
				
				// initial load
				currentRange = 2;
				updateEventsCalendarView();
			break;

			default:
				currentRange === 1 ? monthAdjustAmnt = 2 : monthAdjustAmnt = 1;
				if (currentRange === 3) return;
				if (selectedMonth.format("YYYY") == END_YEAR) {
					if (parseInt(selectedMonth.format("M")) + currentRange >= END_MONTH) {
            selectedMonth = dayjs(selectedMonth).subtract(monthAdjustAmnt, "month");
          }
					currentRange = 3;
					updateEventsCalendarView();
					break;
				}

				currentRange = 3;
				if (selectedMonth.format("YYYY") == END_YEAR) {
					if (parseInt(selectedMonth.format("M")) + currentRange > END_MONTH) {
						nextMonthSelectorEl.style.display = "none";
						const amountPassed =
							currentRange -
							(parseInt(selectedMonth.format("M")) + currentRange - END_MONTH);

						if (
							parseInt(selectedMonth.format("M")) + currentRange - 1 ==
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
				updateEventsCalendarView();
			break;
		}
	};

  const resizeHandlerOrig = () => {
    switch (true) {
      case $(window).width() < 768:
        if (currentRange === 1) return;
        if (selectedMonth.format("YYYY") == END_YEAR) {
          if (parseInt(selectedMonth.format("M")) < END_MONTH) {
            $(nextMonthSelectorEl).removeAttr("style");
          }
        }
        currentRange = 1;
        updateEventsCalendarView(url);
      break;

      case $(window).width() >= 768 && $(window).width() < 1140:
        if (currentRange === 2) return;
        currentRange = 2;
        updateEventsCalendarView(url);
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

          if (selectedMonth.format("M") == END_MONTH - currentRange - 1) {
            selectedMonth = dayjs(selectedMonth).subtract(1, "month");
            updateEventsCalendarView(url);
          }
        }
      break;

      default:
        if (currentRange === 3) return;
        if (selectedMonth.format("YYYY") == END_YEAR) {
          if (parseInt(selectedMonth.format("M")) + currentRange >= END_MONTH) {
            selectedMonth = dayjs(selectedMonth).subtract(1, "month");
            // $(nextMonthSelectorEl).removeAttr("style");
          }      
          currentRange = 3;
          updateEventsCalendarView(url);
          break;
        }
        
        currentRange = 3;
        if (selectedMonth.format("YYYY") == END_YEAR) {
          if (parseInt(selectedMonth.format("M")) + currentRange > END_MONTH) {
            nextMonthSelectorEl.style.display = "none";
            const amountPassed =
              currentRange -
              (parseInt(selectedMonth.format("M")) + currentRange - END_MONTH);

            if (
              parseInt(selectedMonth.format("M")) + currentRange - 1 ==
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
        updateEventsCalendarView(url);
      break;
    }
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
