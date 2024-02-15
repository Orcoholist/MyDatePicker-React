import dayjs from "dayjs";
import arrowUp from "../img/uparrow.svg";
import arrowDown from "../img/down.svg";

import React, { useState } from "react";
import { generateDate, months_list, days } from "./util/calendar";
import cn from "./util/cn";
import Holiday from "./Holiday";

export default function Calendar() {
  const [isDropdownShown, setDropdownShown] = useState(false);
  const currentDate = dayjs();
  // console.log("currentDate: ", currentDate);
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [selectMonth, setSelectMonth] = useState(
    months_list[currentDate.month()]
  );
  // console.log(currentDate)
  // const [selectMonth, setSelectMonth] = useState(currentDate.month());
  const [mode, setMode] = useState("day");

  let clicked_day;
  const handleClick = (innerText) => {
    console.log("innerText: ", innerText);
    setMode("day");
    let new_month = months_list.indexOf(innerText);
    console.log("new_month:", new_month);
    setSelectMonth(months_list[new_month]);
    setToday(today.month(new_month));
  };

  const handleClickedDay = (innerText) => {
    const currentMonthIndex = today.month();
    const currentYear = today.year();

    const clickedDate = currentYear+'-'+currentMonthIndex+'-'+innerText
    console.log("clicked_day: ", clickedDate);
    
    <Holiday clickedDate={clickedDate} />;
  };

  // const handlePlus = (prev) => {
  //   setToday(today.month(today.month() + 1));
  //   setSelectMonth(months_list[today.month()]);
  //   console.log(selectMonth);
  // };
    // const handleMinus = () => {
  //   setToday(today.month(today.month() - 1));
  //   setSelectMonth(months_list[today.month()]);
  //   console.log(selectMonth);
  // };
  const handlePlus = () => {
    const newToday = today.add(1, 'month');
    setToday(newToday);
    setSelectMonth(months_list[newToday.month()]);
    
  };
  const handleMinus = () => {
    const newToday = today.subtract(1, 'month');
    setToday(newToday);
    setSelectMonth(months_list[newToday.month()]);
    
  };



  return (
    <div className="body">
      {isDropdownShown && (
        <div className="holidays__cont">
          <Holiday clicked_day={clicked_day} />
        </div>
      )}
      <div className="container">
        <div className="header">
          <h1
            className="current__month"
            onClick={() => {
              setMode("month");
            }}
          >
            {/* {months_list[today.month()]} */}
            {selectMonth} {today.year()}
          </h1>
          <div className="buttons">
            <img
              src={arrowDown}
              className="arrow__down"
              alt="arrowDown"
              onClick={handleMinus}
              // onClick={() => {
              //   handleMinus();
              // }}
            />
            <img
              src={arrowUp}
              className="arrow__up"
              alt="arrowUp"
              onClick={handlePlus}

              // onClick={() => {
              //   handlePlus();
              // }}
            />
          </div>
        </div>
        {mode === "day" ? (
          <>
            <div className="week__colums">
              {days.map((day, index) => {
                return (
                  <h1 key={index} className="week__days">
                    {day}
                  </h1>
                );
              })}
            </div>

            <div className="days__table">
              {generateDate(today.month(), today.year()).map(
                ({ date, currentMonth, today }, index) => {
                  return (
                    <div
                      key={index}
                      className="days__line"
                      onClick={() => setDropdownShown(!isDropdownShown)}
                    >
                      <h1
                        className={cn(
                          currentMonth ? "" : "days--inactive",
                          today ? "days--two" : "",
                          selectDate.toDate().toDateString() ===
                            date.toDate().toDateString()
                            ? "days--clicked"
                            : "",
                          "days--click"
                        )}
                        onClick={(event) => {
                          setSelectDate(date);
                          handleClickedDay(event.target.innerText);
                          // console.log(event.target.innerText);
                        }}
                      >
                        {date.date()}
                        {/* {console.log('date:',date.date)} */}
                      </h1>
                    </div>
                  );
                }
              )}
            </div>
          </>
            
        ) : (
          <>
            <div className="select-month">
              {months_list.map((m, index) => (
                <div
                  id={m.id}
                  className="month__list"
                  onClick={(e) => {
                    handleClick(e.target.innerText);
                    console.log(m.target);
                  }}
                  key={m}
                >
                  {m}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
