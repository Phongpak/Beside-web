import { useEffect, useState } from "react";
import AdminTabBar from "../../components/AdminTabBar";
import AllUserDetail from "../../components/allUser/AllUserDetail";
import * as adminService from "../../api/adminApi";
import Loading from "../../context/Loading";

function UserDetails() {
  const [loadingg, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetch = async () => {
      try {
        await adminService.getUser().then((res) => setUser(res.data.users));
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
          <option value="false">Available</option>
          <option value="true">Banned</option>
        </select>
      </div>

      <div className="text-[#C4C4C4]">Recents :</div>

      {user
        .filter((item) => {
          if (status == "false") {
            return (
              (item.isBan == false &&
                item.firstName.toLowerCase().includes(search)) ||
              (item.isBan == false &&
                item.lastName.toLowerCase().includes(search))
            );
          } else if (status == "true") {
            return (
              (item.isBan == true &&
                item.firstName.toLowerCase().includes(search)) ||
              (item.isBan == true &&
                item.lastName.toLowerCase().includes(search))
            );
          }
          return (
            item.firstName.toLowerCase().includes(search) ||
            item.lastName.toLowerCase().includes(search)
          );
        })
        .map((item, index) => (
          <AllUserDetail key={index} user={item} />
        ))}
    </div>
  );
}

export default UserDetails;
