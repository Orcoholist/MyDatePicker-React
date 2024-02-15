import React from "react";
import { useState } from "react";
import CalendarImg from "../img/Calendar.svg";
import Calendar from "./Calendar";

const Start = () => {
  const [isDropdownShown, setDropdownShown] = useState(false);

  return (
    <div className="start">
      <div start__button onClick={() => setDropdownShown(!isDropdownShown)}>
        <img className="start__icon" src={CalendarImg} alt="" />
      </div>

      {isDropdownShown && (
        <div className="start__dropdown">
          <Calendar />
        </div>
      )}
    </div>
  );
};
export default Start;
