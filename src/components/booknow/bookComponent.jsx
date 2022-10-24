import React from "react";
import PlacesAutocomplete from "../PlacesAutoComplete";
import ggmap from "../../images/ggmap.jpeg";
import GoogleMapContainer from "../GoogleMapContainer";

function BookComponent() {
  return (
    <div className="flex flex-col items-center justify-center  pt-8 mx-auto absolute top-[10%] w-full ">
      <div className=" bg-[#F5F5F5] rounded-2xl shadow flex gap-4 flex-col h-[80vh] w-2/3 px-10 py-6 justify-center">
        <div className="h-full w-full">
          <GoogleMapContainer />
          {/* <PlacesAutocomplete /> */}
        </div>
        <div className="flex gap-[10px]">
          <div className="flex space-x-6">
            <input
              type="date"
              name="date"
              id="date"
              className="text-[#98ABA7] text-sm rounded-lg block w-full p-2.5 placeholder-[#98ABA7] bg-white"
              placeholder="Date"
            />
            <input
              type="time"
              name="startDate"
              id="startDate"
              className="text-[#98ABA7] text-sm rounded-lg block w-full p-2.5 placeholder-[#98ABA7] bg-white"
              placeholder="Start Date"
            />
          </div>
          <div className="flex space-x-6">
            <input
              type="time"
              name="endDate"
              id="endDate"
              className="text-[#98ABA7] text-sm rounded-lg block w-full p-2.5 placeholder-[#98ABA7] bg-white"
              placeholder="End Date"
            />
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

        <button className="bg-[#9AC0B5] text-[20px] rounded-xl text-white  px-20 py-2  ">
          SEARCH
        </button>
      </div>
    </div>
  );
}

export default BookComponent;
