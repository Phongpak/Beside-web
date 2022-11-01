import { useEffect, useState } from "react";
import FilterCard from "../components/explore/FilterCard";
import PriceCard from "../components/explore/PriceCard";
import { useOrder } from "../context/OrderContext";
function ExplorePage() {
  const { book, providers } = useOrder();
  const [filter, setFilter] = useState({
    gender: "",
    age: "",
  });
  const [allProviders, setAllProviders] = useState(providers);

  useEffect(() => {
    if (filter.gender) {
      setAllProviders(filterByGender(providers, filter.gender));
    } else {
      setAllProviders(providers);
    }
  }, [filter]);

  const handleFilter = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };
  const multiplier = +book.toTime.split(":")[0] - book.fromTime.split(":")[0];
  console.log(multiplier);
  const filterByGender = (providers, gender) => {
    const filteredProviders = allProviders.filter(
      (item) => item.gender === gender
    );
    return filteredProviders;
  };
  // const filterByAge = (allProviders, age) => {
  //   const today = new Date();
  //   const minimumYear = today.getFullYear() - age.split('-')[0]
  //   const minimumDate =
  //   const maximum = age.split('-')[1]

  //   const filteredProviders = allProviders.filter(
  //     (item) => item.gender === age
  //   );
  //   return filteredProviders;
  // };
  return (
    <div className="w-full px-52">
      <div className="flex justify-center">
        <div className="border-b-4 border-[#9AC0B5] w-full ">
          <h1 className="py-6 text-[#14274A] text-[20px] text-center">
            It doesn't matter where you're going, it's who you have <br />{" "}
            beside you.
          </h1>
        </div>
      </div>

      <div className="flex justify-between gap-10 pt-10 w-full ">
        <div className="flex flex-col gap-10 w-[20%]">
          <div className=" gap-1 border-4 border-[#9AC0B5] rounded-[15px]  p-5">
            <p className=" text-[#224957] font-[400]">{book.location}</p>
            <p className="font-medium  text-[#224957]">
              start date : {book.appointmentDate} {book.fromTime}
            </p>
            <p className="font-medium  text-[#224957]">
              end date : {book.appointmentDate} {book.toTime}
            </p>
          </div>
          <FilterCard handleFilter={handleFilter} />
        </div>
        <div className="flex flex-col gap-8 ">
          {allProviders.map((item) => (
            <PriceCard key={item.id} provider={item} multiplier={multiplier} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
