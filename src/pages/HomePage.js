import bg from "../images/bg1.jpeg";
import clock from "../images/clock.jpeg";
import logo1 from "../images/logo1.png";

function HomePage() {
  return (
    <>
      <div className="px-40 py-2 flex w-full justify-between items-center absolute z-10  ">
        <img className="scale-75" src={logo1} alt="logo" />
        <div className=" w-1/3 gap-10 flex flex-row-reverse">
          <a className="text-[#809490] font-bold text-2xl hover:text-[#98ABA7] ">
            Home
          </a>
          <a className="text-[#809490] font-bold text-2xl hover:text-[#98ABA7] ">
            About us
          </a>
          <a className="text-[#809490] font-bold text-2xl hover:text-[#98ABA7] ">
            How to booking
          </a>
        </div>
      </div>
      <div class="relative">
        <img src={bg} />
        <h1 class="absolute text-[60px] text-black top-[200px] left-[380px] -translate-x-1/2 -translate-y-1/2">
          WELCOME TO
        </h1>

        <img
          className="scale-800 absolute top-[300px] left-[370px] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[100px]"
          src={logo1}
          alt="logo"
        />

        <p className="scale-800 absolute top-[400px] left-[490px] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[100px] text-[30px]">
          Book your stay and enjoy Luxury redefined at the most affordable
          rates.
        </p>

        <button className="bg-[#9AC0B5] absolute text-[30px] rounded-[20px] text-white top-[650px] left-1/2 -translate-x-1/2 -translate-y-1/2 p-[20px] ">
          Book now
        </button>

        <p className="scale-800 absolute top-[770px] left-[1220px] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[100px] text-[30px] text-white">
          Scroll
        </p>
      </div>
      <h1 className="pt-[80px] text-[#14274A] text-[40px] text-center">
        It doesn't matter where you're going, it's who you have beside you.
      </h1>

      <div className="flex flex space-x-[100px] pt-[80px] px-[180px]">
        <div className="border-l pl-10 border-l-[7px] border-[#9AC0B5] ">
          <h1 className="text-[60px] text-[#9AC0B5] pt-[50px] pl-[50px]">
            About us
          </h1>
          <p className="w-[500px] pt-[40px] text-[25px] text-[#9AC0B5]">
            Beside.com has Friends from around the world available for hire.
            Covid-19 Update Oct 2022: Most states and countries have lifted
            their restrictions. Please use social distancing if not vaccinated
            when meeting in person. Our Friends are also offering "Virtual
            Friend Services" such as Facetime, Zoom, Texting, Phone Friends and
            more.
          </p>
        </div>
        <div>
          <img src={clock} className=" w-[700px] h-[400px] mt-[50px]" />
        </div>
      </div>
      <div>
        <h1 className="pt-[80px] text-center text-[40px] text-[#14274A]">
          Example
        </h1>
      </div>
      <div className="flex space-x-[100px] px-[180px] pt-[80px]">
        <img src={clock} className=" rounded-lg w-[500px] h-[200px]" />
        <img src={clock} className=" rounded-lg w-[500px] h-[200px]" />
        <img src={clock} className=" rounded-lg w-[500px] h-[200px]" />
      </div>
      <div className="flex space-x-[100px] px-[180px] pt-[80px] pb-[100px]">
        <img src={clock} className="  w-[500px] h-[200px]" />
        <img src={clock} className="  w-[500px] h-[200px]" />
        <img src={clock} className="  w-[500px] h-[200px]" />
      </div>
    </>
  );
}

export default HomePage;
