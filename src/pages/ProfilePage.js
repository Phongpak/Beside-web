import Bio from "../components/profile/Bio";
import Informatio from "../components/profile/Informatio";
import ReviewCard from "../components/ReviewCard";
import UserTabBar from "../components/UserTabBar";

function ProfilePage() {
  return (
    <div>
      <Bio />
      <div className="w-[100vw] h-[650px] flex flex-col gap-10 px-60">
        <UserTabBar />
        <div className="flex flex-row gap-10">
          <Informatio />
          <div className="flex flex-col   h-[650px]">
            <div className="flex flex-col gap-[10px]">
              <div className="text-[20px] text-[#224957] font-medium">
                My reviews (150)
              </div>
              <input
                className="w-[375px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] pl-[20px] placeholder-[#C4C4C4]"
                placeholder="Search here..."
              />
              <div className="flex flex-row flex-wrap gap-10">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
