import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import * as dateService from "../../api/dateApi";

function DayAvailable({ weekDay, weekDayNumber }) {
  const [fromTime, setFromTime] = useState("00:00:00");
  const [toTime, setToTime] = useState("01:00:00");
  const [showTime, setShowTime] = useState(false);

  const toTimes = [
    { value: "01:00:00", name: "01:00" },
    { value: "02:00:00", name: "02:00" },
    { value: "03:00:00", name: "03:00" },
    { value: "04:00:00", name: "04:00" },
    { value: "05:00:00", name: "05:00" },
    { value: "06:00:00", name: "06:00" },
    { value: "07:00:00", name: "07:00" },
    { value: "08:00:00", name: "08:00" },
    { value: "09:00:00", name: "09:00" },
    { value: "10:00:00", name: "10:00" },
    { value: "11:00:00", name: "11:00" },
    { value: "12:00:00", name: "12:00" },
    { value: "13:00:00", name: "13:00" },
    { value: "14:00:00", name: "14:00" },
    { value: "15:00:00", name: "15:00" },
    { value: "16:00:00", name: "16:00" },
    { value: "17:00:00", name: "17:00" },
    { value: "18:00:00", name: "18:00" },
    { value: "19:00:00", name: "19:00" },
    { value: "20:00:00", name: "20:00" },
    { value: "21:00:00", name: "21:00" },
    { value: "22:00:00", name: "22:00" },
    { value: "23:00:00", name: "23:00" },
    { value: "24:00:00", name: "24:00" },
  ];

  const handleCreateDateAvailable = async (input) => {
    try {
      await dateService.createDateAvailable(input);
      setShowTime(true);
      alert("create success");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteDateAvailable = async () => {
    try {
      const res = await dateService.getDateAvailable(weekDayNumber);
      const dateAvailableId = res.data.dateAvailable.id;
      await dateService.deleteDateAvailable(dateAvailableId);
      setFromTime("00:00:00");
      setToTime("01:00:00");
      setShowTime(false);
      alert("delete success");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchTime = async () => {
      const res = await dateService.getDateAvailable(weekDayNumber);
      const fromTimeFetch = res.data.dateAvailable?.fromTime;
      const toTimeFetch = res.data.dateAvailable?.toTime;

      setFromTime(fromTimeFetch === undefined ? "00:00:00" : fromTimeFetch);
      setToTime(toTimeFetch === undefined ? "01:00:00" : toTimeFetch);
      if (fromTimeFetch !== undefined && toTimeFetch !== undefined) {
        setShowTime(true);
      }
    };
    fetchTime();
  }, []);

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
                  value={fromTime}
                  onChange={(e) => {
                    setFromTime(e.target.value);
                    if (e.target.value >= toTime) {
                      if (e.target.value >= "09:00:00") {
                        setToTime(+e.target.value.slice(0, 2) + 1 + ":00:00");
                      } else {
                        setToTime(
                          "0" + (+e.target.value.slice(0, 2) + 1) + ":00:00"
                        );
                      }
                    }
                  }}
                >
                  <option value="00:00:00">00:00</option>
                  <option value="01:00:00">01:00</option>
                  <option value="02:00:00">02:00</option>
                  <option value="03:00:00">03:00</option>
                  <option value="04:00:00">04:00</option>
                  <option value="05:00:00">05:00</option>
                  <option value="06:00:00">06:00</option>
                  <option value="07:00:00">07:00</option>
                  <option value="08:00:00">08:00</option>
                  <option value="09:00:00">09:00</option>
                  <option value="10:00:00">10:00</option>
                  <option value="11:00:00">11:00</option>
                  <option value="12:00:00">12:00</option>
                  <option value="13:00:00">13:00</option>
                  <option value="14:00:00">14:00</option>
                  <option value="15:00:00">15:00</option>
                  <option value="16:00:00">16:00</option>
                  <option value="17:00:00">17:00</option>
                  <option value="18:00:00">18:00</option>
                  <option value="19:00:00">19:00</option>
                  <option value="20:00:00">20:00</option>
                  <option value="21:00:00">21:00</option>
                  <option value="22:00:00">22:00</option>
                  <option value="23:00:00">23:00</option>
                </select>
              </div>
              <div>
                <label htmlFor="toTime">To: </label>
                <select
                  className="w-[70px] rounded-[15px] text-center"
                  name="toTime"
                  id="toTime"
                  value={toTime}
                  onChange={(e) => {
                    setToTime(e.target.value);
                  }}
                >
                  {toTimes
                    .filter((item) => item.value > fromTime)
                    .map((item) => (
                      <option value={item.value}>{item.name}</option>
                    ))}
                </select>
              </div>
              <button
                className="flex justify-center items-center w-[100px] h-[24px] bg-[#F2F2F2] rounded-[15px] text-[14px] ml-[15px] hover:bg-[#506369] hover:text-white transition delay-20"
                onClick={() => {
                  setShowTime(true);
                  handleCreateDateAvailable({
                    weekday: String(weekDayNumber),
                    fromTime: fromTime,
                    toTime: toTime,
                  });
                }}
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
            handleDeleteDateAvailable();
          }}
        />
      </button>
    </div>
  );
}
export default DayAvailable;
