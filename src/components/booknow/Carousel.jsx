import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import SwiperCore, {Autoplay} from "swiper/core"
// import "swiper/css/autoplay ";
// import "swiper/css/scrollbar ";
import { Pagination, Navigation, Autoplay } from "swiper";
import { useState } from "react";

function Carousel() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  return (
    <div>
      <h1 className="pt-[200px] text-[#9AC0B5] text-[40px] text-center mt-20">
        Top destination in bangkok
      </h1>

      <div>
        <Swiper
          // style={{ animation: "scroll 30s" }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          className="slide-track"
          breakpoints={{
            1280: {
              slidesPerView: 4,
              spaceBetween: 1,
              slidesPerGroup: 4
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 1,
              slidesPerGroup: 5
            }
          }}
          speed={5000}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
        >
          <SwiperSlide className="my-20 ">
            <div className=" slide h-60 w-60 flex flex-col  justify-center overflow-hidden rounded-full hover:-translate-y-10 hover:scale-125">
              <img
                src="https://bangkoknightlife.com/wp-content/uploads/bangkok_at_night.jpg"
                alt="..."
                className="h-full w-full  "
              />
            </div>
            <div className=" w-60 mt-5">
              <h1 className="text-center text-2xl font-semibold text-[#506369]">
                Bangkok
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" my-20 ">
            <div className="slide h-60 w-60 flex flex-col  justify-center overflow-hidden rounded-full hover:-translate-y-10 hover:scale-125">
              <img
                src="https://www.agoda.com/wp-content/uploads/2020/06/Chiang-Mai-tuk-tuk-day-trips-from-Chiang-Mai-Thailand.jpg"
                alt="..."
                className="h-full w-full"
              />
            </div>
            <div className=" w-60 mt-5">
              <h1 className="text-center text-2xl font-semibold text-[#506369]">
                Chiangmai
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="my-20 ">
            <div className="slide h-60 w-60 flex flex-col  justify-center overflow-hidden rounded-full hover:-translate-y-10 hover:scale-125">
              <img
                src="https://www.swedishnomad.com/wp-content/images/2022/05/Things-to-do-in-Pattaya.jpg"
                alt="..."
                className="h-full w-full"
              />
            </div>
            <div className=" w-60 mt-5">
              <h1 className="text-center text-2xl font-semibold text-[#506369]">
                Pattaya
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="my-20 ">
            <div className="slide h-60 w-60 flex flex-col  justify-center overflow-hidden rounded-full hover:-translate-y-10 hover:scale-125">
              <img
                src="https://www.bangkokairblog.com/wp-content/uploads/2018/07/PHUKET-WALKING-STREET-MARKET.jpg"
                alt="..."
                className="h-full w-full "
              />
            </div>
            <div className=" w-60 mt-5">
              <h1 className="text-center text-2xl font-semibold text-[#506369]">
                Phuket
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="my-20 ">
            <div className="slide h-60 w-60 flex flex-col  justify-center overflow-hidden rounded-full hover:-translate-y-10 hover:scale-125">
              <img
                src="https://img.kapook.com/u/2022/sutasinee/08/93.jpg"
                alt="..."
                className="h-full w-full"
              />
            </div>
            <div className=" w-60 mt-5">
              <h1 className="text-center text-2xl font-semibold text-[#506369]">
                Khonkaen
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" my-20 ">
            <div className="h-60 w-60 flex flex-col  justify-center overflow-hidden rounded-full hover:-translate-y-10 hover:scale-125">
              <img
                src="https://obs.line-scdn.net/0hYubkJBYgBlpfEin-bU15DWVEBTVsfhVZOyRXWQN8WG56cEMONHVANHxFXWMlI0EENndNOXIQHWt1dRYLZyNA/w644"
                alt="..."
                className="h-full w-full"
              />
            </div>
            <div className=" w-60 mt-5">
              <h1 className="text-center text-2xl font-semibold text-[#506369]">
                Krabi
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" my-20 ">
            <div className="h-60 w-60 flex flex-col  justify-center overflow-hidden rounded-full hover:-translate-y-10 hover:scale-125">
              <img
                src="https://obs.line-scdn.net/0hYubkJBYgBlpfEin-bU15DWVEBTVsfhVZOyRXWQN8WG56cEMONHVANHxFXWMlI0EENndNOXIQHWt1dRYLZyNA/w644"
                alt="..."
                className="h-full w-full"
              />
            </div>
            <div className=" w-60 mt-5">
              <h1 className="text-center text-2xl font-semibold text-[#506369]">
                Krabi
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" my-20">
            <div className="h-60 w-60 flex flex-col  justify-center overflow-hidden rounded-full hover:-translate-y-10 hover:scale-125">
              <img
                src="https://obs.line-scdn.net/0hYubkJBYgBlpfEin-bU15DWVEBTVsfhVZOyRXWQN8WG56cEMONHVANHxFXWMlI0EENndNOXIQHWt1dRYLZyNA/w644"
                alt="..."
                className="h-full w-full"
              />
            </div>
            <div className=" w-60 mt-5">
              <h1 className="text-center text-2xl font-semibold text-[#506369]">
                Krabi
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
