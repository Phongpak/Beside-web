import FilterCard from "../components/explore/FilterCard";
import PriceCard from "../components/explore/PriceCard";
function ExplorePage() {
  return (
    <div className="px-52">
      <div className="flex justify-center">
        <div className="border-b-4 border-[#9AC0B5] w-full ">
          <h1 className="py-6 text-[#14274A] text-[20px] text-center">
            It doesn't matter where you're going, it's who you have <br />{" "}
            beside you.
          </h1>
        </div>
      </div>

      <div className="flex  justify-center gap-10 pt-10">
        <div className="flex flex-col gap-10">
          <div className=" gap-1 border-4 border-[#9AC0B5] rounded-[15px]  p-5">
            <p className=" text-[#224957] font-[400]">Siam paragon</p>
            <p className="font-medium  text-[#224957]">
              start date : 01/01/22 17.00 pm
            </p>
            <p className="font-medium  text-[#224957]">
              end date : 01/01/22 19.00 pm
            </p>
          </div>
          <FilterCard />
        </div>

        <div className="flex flex-col gap-8">
          <PriceCard />
          <PriceCard />
          <PriceCard />
          <PriceCard />
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
