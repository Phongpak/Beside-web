import React from "react";

function TimeList({ name, onChange, fromTime = 0, toTime = 23 }) {
  const timeToDecimal = (fromTime) => {
    let t = fromTime.split(":");
    return parseFloat(parseInt(t[0], 10) + parseInt(t[1], 10) / 60);
  };

  if (fromTime !== 0) {
    fromTime = timeToDecimal(fromTime);
  }
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  const timeRender = (fromTime, toTime) => {
    let timeArray = [];
    let timeObj = {};
    let i = 0;
    fromTime === 0 ? (i = 0) : (i = fromTime + 1);
    for (i; i <= toTime; i += 1) {
      let totalMinute = i * 60;
      let hour = addZero(Math.floor(totalMinute / 60));
      let min = addZero(totalMinute % 60);
      let timeInString = `${hour}:${min}`;
      timeObj = { timeInString: [timeInString], timeValue: i };
      timeArray.push(timeObj);
    }
    return timeArray;
  };

  const timeArray = timeRender(fromTime, toTime);

  return (
    <div>
      <select
        className="w-[70px] rounded-[15px] text-center"
        name={name}
        onChange={onChange}
      >
        <option selected disabled hidden>
          --:--
        </option>
        {timeArray.map((item, index) =>
          index === 0 ? (
            <option
              key={item.timeValue}
              value={`${item.timeInString}:00`}
              selected
            >
              {item.timeInString}
            </option>
          ) : (
            <option key={item.timeValue} value={`${item.timeInString}:00`}>
              {item.timeInString}
            </option>
          )
        )}
      </select>
    </div>
  );
}

export default TimeList;
