import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminTabBar from "../../components/AdminTabBar";
import UserProviderCard from "../../components/providerUser/UserProviderCard";
import * as adminService from "../../api/adminApi";
import Loading from "../../context/Loading";
// import ProviderUserModal from "./UserProviderModal";

function ProviderUser() {
  const [loadingg, setLoading] = useState(true);
  const [providerUser, setProviderUser] = useState([]);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetch = async () => {
      try {
        await adminService
          .getUser()
          .then((res) => setProviderUser(res.data.users));
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    setLoading(false);
  }, []);

  if (loadingg) return <Loading />;
  return (
    <div className="flex flex-col gap-[20px] w-[100vw] px-60">
      <AdminTabBar />
      <div className="flex flex-row gap-[10px]">
        <input
          className="min-w-[750px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] pl-[20px] placeholder-[#C4C4C4]"
          placeholder="Search here..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="min-w-[200px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] text-[#224957] pl-[10px]"
          name="status"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All status</option>
          <option value="PENDING">Pending</option>
          <option value="SUCCESS">Accepted</option>
          <option value="REJECT">Denied</option>
        </select>
      </div>

      <div className="text-[#C4C4C4]">Recents :</div>
      <div className="flex flex-wrap gap-5">
        {providerUser
          .filter((item) => {
            if (status) {
              return (
                (item.providerRequestStatus == status &&
                  item.firstName.toLowerCase().includes(search)) ||
                (item.providerRequestStatus == status &&
                  item.lastName.toLowerCase().includes(search))
              );
            }
            return (
              item.firstName.toLowerCase().includes(search) ||
              item.lastName.toLowerCase().includes(search)
            );
          })
          .map((item, index) => {
            if (!item.providerRequestStatus) {
              return "";
            }
            return <UserProviderCard key={index} user={item} />;
          })}
      </div>
    </div>
  );
}

export default ProviderUser;
