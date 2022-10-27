import React from "react";

function Carousel() {
  return (
    <div>
      {" "}
      <h1 className="pt-[200px] text-[#9AC0B5] text-[40px] text-center">
        Top destination in bangkok
      </h1>
      <div className="h-[150px] flex mt-[80px] mb-[80px] justify-center gap-20">
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
          className="rounded-full"
        />

        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
          className="rounded-full"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
          className="rounded-full"
        />

        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default Carousel;
