import React from "react";
import getPublicHolidays from "./util/HolidaysService";


export default function Holiday(clickedDate) {
  console.log(clickedDate)
  let result = getPublicHolidays(clickedDate);
  console.log(result);
  return (
    <div>
      {holyData.map((item, index) => {
        return (
          <div key={index}>
            {item.date} : {item.description}
          </div>
        );
      })}
    </div>
  );
}

//   return (

//    <div> {Array.from(holyData).map((date, index) => {
//       return (
//         <h1 key={index} className="week__days">
//           {holyData.date}
//           {holyData.description}
//           {console.log(holyData.date)}
//         </h1>
//       );
//     })}
//   </div>
//   );
// }

export const holyData = [
  {
    date: "1 октября",
    description: "День знаний"
  },
  {
    date: "2 октября",
    description: "Международный день миротворцев"
  },
  {
    date: "3 октября",
    description: "День героев Отечества"
  },
  {
    date: "4 октября",
    description: "Всемирный день животных"
  },
  {
    date: "5 октября",
    description: "День учителя"
  },
  {
    date: "6 октября",
    description: "День города"
  },
  {
    date: "7 октября",
    description: "День смеха"
  }
];
