import { useEffect, useState } from "react";
import FilterCard from "../components/explore/FilterCard";
import PriceCard from "../components/explore/PriceCard";
import { useOrder } from "../context/OrderContext";
import Loading from "../context/Loading";
import UserTabBar from "../components/UserTabBar";
import { useAuth } from "../context/AuthContext";
import { fa0 } from "@fortawesome/free-solid-svg-icons";

const Moment = require("moment");
const MomentRange = require("moment-range");
const moment = MomentRange.extendMoment(Moment);

function ExplorePage() {
  const { user, orders } = useAuth();
  const { book, providers, getProviderByLatLng } = useOrder();
  const multiplier = +book.toTime.split(":")[0] - book.fromTime.split(":")[0];
  // const [allProviders, setAllProviders] = useState(providers);
  // const [allProviders, setAllProviders] = useState([]);

  // useEffect(() => {
  //   setAllProviders(() => {});
  // }, [providers]);

  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   if (providers.length === 0) {
  //     setLoading(true);
  //   } else {
  //     setLoading(false);
  //   }
  // }, [providers.length]);

  const ProvidersPrice = providers.map((item) => item.rate * multiplier);

  const [filter, setFilter] = useState({
    gender: "",
    age: "",
    price: [0, 1000000],
    // price: [Math.min(...ProvidersPrice), Math.max(...ProvidersPrice)],
    rating: 0
  });
  console.log(filter.price);

  const handleFilter = (e, rating) => {
    if (e) {
      setFilter({ ...filter, [e.target.name]: e.target.value });
      return;
    }
    (rating || rating === 0) && setFilter({ ...filter, rating: rating });
  };

  // console.log(allProviders);
  return (
    <div className="w-full px-52">
      {/* {loading && <h1>Loading</h1>} */}
      <div className="flex justify-center">
        <div className="border-b-4 border-[#9AC0B5] w-full ">
          <h1 className="py-6 text-[#14274A] text-[20px] text-center font-semibold">
            It doesn't matter where you're going, it's who you have beside you.
          </h1>
        </div>
      </div>

      <div className="flex justify-center gap-40 pt-10 w-full ">
        <div className="flex flex-col gap-10 w-[25%]">
          <div className=" gap-1 border-4 border-[#9AC0B5] rounded-[15px]  p-5">
            <p className=" text-[#224957] text-3xl font-extrabold">
              {book.location}
            </p>
            <p className="font-medium  text-[#224957] text-xl my-3">
              Date : {moment(book.appointmentDate).format("dddd, MMMM D YYYY")}{" "}
              {/* {book.fromTime.slice(0, 5)} */}
            </p>
            <p className="font-medium  text-[#224957] text-xl">
              Time :{" "}
              {/* {moment(book.appointmentDate).format("dddd, MMMM D YYYY")}{" "} */}
              {book.fromTime.slice(0, 5)} -{book.toTime.slice(0, 5)}
            </p>
          </div>
          <FilterCard
            handleFilter={handleFilter}
            price={filter.price}
            ProvidersPrice={ProvidersPrice}
          />
        </div>
        <div className="flex flex-col gap-8 w-1/2 mb-10">
          {console.log(providers)}
          {
            // providers.length > 0 &&
            providers
              .filter((item) => {
                if (filter.gender) {
                  return item.gender === filter.gender && item.id !== user.id;
                }
                return item;
              })
              .filter((item) => {
                if (filter.age) {
                  const minimum = filter.age.split("-")[0];
                  const maximum = filter.age.split("-")[1];
                  const yearsOld = moment().diff(item.birthDate, "years");
                  return (
                    yearsOld >= minimum &&
                    yearsOld <= maximum &&
                    item.id !== user.id
                  );
                }

                return item;
              })
              .filter((item) => {
                if (filter.rating) {
                  return (
                    item.provider[0]?.average_rating >= filter.rating &&
                    item.id !== user.id
                  );
                }
                return item;
              })
              .filter((item) => {
                if (filter.price) {
                  const minimum = filter.price[0];
                  const maximum = filter.price[1];
                  return (
                    item.rate * multiplier >= minimum &&
                    item.rate * multiplier <= maximum &&
                    item.id !== user.id
                  );
                }
                return item;
              })
              .map((item) => (
                <PriceCard
                  key={item.id}
                  provider={item}
                  multiplier={multiplier}
                />
              ))
          }
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
