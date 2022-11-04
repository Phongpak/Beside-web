import React, { useEffect, useState } from "react";
import GoogleMapContainer from "../GoogleMapContainer";
import { Link } from "react-router-dom";
import { useOrder } from "../../context/OrderContext";
import TimeList from "../TimeList";

function BookComponent() {
  const {
    book,
    setBook,
    handleBook,
    selected,
    setSelected,
    handleSearchProvider
  } = useOrder();
  useEffect(() => {
    const calNewToTime = () => {
      const hourFromTime = +book.fromTime.split(":")[0];
      let newToTime = ":00:00";
      if (hourFromTime <= 8) {
        newToTime = "0" + (hourFromTime + 1) + newToTime;
      } else {
        newToTime = hourFromTime + 1 + newToTime;
      }
      return newToTime;
    };
    const newToTime = calNewToTime();

    setBook({ ...book, toTime: newToTime });
  }, [book.fromTime]);
  return (
    <div className="flex flex-col items-center justify-center  mx-auto absolute top-[10%] w-full ">
      <div className=" bg-[#F5F5F5] rounded-2xl shadow flex gap-4 flex-col h-[800px]  w-2/3 px-10 py-6 justify-center">
        <GoogleMapContainer
          selected={selected}
          setSelected={setSelected}
          setBook={setBook}
        />

        <div className="flex gap-[10px]">
          <div className="flex space-x-6">
            <input
              type="date"
              name="appointmentDate"
              className="text-[#98ABA7] text-sm rounded-lg block w-full p-2.5 placeholder-[#98ABA7] bg-white"
              placeholder="Date"
              onChange={handleBook}
            />
            <div className="flex flex-row gap-5 my-auto">
              <label htmlFor="fromTime" className="text-xl text-[#98ABA7]">
                From:{" "}
              </label>
              <TimeList name={"fromTime"} onChange={handleBook} />
            </div>

            <div className="flex flex-row gap-5 my-auto">
              <label htmlFor="toTime" className="text-xl text-[#98ABA7]">
                To:{" "}
              </label>
              <TimeList
                name={"toTime"}
                onChange={handleBook}
                fromTime={book.fromTime ? book.fromTime : 0}
                toTime={24}
              />
            </div>
          </div>
        </div>

        <div className="flex space-x-6">
          <textarea
            type="text"
            onChange={handleBook}
            name="description"
            id="description"
            className="text-[#98ABA7] text-xl rounded-lg h-[20vh] w-full placeholder-[#98ABA7] bg-white"
            placeholder="Description"
          />
        </div>

        <Link
          to="/explore"
          className="bg-[#9AC0B5] text-[20px] rounded-xl text-white  px-20 py-2 text-center "
          onClick={handleSearchProvider}
        >
          SEARCH
        </Link>
      </div>
    </div>
  );
}

export default BookComponent;
