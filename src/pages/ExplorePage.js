import { useEffect, useState } from "react";
import FilterCard from "../components/explore/FilterCard";
import PriceCard from "../components/explore/PriceCard";
import { useOrder } from "../context/OrderContext";
import Loading from "../context/Loading";
const Moment = require("moment");
const MomentRange = require("moment-range");
const moment = MomentRange.extendMoment(Moment);

function ExplorePage() {
  const { book, providers } = useOrder();
  const multiplier = +book.toTime.split(":")[0] - book.fromTime.split(":")[0];
  const [allProviders, setAllProviders] = useState(providers);
  const [loading, setLoading] = useState(true);

  const maximumPrice = providers.map((item) => item.rate * multiplier);

  const [filter, setFilter] = useState({
    gender: "",
    age: "",
    price: [Math.min(...maximumPrice), Math.max(...maximumPrice)],
    rating: 0,
  });

  const handleFilter = (e, rating) => {
    if (e) {
      setFilter({ ...filter, [e.target.name]: e.target.value });
      return;
    }
    (rating || rating === 0) && setFilter({ ...filter, rating: rating });
  };

  return (
    <div className="w-full px-52">
      <div className="flex justify-center">
        <div className="border-b-4 border-[#9AC0B5] w-full ">
          <h1 className="py-6 text-[#14274A] text-[20px] text-center">
            It doesn't matter where you're going, it's who you have <br />
            beside you.
          </h1>
        </div>
      </div>

      <div className="flex justify-center gap-40 pt-10 w-full ">
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
          <FilterCard handleFilter={handleFilter} price={filter.price} />
        </div>
        <div className="flex flex-col gap-8 w-1/2">
          {allProviders
            .filter((item) => {
              if (filter.gender) {
                return item.gender === filter.gender;
              }
              return item;
            })
            .filter((item) => {
              if (filter.age) {
                const minimum = filter.age.split("-")[0];
                const maximum = filter.age.split("-")[1];
                const yearsOld = moment().diff(item.birthDate, "years");
                return yearsOld >= minimum && yearsOld <= maximum;
              }

              return item;
            })
            .filter((item) => {
              if (filter.price) {
                const minimum = filter.price[0];
                const maximum = filter.price[1];
                return (
                  item.rate * multiplier >= minimum &&
                  item.rate * multiplier <= maximum
                );
              }
              return item;
            })
            .filter((item) => {
              if (filter.rating) {
                return item.provider[0]?.average_rating >= filter.rating;
              }
              return item;
            })
            .map((item) => (
              <PriceCard
                key={item.id}
                provider={item}
                multiplier={multiplier}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
