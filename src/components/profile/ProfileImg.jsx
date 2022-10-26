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

import ProfilePic from "../../image/profileImg.png";

function ProfileImg() {
  const { input } = useAuth();
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const { user, getProfileImages } = useAuth();

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
      {pics.length ? (
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
            {pics.map((item, index) => {
              return (
                <SwiperSlide className="my-20 " key={index}>
                  <div
                    className="flex flex-col  justify-center overflow-hidden"
                    onClick={openModal}
                  >
                    <img
                      src={item.Image}
                      alt="..."
                      className="block w-96 h-60"
                    />
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
      ) : (
        <>
          <img src={ProfilePic} className="w-96 h-60" onClick={openModal} />
          <ProImgModal1
            isOpen={isOpen}
            closeModal={closeModal}
            input={input}
            getProfileImages={getProfileImages}
            user={user}
          />
        </>
      )}
    </>
  );
}

export default ProfileImg;
