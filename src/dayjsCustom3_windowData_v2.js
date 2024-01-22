import dayjs from "dayjs";

const weekday = require("dayjs/plugin/weekday");
dayjs.extend(weekday);

$(document).ready(function () {
  if ($(".upcoming-draws-calendar").length < 1) return;

  // Amount of months to render into future ~ value represents months
  const calendarForecastAmnt = 11; // min amount: 3, due to desktop-shownMonths shown = 3

  let currentRange;
  const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const START_DATE = dayjs().subtract(1, "month").format("YYYY-MM");
  const END_DATE = dayjs().add(calendarForecastAmnt, "month").format("YYYY-MM");
  const END_YEAR = parseInt(
    dayjs().add(calendarForecastAmnt, "month").format("YYYY")
  );
  const END_MONTH = parseInt(
    dayjs().add(calendarForecastAmnt, "month").format("M")
  );
  const INITIAL_YEAR = dayjs().format("YYYY");
  const INITIAL_MONTH = dayjs().format("M");
  const validDatesRange = {
    start: START_DATE,
    end: END_DATE,
  };
  let selectedMonth = dayjs(new Date(INITIAL_YEAR, INITIAL_MONTH - 1)); // Select you start month, relevant from today's date // TODO: uncomment this line, and comment out the line below
  // let selectedMonth = dayjs(
  //   new Date(INITIAL_YEAR, dayjs().add(0, "month").format("M"))
  // );
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
  prevMonthSelectorEl.innerHTML = `
		<span class="material-icons-round" data-icon="chevron_left"></span>
	`;

  const nextMonthSelectorEl = document.createElement("button");
  nextMonthSelectorEl.classList.add(
    "upcoming-draws-calendar__date-toggle-selector",
    "next"
  );
  nextMonthSelectorEl.innerHTML = `
		<span class="material-icons-round" data-icon="chevron_left"></span>
	`;

  function getCalendarData() {
    if (!window.upcomingDrawsData) return;
    localDrawData = window.upcomingDrawsData.DrawDates;

    if (localDrawData.length < 1) {
      console.log("window data not found");
      return;
    }
  }

  function updateEventsCalendarView() {
    calendarMonthsWrapper.innerHTML = "";
    prevMonthSelectorEl.style.visibility = "hidden";
    nextMonthSelectorEl.style.visibility = "hidden";
    loadingSpinner.style.display = "block";

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
        const DayData = [];

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
          let myArr = [];

          // filter draw-dates down to current day
          if (DrawDate && DrawDate.length > 0) {
            function findIndexInArray(array, DrawDate) {
              for (let i = 0; i < array.length; i++) {
                if (Array.isArray(array[i])) {
                  if (array[i][0].DrawDate.DrawDate === DrawDate) {
                    return { index: i, isArray: true };
                  }
                } else {
                  if (array[i].DrawDate.DrawDate === DrawDate) {
                    return { index: i, isArray: false };
                  }
                }
              }
              return { index: -1, isArray: false };
            }

            DrawDate.forEach((el, i) => {
              if (day.dayOfMonth == el.DrawDate.split("-")[2].split("T")[0]) {
                let { index, isArray } = findIndexInArray(myArr, el.DrawDate);
                if (index !== -1) {
                  if (isArray) {
                    myArr[index].push(el);
                  } else {
                    myArr[index] = [myArr[index], el];
                  }
                } else {
                  myArr.push(el);
                }
              }
            });

            myArr = myArr.map((item) => {
              if (Array.isArray(item)) {
                return { data: item[0], count: item.length };
              } else {
                return { data: item, count: 1 };
              }
            });

            if (myArr.length > 0) {
              drawData = {
                ...drawData,
                myArr: myArr,
              };
            }
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

    const divContentWrapper = document.createElement("div");
    divContentWrapper.classList.add(
      "upcoming-draws-calendar__event-content-wrapper"
    );
    const drawWrapper = document.createElement("div");
    drawWrapper.classList.add("upcoming-draws-calendar__draw-wrapper");

    if (drawData) {
      // [`W `] => draw-type-1 => WIN 5k
      // [`Q `] => draw-type-2 => WIN 100k
      // [`AU`, `IsVipOnly`] => draw-type-3 => VIP draw: open/close draw-dates
      // [`AU`] => draw-type-4 => Standard draw: open/close draw-dates

      if (drawData.myArr && drawData.myArr.length > 0) {
        drawData.myArr.forEach((el, i) => {
          if (day.dayOfMonth == el.data.DrawDate.split("-")[2].split("T")[0]) {
            dayElementClassList.add("draw-day");
            dayElementClassList.add(`event-count-${drawData.myArr.length}`);
            const drawTextWrapper = document.createElement("span");
            drawTextWrapper.classList.add("upcoming-draws-calendar__draw-text");

            const win_5k_tile_html =
              drawData.myArr.length < 2
                ? `WIN <strong>$5K</strong`
                : `<strong>$5K</strong>`;
            const win_100k_tile_html =
              drawData.myArr.length < 2
                ? `WIN <strong>$100K</strong>`
                : `<strong>$100K</strong>`;
            let vip_home_tile_html;
            let vipIcon;

            if (
              (el.data.DrawDate && el.data.IsVIPOnly) ||
              (el.data.drawOpenDate && drawData.drawOpenDate.drawIsVIP)
            ) {
              vipIcon = document.createElement("div");
              vipIcon.classList.add("vip-crown__wrapper");
              vipIcon.innerHTML = `<img src="./RSLLOTT/assets/Frontend RSLLOTT/images/icons/crown-solid.svg" alt="RSL Art Union VIP Logo Icon">`;
            }

            console.log(el.data.IsVIPOnly);

            if (el.data.DrawDate) {
              const drawWrapper = document.createElement("div");
              drawWrapper.classList.add(
                "upcoming-draws-calendar__draw-wrapper"
              );
              vip_home_tile_html = `<strong>${el.data.DrawName}</strong>`;
              // determine DRAW-DATE rendering
              switch (el.data.DrawType) {
                case "W ": // WIN 5k
                  drawWrapper.classList.add(`draw-type-1`);
                  dayElementClassList.add("draw-day");
                  // dayElementClassList.add("draw-day", `draw-type-1`);
                  drawTextWrapper.innerHTML = win_5k_tile_html;
                  break;
                case "Q ": // WIN 100k
                  drawWrapper.classList.add(`draw-type-2`);
                  dayElementClassList.add("draw-day");
                  // dayElementClassList.add("draw-day", `draw-type-2`);
                  drawTextWrapper.innerHTML = win_100k_tile_html;
                  break;
                default: // Standard / VIP draws
                  drawWrapper.classList.add(`draw-type-4`);
                  dayElementClassList.add("draw-day");
                  // dayElementClassList.add("draw-day", `draw-type-4`);
                  let updatedEventTitle = vip_home_tile_html
                    .replace("AU", "")
                    .replace("L", "");
                  if (el.data.IsVIPOnly) {
                    drawWrapper.classList.add(`vip`);
                    drawWrapper.appendChild(vipIcon);
                    dayElement.appendChild(drawWrapper);
                    // dayElementClassList.add("vip");
                  }
                  drawTextWrapper.innerHTML += updatedEventTitle;
                  break;
              }

              drawWrapper.appendChild(drawTextWrapper);
              dayElement.appendChild(drawWrapper);
            }
          }

          // const drawTextWrapper = document.createElement("span");
          // drawTextWrapper.classList.add("upcoming-draws-calendar__draw-text");

          // const win_5k_tile_html = "WIN <strong>$5K</strong>";
          // const win_100k_tile_html = "WIN <strong>$100K</strong>";
          // let vip_home_tile_html;
          // let vipIcon;

          // if (
          //   (drawData.DrawDate && drawData.DrawDate.drawIsVIP) ||
          //   (drawData.drawOpenDate && drawData.drawOpenDate.drawIsVIP)
          // ) {
          //   vipIcon = document.createElement("div");
          //   vipIcon.classList.add("vip-crown__wrapper");
          //   vipIcon.innerHTML = `<img src="./RSLLOTT/assets/Frontend RSLLOTT/images/icons/crown-solid.svg" alt="RSL Art Union VIP Logo Icon">`;
          // }

          // if (drawData.DrawDate) {
          //   vip_home_tile_html = `<strong>${drawData.DrawDate.DrawName}</strong>`;

          //   // determine DRAW-DATE rendering
          //   switch (drawData.DrawDate.DrawType) {
          //     case "W": // WIN 5k
          //       dayElementClassList.add("draw-day", `draw-type-1`);
          //       drawTextWrapper.innerHTML = win_5k_tile_html;
          //       break;

          //     case "Q": // WIN 100k
          //       dayElementClassList.add("draw-day", `draw-type-2`);
          //       drawTextWrapper.innerHTML = win_100k_tile_html;
          //       break;

          //     default: // Standard / VIP draws
          //       dayElementClassList.add("draw-day", `draw-type-4`);
          //       let updatedEventTitle = vip_home_tile_html
          //         .replace("AU", "")
          //         .replace("L", "");

          //       if (drawData.DrawDate.drawIsVIP) {
          //         dayElement.appendChild(vipIcon);
          //         dayElementClassList.add("vip");
          //       }

          //       drawTextWrapper.innerHTML += updatedEventTitle;
          //       break;
          //   }

          //   const drawWrapper = document.createElement("div");
          //   drawWrapper.classList.add("upcoming-draws-calendar__draw-wrapper");

          //   drawWrapper.appendChild(drawTextWrapper);
          //   dayElement.appendChild(drawWrapper);
          // }

          // // determine OPEN-DRAW-date rendering // Standard / VIP draws ONLY
          // if (drawData.drawOpenDate) {
          //   const drawText = drawData.drawOpenDate.drawText
          //     .replace("AU", "")
          //     .split(" ")[0];

          //   vip_home_tile_html = `<strong>${drawText}</strong>`;

          //   if (drawData.drawOpenDate.drawIsVIP) {
          //     vipIcon.classList.add("white");
          //     dayElement.appendChild(vipIcon);
          //     dayElementClassList.add("draw-day", `draw-type-3`, "vip");
          //     drawTextWrapper.innerHTML += vip_home_tile_html;
          //   } else {
          //     dayElementClassList.add("draw-day", `draw-type-3`);
          //     drawTextWrapper.innerHTML += vip_home_tile_html
          //       .replace("AU", "")
          //       .replace("L", "");
          //   }

          //   const drawWrapper = document.createElement("div");
          //   drawWrapper.classList.add("upcoming-draws-calendar__draw-wrapper");

          //   drawWrapper.appendChild(drawTextWrapper);
          //   dayElement.appendChild(drawWrapper);
          // }
        });
      }
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

  function isToggleAmountWithinRange() {
    let index = 0;
    while (index < currentRange) {
      selectedMonth = dayjs(selectedMonth).subtract(1, "month");
      $(nextMonthSelectorEl).removeAttr("style");

      if (
        dayjs(validDatesRange.start).format("YYYY-MM") ==
        dayjs(selectedMonth).format("YYYY-MM")
      ) {
        $(prevMonthSelectorEl).css("display", "none");
        return false;
      }
      index++;
    }
  }

  function isNextToggleWithinRange() {
    let index = 0;
    const passedRange = dayjs(validDatesRange.end).subtract(
      currentRange - 1,
      "M"
    );
    while (index < currentRange) {
      selectedMonth = dayjs(selectedMonth).add(1, "month");
      $(prevMonthSelectorEl).removeAttr("style");

      if (
        passedRange.format("YYYY-MM") == dayjs(selectedMonth).format("YYYY-MM")
      ) {
        $(nextMonthSelectorEl).css("display", "none");
        return false;
      }
      index++;
    }
  }

  function prevMonthSelectorClickHandler() {
    isToggleAmountWithinRange();
    updateEventsCalendarView();
  }

  function nextMonthSelectorClickHandler() {
    isNextToggleWithinRange();
    updateEventsCalendarView();
  }

  function resizeHandler() {
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
          return;
        }

        if (currentRange === 3) {
          if (selectedMonth.format("YYYY") == END_YEAR) {
            if (currMonth == END_MONTH - currentRange) {
              $(nextMonthSelectorEl).css("display", "none");
              selectedMonth = dayjs(selectedMonth).subtract(2, "month");
            } else if (currMonth == END_MONTH - currentRange + 1) {
              $(nextMonthSelectorEl).css("display", "none");
              selectedMonth = dayjs(selectedMonth).subtract(1, "month");
            }
          }
          $(nextMonthSelectorEl).removeAttr("style");
          currentRange = 2;
          updateEventsCalendarView();
          return;
        }

        // initial load
        currentRange = 2;
        updateEventsCalendarView();
        break;

      default:
        currentRange === 1 ? (monthAdjustAmnt = 2) : (monthAdjustAmnt = 1);
        if (currentRange === 3) return;
        if (selectedMonth.format("YYYY") == END_YEAR) {
          if (parseInt(selectedMonth.format("M")) + currentRange >= END_MONTH) {
            selectedMonth = dayjs(selectedMonth).subtract(
              monthAdjustAmnt,
              "month"
            );
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
  }

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

  function init() {
    getCalendarData();
    resizeHandler();
    initMonthSelectors();

    const debouncedResizeHandler = debounce(resizeHandler, 250);
    $(window).resize(debouncedResizeHandler);
  }

  init();
});
