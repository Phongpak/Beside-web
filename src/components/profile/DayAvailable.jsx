import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function DayAvailable({ weekDay, weekDayNumber }) {
  const [fromTime, setFromTime] = useState("00:00:00");
  const [toTime, setToTime] = useState("01:00:00");
  const [showTime, setShowTime] = useState(false);
  //   const [nextTime, setNextTime] = useState([]);

  const nTime = [
    { value: "00", name: "00:00" },
    { value: "01", name: "01:00" },
    { value: "02", name: "02:00" },
    { value: "03", name: "03:00" },
    { value: "04", name: "04:00" },
    { value: "05", name: "05:00" },
    { value: "06", name: "06:00" },
    { value: "07", name: "07:00" },
    { value: "08", name: "08:00" },
    { value: "09", name: "09:00" },
    { value: "10", name: "10:00" },
    { value: "11", name: "11:00" },
    { value: "12", name: "12:00" },
    { value: "13", name: "13:00" },
    { value: "14", name: "14:00" },
    { value: "15", name: "15:00" },
    { value: "16", name: "16:00" },
    { value: "17", name: "17:00" },
    { value: "18", name: "18:00" },
    { value: "19", name: "19:00" },
    { value: "20", name: "20:00" },
    { value: "21", name: "21:00" },
    { value: "22", name: "22:00" },
    { value: "23", name: "23:00" },
    { value: "24", name: "24:00" },
  ];

  return (
    <div className="flex flex-row gap-[10px]">
      <div className="flex flex-row">
        <div className="w-[500px] h-[40px] bg-[#9AC0B5] rounded-l-[25px]">
          <div className="flex flex-row justify-between items-center h-[100%] text-[#506369]">
            <div className="text-[18px] font-medium pl-[25px]">{weekDay}</div>
            <div className="flex flex-row gap-[10px] pr-[20px]">
              <div>
                <label htmlFor="fromTime">From: </label>
                <select
                  className="w-[70px] rounded-[15px] text-center"
                  name="fromTime"
                  id="fromTime"
                  onChange={async (e) => {
                    const fromTime = (await e.target.value) + ":00:00";
                    console.log(e.target.value);
                    setFromTime(fromTime);
                  }}
                >
                  <option value="00">00:00</option>
                  <option value="01">01:00</option>
                  <option value="02">02:00</option>
                  <option value="03">03:00</option>
                  <option value="04">04:00</option>
                  <option value="05">05:00</option>
                  <option value="06">06:00</option>
                  <option value="07">07:00</option>
                  <option value="08">08:00</option>
                  <option value="09">09:00</option>
                  <option value="10">10:00</option>
                  <option value="11">11:00</option>
                  <option value="12">12:00</option>
                  <option value="13">13:00</option>
                  <option value="14">14:00</option>
                  <option value="15">15:00</option>
                  <option value="16">16:00</option>
                  <option value="17">17:00</option>
                  <option value="18">18:00</option>
                  <option value="19">19:00</option>
                  <option value="20">20:00</option>
                  <option value="21">21:00</option>
                  <option value="22">22:00</option>
                  <option value="23">23:00</option>
                  {/* <option value="24">24:00</option> */}
                </select>
              </div>
              <div>
                <label htmlFor="toTime">To: </label>
                <select
                  className="w-[70px] rounded-[15px] text-center"
                  name="toTime"
                  id="toTime"
                  onChange={async (e) => {
                    const toTime = (await e.target.value) + ":00:00";

                    setToTime(toTime);
                  }}
                >
                  {nTime
                    .filter((item) => item.value > fromTime)
                    .map((item) => (
                      <option value={item.value}>{item.name}</option>
                    ))}
                  {/* <option value="00">00:00</option>
                  <option value="01">01:00</option>
                  <option value="02">02:00</option>
                  <option value="03">03:00</option>
                  <option value="04">04:00</option>
                  <option value="05">05:00</option>
                  <option value="06">06:00</option>
                  <option value="07">07:00</option>
                  <option value="08">08:00</option>
                  <option value="09">09:00</option>
                  <option value="10">10:00</option>
                  <option value="11">11:00</option>
                  <option value="12">12:00</option>
                  <option value="13">13:00</option>
                  <option value="14">14:00</option>
                  <option value="15">15:00</option>
                  <option value="16">16:00</option>
                  <option value="17">17:00</option>
                  <option value="18">18:00</option>
                  <option value="19">19:00</option>
                  <option value="20">20:00</option>
                  <option value="21">21:00</option>
                  <option value="22">22:00</option>
                  <option value="23">23:00</option>
                  <option value="24">24:00</option> */}
                </select>
              </div>
              <button
                className="flex justify-center items-center w-[100px] h-[24px] bg-[#F2F2F2] rounded-[15px] text-[14px] ml-[15px] hover:bg-[#506369] hover:text-white transition delay-20"
                onClick={() => setShowTime(true)}
              >
                Create time
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[150px] h-[40px] bg-[#F2F2F2] rounded-r-[25px]">
          {showTime
            ? fromTime.slice(0, 5) + " - " + toTime.slice(0, 5)
            : "Not available"}
        </div>
      </div>
      <button className="text-[20px] text-red-400">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => {
            setShowTime(false);
            // setFromTime("00:00:00");
            // setToTime("01:00:00");
          }}
        />
      </button>
    </div>
  );
}
export default DayAvailable;
