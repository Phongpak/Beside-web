import React from "react";

function FilterCard({ handleFilter }) {
  return (
    <div className="flex flex-col  border-4 border-[#9AC0B5] rounded-[15px] p-5">
      <div className="flex flex-row justify-between">
        <span className=" ">Gender:</span>
        <select
          className=" border rounded"
          name="gender"
          onChange={handleFilter}
        >
          <option value="">-</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </select>
      </div>
      <div className="flex flex-row justify-between mt-2 ">
        <span className="">Age:</span>
        <select className="border rounded" name="age" onChange={handleFilter}>
          <option value="">-</option>
          <option value="20-25">20-25</option>
          <option value="26-30">26-30</option>
          <option value="31-35">31-35</option>
          <option value="35-99">35</option>
        </select>
      </div>
    </div>
  );
}

export default FilterCard;
