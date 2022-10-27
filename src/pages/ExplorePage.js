import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import suzy from "../images/suzy.png";
function ExplorePage() {
  return (
    <div className="px-40">
      <div className="flex justify-center">
        <div className="border-b-[7px] border-[#9AC0B5] w-full ">
          <h1 className="pt-[80px] pb-[50px] text-[#14274A] text-[40px] text-center">
            It doesn't matter where you're going, it's who you have beside you.
          </h1>
        </div>
      </div>

      <div className="flex justify-between my-20">
        <div className="flex flex-col gap-10">
          <div className=" gap-1 border-4 border-[#9AC0B5] rounded-[15px] text-center p-10">
            <p className="text-[40px] text-[#224957] font-[400]">
              Siam paragon
            </p>
            <p className="font-medium text-[20px] text-[#224957]">
              start date : 01/01/22 17.00 pm
            </p>
            <p className="font-medium text-[20px] text-[#224957]">
              end date : 01/01/22 19.00 pm
            </p>
          </div>
          <div className=" gap-1 border-4 border-[#9AC0B5] rounded-[15px] text-center p-10">
            <p className="text-[40px] text-[#224957] font-[400]">
              Siam paragon
            </p>
            <p className="font-medium text-[20px] text-[#224957]">
              start date : 01/01/22 17.00 pm
            </p>
            <p className="font-medium text-[20px] text-[#224957]">
              end date : 01/01/22 19.00 pm
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row justify-between items-center border-4 p-10 border-[#9AC0B5] rounded-[15px] ">
            <div className="flex justify-center items-center border w-[400px] h-[300px] overflow-hidden ">
              <img className="h-full" src={suzy} />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-[35px] text-[#224957] font-[500] ml-[40px]">
                nayeooony
              </h1>
              <div className="flex items-center gap-[5px] text-[#E6C3C1] text-[30px] ml-[40px]">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <div>4.5</div>
              </div>
              <div className="flex flex-row gap-1 ml-[40px]">
                <span className=" bg-[#9AC0B5] rounded-[10px] text-center text-[20px] p-[10px]">
                  dancing
                </span>
                <span className=" bg-[#9AC0B5] rounded-[10px] text-center text-[20px] p-[10px]">
                  dancing
                </span>
                <span className=" bg-[#9AC0B5] rounded-[10px] text-center text-[20px] p-[10px]">
                  dancing
                </span>
              </div>

              <div className="flex flex-row  h-[40%] text-[#224957] ">
                <div className="flex flex-col  w-[120px] font-semibold ml-[40px] text-[20px]">
                  <div>Age:</div>
                  <div>Gender:</div>
                  <div className="mt-[20px]">Description:</div>
                </div>
                <div className="flex flex-col w-[250px] font-medium text-[20px]">
                  <div>25</div>
                  <div>Female</div>
                  <div className="mt-[20px]">
                    no sex , no touch , no talk , no outside
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-1 border-4 border-[#9AC0B5] rounded-[15px] py-[40px] px-[25px] text-center">
              <p className="font-medium text-[20px] text-[#224957]">Price</p>
              <p className="text-[60px] text-[#224957] font-[700]">5,000</p>
              <p className="font-medium text-[20px] text-[#224957]">THB</p>

              <div>
                <button className="mt-[30px] items-center self-end font-medium text-[#224957] w-[150px] h-[40px] border-2 border-[#9AC0B5] rounded-[10px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0">
                  More details
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center border-4 p-10 border-[#9AC0B5] rounded-[15px] ">
            <div className="flex justify-center items-center border w-[400px] h-[300px] overflow-hidden ">
              <img className="h-full" src={suzy} />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-[35px] text-[#224957] font-[500] ml-[40px]">
                nayeooony
              </h1>
              <div className="flex items-center gap-[5px] text-[#E6C3C1] text-[30px] ml-[40px]">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <div>4.5</div>
              </div>
              <div className="flex flex-row gap-1 ml-[40px]">
                <span className=" bg-[#9AC0B5] rounded-[10px] text-center text-[20px] p-[10px]">
                  dancing
                </span>
                <span className=" bg-[#9AC0B5] rounded-[10px] text-center text-[20px] p-[10px]">
                  dancing
                </span>
                <span className=" bg-[#9AC0B5] rounded-[10px] text-center text-[20px] p-[10px]">
                  dancing
                </span>
              </div>

              <div className="flex flex-row  h-[40%] text-[#224957] ">
                <div className="flex flex-col  w-[120px] font-semibold ml-[40px] text-[20px]">
                  <div>Age:</div>
                  <div>Gender:</div>
                  <div className="mt-[20px]">Description:</div>
                </div>
                <div className="flex flex-col w-[250px] font-medium text-[20px]">
                  <div>25</div>
                  <div>Female</div>
                  <div className="mt-[20px]">
                    no sex , no touch , no talk , no outside
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-1 border-4 border-[#9AC0B5] rounded-[15px] py-[40px] px-[25px] text-center">
              <p className="font-medium text-[20px] text-[#224957]">Price</p>
              <p className="text-[60px] text-[#224957] font-[700]">5,000</p>
              <p className="font-medium text-[20px] text-[#224957]">THB</p>

              <div>
                <button className="mt-[30px] items-center self-end font-medium text-[#224957] w-[150px] h-[40px] border-2 border-[#9AC0B5] rounded-[10px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0">
                  More details
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center border-4 p-10 border-[#9AC0B5] rounded-[15px] ">
            <div className="flex justify-center items-center border w-[400px] h-[300px] overflow-hidden ">
              <img className="h-full" src={suzy} />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-[35px] text-[#224957] font-[500] ml-[40px]">
                nayeooony
              </h1>
              <div className="flex items-center gap-[5px] text-[#E6C3C1] text-[30px] ml-[40px]">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <div>4.5</div>
              </div>
              <div className="flex flex-row gap-1 ml-[40px]">
                <span className=" bg-[#9AC0B5] rounded-[10px] text-center text-[20px] p-[10px]">
                  dancing
                </span>
                <span className=" bg-[#9AC0B5] rounded-[10px] text-center text-[20px] p-[10px]">
                  dancing
                </span>
                <span className=" bg-[#9AC0B5] rounded-[10px] text-center text-[20px] p-[10px]">
                  dancing
                </span>
              </div>

              <div className="flex flex-row  h-[40%] text-[#224957] ">
                <div className="flex flex-col  w-[120px] font-semibold ml-[40px] text-[20px]">
                  <div>Age:</div>
                  <div>Gender:</div>
                  <div className="mt-[20px]">Description:</div>
                </div>
                <div className="flex flex-col w-[250px] font-medium text-[20px]">
                  <div>25</div>
                  <div>Female</div>
                  <div className="mt-[20px]">
                    no sex , no touch , no talk , no outside
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-1 border-4 border-[#9AC0B5] rounded-[15px] py-[40px] px-[25px] text-center">
              <p className="font-medium text-[20px] text-[#224957]">Price</p>
              <p className="text-[60px] text-[#224957] font-[700]">5,000</p>
              <p className="font-medium text-[20px] text-[#224957]">THB</p>

              <div>
                <button className="mt-[30px] items-center self-end font-medium text-[#224957] w-[150px] h-[40px] border-2 border-[#9AC0B5] rounded-[10px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0">
                  More details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
