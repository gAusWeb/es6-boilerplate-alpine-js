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

  let initialClickMonth = parseInt(INITIAL_MONTH);
  // console.log('init', initialClickMonth);
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
  // console.log(INITIAL_YEAR);
  // console.log(INITIAL_MONTH - 1);
  // console.log(INITIAL_MONTH - 1);
  let selectedMonth = dayjs(new Date(INITIAL_YEAR, INITIAL_MONTH - 1));
  // console.log("selectedMonth", selectedMonth.format("MM-YYYY"));
  // let startMonth = dayjs(new Date(INITIAL_YEAR, INITIAL_MONTH - 1)); 
  let currentMonthDays;
  let previousMonthDays;
  let nextMonthDays;

  // console.log("init month", dayjs(selectedMonth).format("MM"));
  // console.log("init month", dayjs(selectedMonth).format("MM"));
  // console.log("init month", parseInt(dayjs(selectedMonth).format("MM")) % 3);

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
        // TODO: Updated error functionality, once confirmed by RSL
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
        // console.log("localDrawData => ", localDrawData);
        // console.log("localDrawData => ", selectedMonth.format("YYYY-MM"));
        // filter 'draw-dates' to within current calendar range (1 month behind, 11 months ahead)
        const drawDate = localDrawData.filter(
          (element) =>
            element.drawDate.split("-")[0] ==
              dayjs(selectedMonth).add(i, "month").format("YYYY") &&
            element.drawDate.split("-")[1] ==
              dayjs(selectedMonth).add(i, "month").format("MM") &&
            element
        );

        // console.log("drawDate => ", drawDate);

        // filter `open-draw-dates` within current calendar range
        const openDrawDate = localDrawData.filter(
          (element) =>
            element.openDate.split("-")[0] ==
              dayjs(selectedMonth).add(i, "month").format("YYYY") &&
            element.openDate.split("-")[1] ==
              dayjs(selectedMonth).add(i, "month").format("MM") &&
            element.drawType !== "Q " &&
            element.drawType !== "W " &&
            element
        );

        // console.log("openDrawData => ", openDrawDate);

        let drawData;

        days.forEach((day) => {
          // filter draw-dates down to current day
          if (drawDate && drawDate.length > 0) {
            drawDate.every((draw) => {
              if (day.dayOfMonth == draw.drawDate.split("-")[2].split("T")[0]) {
                drawData = {
                  ...drawData,
                  drawDate: {
                    drawType: draw.drawType.trim(),
                    drawText: draw.drawDescription,
                    drawIsVIP: draw.isVIPOnly,
                    drawName: draw.drawName,
                    drawDate: false,
                    drawDateStamp: draw.openDate,
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
              if (day.dayOfMonth == draw.openDate.split("-")[2].split("T")[0]) {
                drawData = {
                  ...drawData,
                  drawOpenDate: {
                    drawType: draw.drawType.trim(),
                    drawText: draw.drawDescription,
                    drawIsVIP: draw.isVIPOnly,
                    drawName: draw.drawName,
                    drawOpenDate: true,
                    drawDateStamp: draw.openDate,
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

    // console.log("drawData => ", drawData);

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
          '<img src="./assets/images/crown.svg" alt="vip-icon" />';
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
            break;

          default: // do nothing
            dayElementClassList.add("draw-day", `draw-type-4`);
            let updatedEventTitle = vip_home_tile_html
              .replace("AU", "")
              .replace("L", "");

            if (drawData.drawDate.drawIsVIP) {
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
    return dayjs(selectedMonth).add(currentRange + currentRange, "month");
  }

  function isNextToggleWithinRange() {
    console.log('getNextToggleTest', isToggleAmountWithinRange() == validDatesRange.end);
    // console.log("huh", parseInt(nextToggledLastShownMonth().format("YY")));
    // console.log("huh", validDatesRangeInt.endYear);
    // console.log("huh", parseInt(nextToggledLastShownMonth().format("M")));
    // console.log("huh", validDatesRangeInt.endMonth);

    let currentMonth = parseInt(dayjs(selectedMonth).format("MM"));
    const currentYear = parseInt(dayjs(selectedMonth).format("YY"));


    // if ()

    let shownMonths;
    if (currentRange == 2) shownMonths = 1;
    if (currentRange == 3) shownMonths = 2;


    // console.log("currentMonth", currentMonth);
    // console.log("nextClickMonthStart", currentMonth + currentRange + shownMonths);
    
    // console.log("end MM", validDatesRangeInt.endMonth);
    // console.log("end YYYY", validDatesRangeInt.endYear);
    
    // console.log(parseInt(dayjs(selectedMonth).format("YY")) >= (validDatesRangeInt.endYear)); // working !!!

    // console.log(parseInt(dayjs(selectedMonth).add(currentRange + currentRange).format("M")) >= validDatesRangeInt.endMonth);
    // console.log('currentRange + currentRange', dayjs(selectedMonth).add(currentRange + currentRange, "month").format("M") >= validDatesRangeInt.endMonth);
    let nextEndMonth = currentMonth + currentRange;

    // console.log("currM(int)", parseInt(dayjs(selectedMonth).format("MM")), " currentMonth  + range", currentMonth + currentRange + shownMonths, + " " + currentMonth + currentRange >= validDatesRangeInt.endMonth);

    

    // console.log("currentMonth", currentMonth);
    // console.log("nextEndMonth", nextEndMonth);
    // // console.log("nextEndMonth - validEndMonth", nextEndMonth - validDatesRangeInt.endMonth);
    
    // if (nextEndMonth > 12) {
    //   console.log("nextEndMonth - validEndMonth", nextEndMonth - validDatesRangeInt.endMonth);
    // } else {
    //   console.log("nextMonth", currentMonth + currentRange - 12);
    // }

    // console.log("currentMonth", currentMonth);
    // console.log('next M', nextEndMonth);
    // console.log('next next M', nextEndMonth + currentRange);
    // console.log('validDatesRangeInt.endMonth', validDatesRangeInt.endMonth);
    
    // if (parseInt(nextToggledLastShownMonth().format("YY")) === validDatesRangeInt.endYear && nextEndMonth > 12) {
    //   nextEndMonth = nextEndMonth - 12;
    //     console.log("nextMonth - 12", nextEndMonth - 12);
    // }

    // console.log('currentMonth => ', currentMonth);
    // console.log('currentYear => ', currentYear);


    
    // console.log(parseInt(nextToggledLastShownMonth().format("YY")) === validDatesRangeInt.endYear);
    // console.log(nextEndMonth >= validDatesRangeInt.endMonth);

    // console.log('currentRange', currentRange);


    // // console.log("currentMonth == ", nextEndMonth == validDatesRangeInt.endMonth);
    
    // // console.log("currentMonth > ", currentMonth + currentRange > validDatesRangeInt.endMonth);

    // // dayjs(selectedMonth).add(currentRange, "month");

    // // console.log(parseInt(nextToggledLastShownMonth().format("YY")) === validDatesRangeInt.endYear);
    // // console.log(parseInt(nextToggledLastShownMonth().format("MM")) >= validDatesRangeInt.endMonth);
    // console.log('parseInt(nextToggledLastShownMonth().format("YY"))', parseInt(nextToggledLastShownMonth().format("YY")));




      // console.log(dayjs(selectedMonth).add(12, "month").format("YYYY"));
      // console.log(parseInt(nextToggledLastShownMonth().format("YY")));

      // dayjs(selectedMonth).add(currentRange, "month").format('YY') === validDatesRangeInt.endYear
    // if ((parseInt(nextToggledLastShownMonth().format("YY")) === validDatesRangeInt.endYear || dayjs(selectedMonth).add(12, "month") === validDatesRangeInt.endYear) &&
    //   parseInt(nextToggledLastShownMonth().format("M")) > validDatesRangeInt.endMonth) {
    //   return false;
    // } else {
    //   return true;
    // }

    console.log('NEXT CLICK M', currentMonth + shownMonths + currentRange);

    if (currentRange == 1) {

      if (currentMonth + currentRange + currentRange == validDatesRangeInt.endMonth) {
      // if (parseInt(dayjs(selectedMonth).format("YY")) >= (validDatesRangeInt.endYear) && currentMonth + shownMonths + currentRange >= validDatesRangeInt.endMonth) {
        return false;
      } else {
        return true;
      }

    }

    if (currentRange == 2 || currentRange == 1) {
      // console.log(currentMonth ))
      // if (parseInt(dayjs(selectedMonth).format("YY") >= (validDatesRangeInt.endYear)) && currentMonth + shownMonths + currentRange + currentRange >= validDatesRangeInt.endMonth) {
      //   return false;
      // }

      console.log('currentMonth + currentRange', currentMonth + currentRange);
      
      if (currentMonth % currentRange == 1) {
        currentMonth = currentMonth - 1;
      }

      console.log('currentMonth %', currentMonth % currentRange);
      console.log('is it?????', parseInt(dayjs(selectedMonth).format("YY")) >= (validDatesRangeInt.endYear) && currentMonth + shownMonths + currentRange + currentRange  >= validDatesRangeInt.endMonth);
      // if (currentMonth % currentRange == 0) {
      //   currentMonth
      // }
      if (parseInt(dayjs(selectedMonth).format("YY")) >= (validDatesRangeInt.endYear) && currentMonth + shownMonths + currentRange + currentRange  >= validDatesRangeInt.endMonth) {
        return false;
      }

      if (currentMonth % currentRange == 0) {
        // if ( parseInt(selectedMonth.format("M")) + currentRange == validDatesRangeInt.endMonth) {
        if (parseInt(dayjs(selectedMonth).format("YY")) >= (validDatesRangeInt.endYear) && currentMonth + shownMonths + currentRange == validDatesRangeInt.endMonth) {
          return false;
        }
      } else if (currentMonth % currentRange == 1) {
        if ( parseInt(selectedMonth.format("M")) + currentRange + currentRange + currentRange <= validDatesRangeInt.endMonth) {
          return true;
        }
        // if (parseInt(dayjs(selectedMonth).format("YY")) >= (validDatesRangeInt.endYear) && currentMonth + shownMonths - 1 + currentRange + currentRange  >= validDatesRangeInt.endMonth) {
        if (parseInt(selectedMonth.format("M")) + currentRange + currentRange + currentRange - validDatesRangeInt.endMonth == currentRange) {
          return false;
        } else {
          return true;
        }    
      }

      console.log('range two too much',parseInt(selectedMonth.format("M")) + currentRange);
      if (parseInt(dayjs(selectedMonth).format("YY") >= (validDatesRangeInt.endYear) && currentMonth + shownMonths + currentRange + currentRange >= validDatesRangeInt.endMonth)) {
        return false;
      }
      // console.log(validDatesRangeInt.endMonth -  (currentMonth + shownMonths + currentRange + currentRange));
      // return (validDatesRangeInt.endMonth -  (currentMonth + shownMonths + currentRange + currentRange))
    }


    if (parseInt(dayjs(selectedMonth).format("YY")) >= (validDatesRangeInt.endYear) && currentMonth + shownMonths + currentRange + currentRange  >= validDatesRangeInt.endMonth) {
      return false;
    } else {
      return true;
    }
  }

  function amountOfMonthsToRender() {
    // let currentMonth = parseInt(selectedMonth.format("M") - currentRange);
    // const currentMonthStartMonthInt = parseInt(
    //   selectedMonth.format("M") - validDatesRangeInt.startMonth
    // );
    // // console.log(currentMonth);
    // if (currentMonth < 0) currentMonth = 12;
    // console.log("currentMonth", currentMonth);
    // // console.log("currentMonthStartMonthInt", currentMonthStartMonthInt);

    // console.log(
    //   "currentMonthStartMonthInt",
    //   validDatesRangeInt.startMonth,
    //   parseInt(selectedMonth.format("M")) - validDatesRangeInt.startMonth,
    //   parseInt(selectedMonth.format("MM-YYYY"))
    // );

    // if current month
    // if (parseInt(selectedMonth.format("M")) - currentRange  < validDatesRangeInt.startMonth) return currentRange;

    // const newSelectedMonth = dayjs(selectedMonth)
    //   .subtract(currentRange, "month")
    //   .format("M");

    // console.log("selectedMonth", newSelectedMonth);
    // if (newSelectedMonth < validDatesRangeInt.startMonth)
    //   return validDatesRangeInt.startMonth - newSelectedMonth;

    // console.log(
    //   validDatesRangeInt.startMonth -
    //     dayjs(selectedMonth).subtract(currentRange, "month").format("M")
    // );

    // let amountPassedLimit;

    const nextClickStartMonth = dayjs(selectedMonth)
      .subtract(currentRange, "month")
      .format("M"); // 10 | 11 | 12

    console.log(
      "nextClickStartMonth => ",
      nextClickStartMonth - validDatesRangeInt.startMonth
    );



    if (
      currentRange == 1 ||
      nextClickStartMonth - validDatesRangeInt.startMonth == 0
    )
      return currentRange;

    // 1 - 3 = 10
    // currentMonth - currentRange
    if (nextClickStartMonth - validDatesRangeInt.startMonth == -1) {
      if (currentRange == 2) return currentRange - 1;
      return currentRange - 1;
    }

    if (nextClickStartMonth - validDatesRangeInt.startMonth == -2) {
      if (currentRange == 2) return currentRange - 1;
      return currentRange - 2;
    }

    

    // if (currentRange == 2) {

    // }

    // if (currentRange == 3) {

    // }

    // if (nextClickRange - validDatesRangeInt.startMonth == 0) return currentRange;

    // if (nextClickRange == 1) {
    //   return validDatesRangeInt.startMonth - nextClickRange;
    // }

    // if (nextClickRange == 2) {
    //   return validDatesRangeInt.startMonth - nextClickRange;
    // }

    // let amountPassedLimit;
    // // const amountPassedLimit =
    // //   parseInt(selectedMonth.format("M")) - validDatesRangeInt.startMonth;
    // // console.log("amountPassedLimit => ", amountPassedLimit);
    // if (nextClickMonth == 0) {
    //   return currentRange;
    // } else if (nextClickMonth == 1) {
    //   amountPassedLimit =
    //     validDatesRangeInt.startMonth -
    //     dayjs(selectedMonth).subtract(currentRange, "month").format("M");
    //   console.log("amountPassedLimit => ", amountPassedLimit);
    //   return amountPassedLimit;
    // }

    // amountPassedLimit =
    //   validDatesRangeInt.startMonth -
    //   dayjs(selectedMonth).subtract(currentRange, "month").format("M");
    // console.log("amountPassedLimit => ", amountPassedLimit);
    // // console.log("amountPassedLimit => ", validDatesRangeInt.startMonth);

    // if (amountPassedLimit =< currentRange) return currentRange;

    // // if (amountPassedLimit < 0) return currentRange;
    // return amountPassedLimit;
  }

  function nextToggleAmountPassedLimit() {
    let amountPassedLimit;
    // if (
    //   parseInt(nextToggledLastShownMonth().format("M")) ==
    //   validDatesRangeInt.endMonth
    // ) {
    //   amountPassedLimit = currentRange;
    // }

    // if (
    //   parseInt(nextToggledLastShownMonth().format("M")) >
    //   validDatesRangeInt.endMonth
    // ) {
    //   amountPassedLimit =
    //     currentRange -
    //     (parseInt(nextToggledLastShownMonth().format("M")) -
    //       validDatesRangeInt.endMonth);
    // }
    // return amountPassedLimit;


    // if (currentRange == 1) return currentRange;


    const nextClickEndMonth = parseInt(dayjs(selectedMonth)
      .add(currentRange, "month")
      .format("M")); // 10 | 11 | 12

    // console.log("nextClickEndMonth => ", nextClickEndMonth);
    // console.log("validDatesRangeInt.endMonth => ", validDatesRangeInt.endMonth);

    // console.log(
    //   "nextClickStartMonth => ",
    //   nextClickEndMonth - validDatesRangeInt.endMonth
    // );

    // if (
    //   currentRange == 1 ||
    //   nextClickEndMonth - validDatesRangeInt.endMonth == 0
    // )
    //   return currentRange;

    // if (

    //   nextClickEndMonth - validDatesRangeInt.endMonth == 0
    // )
    // {
    // if (currentRange = 2) return currentRange - 1
    //   return currentRange;
    // }

    // 1 - 3 = 10
    // currentMonth - currentRange
    // if (nextClickEndMonth - validDatesRangeInt.endMonth == -1) {
    //   console.log('-1');
    //   if (currentRange == 2) return currentRange;
    //   return currentRange - 1;
    // }
    let shownMonths;
    if (currentRange == 2) shownMonths = 2;
    if (currentRange == 3) shownMonths = 2;
    
    // console.log('nextClickEndMonth  ', nextClickEndMonth);
    // console.log('nextClickEndMonth - validDatesRangeInt.endMonth => ', nextClickEndMonth - validDatesRangeInt.endMonth);
    // console.log('nextClickEndMonth > validDatesRangeInt.endMonth => ', nextClickEndMonth + shownMonths > validDatesRangeInt.endMonth);

      // // switch (nextClickEndMonth - validDatesRangeInt.endMonth) {
      // switch (nextClickEndMonth - validDatesRangeInt.endMonth) {
      //   case 2:
      //     console.log('case: 2');
      //     if (currentRange == 3) amountPassedLimit = currentRange - 1;
      //     if (currentRange == 2) amountPassedLimit = currentRange;
      //     break;

      //   case 1:
      //     console.log('case: 1');
      //     if (currentRange === 2) amountPassedLimit = currentRange - 1;
      //     if (currentRange === 3) amountPassedLimit = currentRange - 2;
      //     break;

      //   case 0:
      //     console.log('case: 0');
      //     // amountPassedLimit = currentRange;
      //     if (currentRange == 3) amountPassedLimit = currentRange - 1;
      //     break;

      //   case -1:
      //     currentRange === 2 ? amountPassedLimit = currentRange : null;
      //     currentRange === 3 ? amountPassedLimit = currentRange - 2 : null;
      //     break;
      
      //   default:
      //     currentRange === 2 ? amountPassedLimit = currentRange - 2 : null;
      //     currentRange === 3 ? amountPassedLimit = currentRange - 1 : null;
      //     break;
      // }

      // console.log('amountPassedLimit', amountPassedLimit)

  //   if (nextClickEndMonth - validDatesRangeInt.endMonth == -2) {
  //     if (currentRange == 2) return currentRange;
  //   //   console.log('-2');
  //     return currentRange - 1;
  // }
  
  // return currentRange - 1;
    if (currentRange === 1) {
      return currentRange;
    }

    const currentMonth = parseInt(dayjs(selectedMonth).format("MM"));
    
    if (currentRange === 2) {
      if(currentMonth % currentRange == 1) {
        return currentRange ;
      }
      return currentRange + 1;
    }


    console.log(initialClickMonth % currentRange);
    const test = currentRange - (INITIAL_MONTH % currentRange)
    // const currentMonth = parseInt(dayjs(selectedMonth).format("MM"));
    console.log('currentMonth % currentRange', currentMonth % currentRange);
    const amountOfMonthsToRender = currentRange - ((currentMonth + shownMonths + currentRange + 1) - validDatesRangeInt.endMonth);
    // if (currentRange == 2) return currentRange - 1;
    console.log(amountOfMonthsToRender);
    console.log(amountOfMonthsToRender);
    return amountOfMonthsToRender
  }

  const prevMonthSelectorClickHandler = (e) => {
    if ($(nextMonthSelectorEl).attr("style"))
      $(nextMonthSelectorEl).removeAttr("style");
    if (isToggleAmountWithinRange("prev")) {
      selectedMonth = dayjs(selectedMonth).subtract(currentRange, "month");
    } else {
      $(prevMonthSelectorEl).css("display", "none");
      selectedMonth = dayjs(selectedMonth).subtract(
        amountOfMonthsToRender(),
        "month"
      );
      // initialClickMonth = initialClickMonth - 1;

      console.log("messed up", initialClickMonth);
    }
    // createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
    getCalendarEventsRequest(url);
    // console.log(
    //   "prev",
    //   dayjs(selectedMonth).subtract(currentRange, "month").format("MM-YYYY")
    // );
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
    // console.log(
    //   "next",
    //   dayjs(selectedMonth).subtract(currentRange, "month").format("MM-YYYY")
    // );
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
            selectedMonth = dayjs(selectedMonth).subtract(1, "month");

            // createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
            getCalendarEventsRequest(url);
          }
        }
        break;
      default:
        if (currentRange === 3) return;
        if (selectedMonth.format("YYYY") == END_YEAR) {
          if (parseInt(selectedMonth.format("M")) + currentRange > END_MONTH) {
            selectedMonth = dayjs(selectedMonth).subtract(1, "month");
            $(nextMonthSelectorEl).removeAttr("style");
          }
            
          currentRange = 3;
          getCalendarEventsRequest(url);
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

        // createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"), currentRange);
        getCalendarEventsRequest(url);

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
    resizeHandler();
    initMonthSelectors();

    const debouncedResizeHandler = debounce(resizeHandler, 100);
    $(window).resize(debouncedResizeHandler);
  };

  init();
});
