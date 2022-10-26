import React from "react";
import GoogleMapContainer from "../GoogleMapContainer";
import { Link } from "react-router-dom";
import { useOrder } from "../../context/OrderContext";

function BookComponent() {
  const { book, setBook } = useOrder();
  return (
    <div className="flex flex-col items-center justify-center  mx-auto absolute top-[10%] w-full ">
      <div className=" bg-[#F5F5F5] rounded-2xl shadow flex gap-4 flex-col h-[800px]  w-2/3 px-10 py-6 justify-center">
        <GoogleMapContainer />

        <div className="flex gap-[10px]">
          <div className="flex space-x-6">
            <input
              type="date"
              name="date"
              id="date"
              className="text-[#98ABA7] text-sm rounded-lg block w-full p-2.5 placeholder-[#98ABA7] bg-white"
              placeholder="Date"
            />
            <div>
              <label htmlFor="fromTime">From: </label>
              <select
                className="w-[70px] rounded-[15px] text-center"
                name="fromTime"
                id="fromTime"
                // onChange={(e) => setUnavailableFromTime(e.target.value)}
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
                // onChange={(e) => setUnavailableToTime(e.target.value)}
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
        </div>

        <div className="flex space-x-6">
          <textarea
            type="text"
            name="description"
            id="description"
            className="text-[#98ABA7] text-sm rounded-lg h-[20vh] w-full placeholder-[#98ABA7] bg-white"
            placeholder="Description"
          />
        </div>

        <Link
          to="/explore"
          className="bg-[#9AC0B5] text-[20px] rounded-xl text-white  px-20 py-2 text-center "
        >
          SEARCH
        </Link>
      </div>
    </div>
  );
}

export default BookComponent;
