import booknow from "../images/booknow.jpeg";
import { Carousel } from "flowbite-react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ggmap from "../images/ggmap.jpeg";

function BooknowPage() {
  return (
    <>
      <div className="relative w-full">
        <img src={booknow} className="h-[700px] w-full" />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto absolute top-[170px] ml-[250px]">
          <div className=" bg-[#F5F5F5] rounded-[70px] shadow flex justify-center">
            <div className=" space-y-8 px-[100px] py-[100px]">
              <form className="space-y-6" action="#">
                <div className="flex ">
                  <input
                    type=""
                    name="destination"
                    id="destination"
                    className="text-[#98ABA7] text-sm rounded-lg block w-full p-2.5 placeholder-[#98ABA7] bg-white"
                    placeholder="Enter a destination"
                  />
                </div>
                <img src={ggmap} className="w-[500px] h-[200px]"></img>
                <div className="flex gap-[10px]">
                  <div className="flex space-x-6">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="text-[#98ABA7] text-sm rounded-lg block w-full p-2.5 placeholder-[#98ABA7] bg-white"
                      placeholder="Date"
                    />
                    <input
                      type="time"
                      name="startDate"
                      id="startDate"
                      className="text-[#98ABA7] text-sm rounded-lg block w-full p-2.5 placeholder-[#98ABA7] bg-white"
                      placeholder="Start Date"
                    />
                  </div>
                  <div className="flex space-x-6">
                    <input
                      type="time"
                      name="endDate"
                      id="endDate"
                      className="text-[#98ABA7] text-sm rounded-lg block w-full p-2.5 placeholder-[#98ABA7] bg-white"
                      placeholder="End Date"
                    />
                  </div>
                </div>

                <div className="flex space-x-6">
                  <input
                    type="text"
                    name="description"
                    id="description"
                    className="text-[#98ABA7] text-sm rounded-lg block w-full p-2.5 placeholder-[#98ABA7] bg-white"
                    placeholder="Description"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <button className="bg-[#9AC0B5] absolute text-[20px] rounded-[20px] text-white top-[800px] left-1/2 -translate-x-1/2 -translate-y-1/2 p-[20px] px-[100px] ">
          SEARCH
        </button>
      </div>
      <h1 className="pt-[200px] text-[#9AC0B5] text-[40px] text-center">
        Top destination in bangkok
      </h1>
      <div className="h-[150px] flex mt-[80px] mb-[80px] justify-center gap-20">
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
          className="rounded-full"
        />

        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
          className="rounded-full"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
          className="rounded-full"
        />

        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
          className="rounded-full"
        />
      </div>

      <h1 className=" text-[#9AC0B5] text-[40px] text-center">
        Review from user
      </h1>
      <div className="h-[150px] flex mt-[80px] mb-[80px] justify-center gap-20">
        <div className="flex flex-row justify-center items-center w-[310px] h-[175px] border-2 border-[#9AC0B5] rounded-[10px]">
          <div className="flex flex-row w-[90%] h-[90%] gap-[10px]">
            <div className="flex flex-col gap-[5px]">
              <div className="text-[17px] text-[#224957] font-medium">
                "Siam paragon"
              </div>
              <img
                src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
                width="100"
              />
              <div className="flex items-center gap-[5px] text-[#E6C3C1] text-[10px]">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <div className>4.5</div>
              </div>
            </div>
            <div className="flex flex-col gap-[5px]">
              <div className="flex justify-center items-center text-[10px] w-[140px] h-[70px] border-2 border-[#9AC0B5] rounded-[5px] break-words">
                <div className="w-[90%] h-[90%]">
                  Test message D Mak Mak Ka Test Review eiei
                </div>
              </div>
              <div className="flex justify-center items-center w-[140px] h-[80px] border-2 border-[#9AC0B5] rounded-[5px]">
                <div className="flex flex-row gap-[5px] w-[90%] h-[90%]">
                  <div className="flex flex-col">
                    <img
                      className="rounded-[100%]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRoAMwNQfMniBnAsehPj6SF_qLYtNrUuSsg&usqp=CAU"
                      width="30"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <div className="flex flex-col">
                      <div className="text-[#224957] text-[12px] font-medium">
                        Mackensy
                      </div>
                      <div className="text-[#818182] text-[8px]">
                        Review date 01/01/2022
                      </div>
                    </div>
                    <div className="text-[#224957] text-[9px]">
                      "Best service I ever had !!!"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center w-[310px] h-[175px] border-2 border-[#9AC0B5] rounded-[10px]">
          <div className="flex flex-row w-[90%] h-[90%] gap-[10px]">
            <div className="flex flex-col gap-[5px]">
              <div className="text-[17px] text-[#224957] font-medium">
                "Siam paragon"
              </div>
              <img
                src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
                width="100"
              />
              <div className="flex items-center gap-[5px] text-[#E6C3C1] text-[10px]">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <div>4.5</div>
              </div>
            </div>
            <div className="flex flex-col gap-[5px]">
              <div className="flex justify-center items-center text-[10px] w-[140px] h-[70px] border-2 border-[#9AC0B5] rounded-[5px] break-words">
                <div className="w-[90%] h-[90%]">
                  Test message D Mak Mak Ka Test Review eiei
                </div>
              </div>
              <div className="flex justify-center items-center w-[140px] h-[80px] border-2 border-[#9AC0B5] rounded-[5px]">
                <div className="flex flex-row gap-[5px] w-[90%] h-[90%]">
                  <div className="flex flex-col">
                    <img
                      className="rounded-[100%]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRoAMwNQfMniBnAsehPj6SF_qLYtNrUuSsg&usqp=CAU"
                      width="30"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <div className="flex flex-col">
                      <div className="text-[#224957] text-[12px] font-medium">
                        Mackensy
                      </div>
                      <div className="text-[#818182] text-[8px]">
                        Review date 01/01/2022
                      </div>
                    </div>
                    <div className="text-[#224957] text-[9px]">
                      "Best service I ever had !!!"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center w-[310px] h-[175px] border-2 border-[#9AC0B5] rounded-[10px]">
          <div className="flex flex-row w-[90%] h-[90%] gap-[10px]">
            <div className="flex flex-col gap-[5px]">
              <div className="text-[17px] text-[#224957] font-medium">
                "Siam paragon"
              </div>
              <img
                src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
                width="100"
              />
              <div className="flex items-center gap-[5px] text-[#E6C3C1] text-[10px]">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <div>4.5</div>
              </div>
            </div>
            <div className="flex flex-col gap-[5px]">
              <div className="flex justify-center items-center text-[10px] w-[140px] h-[70px] border-2 border-[#9AC0B5] rounded-[5px] break-words">
                <div className="w-[90%] h-[90%]">
                  Test message D Mak Mak Ka Test Review eiei
                </div>
              </div>
              <div className="flex justify-center items-center w-[140px] h-[80px] border-2 border-[#9AC0B5] rounded-[5px]">
                <div className="flex flex-row gap-[5px] w-[90%] h-[90%]">
                  <div className="flex flex-col">
                    <img
                      className="rounded-[100%]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRoAMwNQfMniBnAsehPj6SF_qLYtNrUuSsg&usqp=CAU"
                      width="30"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <div className="flex flex-col">
                      <div className="text-[#224957] text-[12px] font-medium">
                        Mackensy
                      </div>
                      <div className="text-[#818182] text-[8px]">
                        Review date 01/01/2022
                      </div>
                    </div>
                    <div className="text-[#224957] text-[9px]">
                      "Best service I ever had !!!"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BooknowPage;
