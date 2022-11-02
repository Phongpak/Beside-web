import Bio from "../components/profile/Bio";
import Informatio from "../components/profile/Informatio";
import ReviewCard from "../components/ReviewCard";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import UserTabBar from "../components/UserTabBar";
import { useLoading } from "../context/LoadingContext";
import { useParams } from "react-router-dom";
import { useProfile } from "../context/ProfileContext";
import ReviewCardByUser from "../components/ReviewCardByUser";
import { useOrder } from "../context/OrderContext";

function ProfilePage() {
  const { id } = useParams();
  const { getProfile } = useProfile();
  const { book, providers } = useOrder();
  const [profiles, setProfiles] = useState([]);
  // console.log("book", book);
  // console.log("providers", providers);

  useEffect(() => {
    const profileData = async () => {
      let profile = await getProfile(id);

      setProfiles(profile.data.user);
    };
    if (id) {
      profileData();
    }
  }, [id]);

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const orderData = async () => {
      let allOrder = await getMyOrders(id);
      console.log("allOrder", allOrder);
      setAllOrders(allOrder.data.orders);
    };
    if (id) {
      orderData();
    }
  }, [id]);
  // console.log("allOrders", allOrders);

  const { user, updateUser, isEditing, setIsEditing, orders, getMyOrders } =
    useAuth();
  const [input, setInput] = useState({});
  const { startLoading, stopLoading } = useLoading();
  console.log("input", input);
  const myOrder = orders.filter((item) => item?.provider?.id == id);
  const AllOrder = allOrders.filter(
    (item) =>
      item?.provider?.id == id &&
      (item?.status === "REJECT" || item?.status === "SUCCESS")
  );
  console.log("AllOrder", AllOrder);
  useEffect(() => {
    setInput((p) => {
      return {
        penName: user?.penName || user?.firstName,
        description: user?.description,
        rate: user?.rate,
        gender: user?.gender,
        sexuallyInterested: user?.sexuallyInterested,
        language: user?.language,
        hobby: user?.hobby,
        lat: user?.lat,
        lng: user?.lng,
        location: user?.location,
      };
    });
  }, [user]);
  const multiplier =
    +book?.toTime?.split(":")[0] - book?.fromTime?.split(":")[0];

  // console.log("multiplier", multiplier);

  const totalPrice = multiplier * providers[0]?.rate;
  // console.log("totalPrice", totalPrice);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClickSave = async (e) => {
    try {
      startLoading();
      await updateUser(input, user.id);
      setIsEditing(false);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <div>
      <Bio
        totalPrice={totalPrice}
        input={input}
        handleChangeInput={handleChangeInput}
        setInput={setInput}
        profiles={profiles}
        myOrder={myOrder}
        AllOrder={AllOrder}
      />
      <div className="w-full h-[650px] flex flex-col gap-10 px-60">
        {!isEditing && id == user?.id && <UserTabBar />}
        <div className="flex flex-row gap-10">
          <Informatio
            input={input}
            handleChangeInput={handleChangeInput}
            setInput={setInput}
            profiles={profiles}
            myOrder={myOrder}
            AllOrder={AllOrder}
          />
          <div className="flex flex-col   h-[650px]">
            <div className="flex flex-col gap-[10px]">
              <div className="text-[20px] text-[#224957] font-medium">
                {id == user?.id && "My"} reviews ({AllOrder?.length})
              </div>

              <input
                className="w-[375px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] pl-[20px] placeholder-[#C4C4C4]"
                placeholder="Search here..."
              />
              <div className="flex flex-row flex-wrap gap-6">
                {AllOrder.map((item) => (
                  <ReviewCardByUser item={item} />
                ))}
              </div>

              {isEditing ? (
                <div
                  className="mx-auto mt-20 flex flex-row justify-center items-center bg-[#9AC0B5] text-white font-bold rounded-[20px] w-[140px] h-[60px]"
                  onClick={handleClickSave}
                >
                  Save
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
