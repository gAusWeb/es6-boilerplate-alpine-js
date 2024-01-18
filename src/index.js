import _ from "lodash";
import calendarData from "./v2-data-2024-01-17";
import "./main.scss";
import "./loading-spinner.scss";
import "./dayjsCustom3_windowData_v2";

function component() {
  const element = document.createElement("div");
  window.upcomingDrawsData = calendarData();
  element.innerHTML += `<div class="upcoming-draws-calendar">
    <div class="loading-spinner-wrapper">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
       
    </div>
  </div>
  <!--
    <img src="./RSLLOTT/assets/Frontend RSLLOTT/images/icons/crown-solid.svg" alt="crown" />
  -->
  `;
  return element;
}
document.body.appendChild(component());
