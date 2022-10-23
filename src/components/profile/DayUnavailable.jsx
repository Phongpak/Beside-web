import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function DayUnavailable() {
  const [showCreateDate, setShowCreateDate] = useState(false);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [unavailableDate, setUnavailableDate] = useState("");
  const [unavailableFromTime, setUnavailableFromTime] = useState("00:00:00");
  const [unavailableToTime, setUnavailableToTime] = useState("00:00:00");

  const handleCreateUnavailable = () => {
    const unavailableObject = {
      unavailableDate: unavailableDate,
      unavailableFromTime: unavailableFromTime,
      unavailableToTime: unavailableToTime,
    };
    setUnavailableDates([...unavailableDates, unavailableObject]);
    setShowCreateDate(false);
  };

  return (
    <>
      <div className="flex flex-row gap-[15px] self-start">
        <button
          className="bg-white text-[#224957] border-2 border-[#9AC0B5] flex flex-row justify-center items-center text-[14px] font-medium rounded-[15px] min-w-[180px] h-[30px] hover:bg-[#506369] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0"
          onClick={() => setShowCreateDate(!showCreateDate)}
        >
          {showCreateDate ? "Undo" : "+ Create unavailable date"}
        </button>
        {showCreateDate ? (
          <div className="flex justify-evenly items-center w-[480px] h-[30px] bg-[#9AC0B5] rounded-[25px]">
            <input
              onChange={(e) => setUnavailableDate(e.target.value)}
              className="text-center w-[125px] rounded-[15px] h-[22px]"
              type="date"
            />
            <div className="flex flex-row gap-[5px]">
              <div>
                <label htmlFor="fromTime">From: </label>
                <select
                  className="w-[70px] rounded-[15px] text-center"
                  name="fromTime"
                  id="fromTime"
                  onChange={(e) => setUnavailableFromTime(e.target.value)}
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
                  <option value="24:00:00">24:00</option>
                </select>
              </div>
              <div>
                <label htmlFor="toTime">To: </label>
                <select
                  className="w-[70px] rounded-[15px] text-center"
                  name="toTime"
                  id="toTime"
                  onChange={(e) => setUnavailableToTime(e.target.value)}
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
                  <option value="24:00:00">24:00</option>
                </select>
              </div>
            </div>
            <button
              className="flex justify-center items-center w-[100px] h-[22px] bg-[#F2F2F2] rounded-[15px] text-[14px] hover:bg-[#506369] hover:text-white transition delay-20"
              onClick={handleCreateUnavailable}
            >
              Create date
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {unavailableDates.map((item, index) => (
        <div className="flex flex-row gap-[15px]" key={index}>
          <div className="flex justify-center items-center text-[#224957] w-[647.5px] h-[40px] bg-[#F2F2F2] rounded-[25px] gap-[15px]">
            <div> Unavailable Date: {item.unavailableDate}</div>
            <div>From: {item.unavailableFromTime}</div>
            <div>To: {item.unavailableToTime}</div>
          </div>
          <button className="text-[20px] text-red-400">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      ))}
    </>
  );
}

export default DayUnavailable;
