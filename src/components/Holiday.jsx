// https://rapidapi.com/theapiguy/api/public-holiday

import React from "react";
import HolidaysService from "./util/HolidaysService";

// const year = 2023;
// const key = "eVYpZKSeWr7nvd7spARYWA==2fFJEQ8f8tYzm4qc";
// const country = "RU"
// const url = `https://api.api-ninjas.com/v1/holidays?country=
// ${country}&year=${year}&type=public_holiday`;

export default function Holiday(clicked_day) {
  // const day = holyData.date;
  {
    // console.log("Это день", clicked_day);
  }
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
