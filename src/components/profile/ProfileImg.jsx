import { useRef, useState, useEffect } from "react";
import "tw-elements";
import { useAuth } from "../../context/AuthContext";
import ProImgModal1 from "./ProImgModal1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/autoplay ";
// import "swiper/css/scrollbar ";
// import { Pagination, Navigation } from "swiper";

import ProfilePic from "../../image/profileImg.png";
import { useLocation, useParams } from "react-router-dom";

function ProfileImg({ profiles }) {
  const { input } = useAuth();
  const { id } = useParams();
  const { pathname } = useLocation();

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
  const [providerPics, setProviderPics] = useState([]);

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
  }, [user?.id]);

  useEffect(() => {
    const fetchProviderPics = async () => {
      try {
        const res = await getProfileImages(id);
        setProviderPics(res.data.profileImages);
        console.log(res.data.profileImages);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProviderPics();
    setLoading(false);
  }, [id]);

  const [loading, setLoading] = useState(true);
  if (loading) return <div>Loading</div>;

  // if (!user || !profiles) {
  //   return null;
  // }

  return (
    <>
      {user?.id == id ||
      pathname == "/pending" ||
      pathname == "/upcoming" ||
      pathname == "/completed" ||
      pathname == "/wallethistory" ? (
        pics.length ? (
          <div className="w-[500px]">
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
              pagination={true}
              modules={[Pagination]}
            >
              {pics.map((item, index) => {
                return (
                  <div>
                    <SwiperSlide className="" key={index}>
                      <div
                        className="flex flex-col  justify-center overflow-hidden"
                        onClick={openModal}
                      >
                        <img
                          src={item.Image}
                          alt="..."
                          className=" block w-96 h-60"
                          // onClick={openModal}
                        />
                      </div>
                    </SwiperSlide>
                  </div>
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
          </div>
        ) : (
          <div className="w-[500px]">
            <img src={ProfilePic} className="w-60 h-96" onClick={openModal} />
            <ProImgModal1
              isOpen={isOpen}
              closeModal={closeModal}
              input={input}
              getProfileImages={getProfileImages}
              user={user}
            />
          </div>
        )
      ) : providerPics.length ? (
        <div className="w-[500px]">
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
            pagination={true}
            modules={[Pagination]}
          >
            {providerPics.map((item, index) => {
              return (
                <SwiperSlide className="" key={index}>
                  {/* <div className="flex flex-col  justify-center overflow-hidden">
                    <img src={item.Image} alt="..." className="w-80 h-60" />
                  </div> */}
                  <div className="flex flex-col  justify-center overflow-hidden">
                    <img
                      src={item.Image}
                      alt="..."
                      className=" block w-96 h-60"
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
        </div>
      ) : (
        <>
          <img src={ProfilePic} className="w-80 h-60" />
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
