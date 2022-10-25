import { useRef, useState, useEffect } from "react";
import "tw-elements";
import { useAuth } from "../../context/AuthContext";
import ProImgModal1 from "./ProImgModal1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/css/autoplay ";
// import "swiper/css/scrollbar ";
import { Pagination, Navigation } from "swiper";

function ProfileImg({ input, getProfileImages }) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const { user } = useAuth();

  // const handleClickSaveProPic = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     formData.append("image", file);

  //     await updateUser(formData, user.id);
  //     setFile(null);
  //     window.location.reload();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleClickDeleteProPic = async () => {
  //   await deleteProfileImage(user.id);
  //   window.location.reload();
  // };

  const [pics, setPics] = useState([]);

  useEffect(() => {
    const fetchPics = async () => {
      try {
        const res = await getProfileImages(user.id);
        setPics(res.data.profileImages);
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPics();
    setLoading(false);
  }, [user.id]);

  const [loading, setLoading] = useState(true);
  if (loading) return <div>Loading</div>;

  return (
    <>
      <Swiper
        breakpoints={{
          1280: {
            slidesPerView: 1,
            spaceBetween: 1,
            slidesPerGroup: 1
          },
          1440: {
            slidesPerView: 1,
            spaceBetween: 1,
            slidesPerGroup: 1
          }
        }}
        loop={true}
        modules={[Pagination, Navigation]}
      >
        {pics.map((item) => {
          return (
            <SwiperSlide className="my-20 ">
              <div
                className="flex flex-col  justify-center overflow-hidden"
                onClick={openModal}
              >
                <img src={item.Image} alt="..." className="block w-96 h-60" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ProImgModal1
        isOpen={isOpen}
        closeModal={closeModal}
        input={input}
        getProfileImages={getProfileImages}
        user={user}
      />
    </>

    // </div>
  );
}

export default ProfileImg;
