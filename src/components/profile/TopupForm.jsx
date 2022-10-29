import { useRef, useState } from "react";

function TopupForm() {
  const inputEl = useRef();
  const [file, setFile] = useState(null);

  return (
    <div className="flex flex-col justify-between items-center min-w-[725px] min-h-[550px] gap-[18px]">
      <div className="flex flex-col justify-between items-center h-[525px]">
        <div className="flex flex-row justify-center items-center w-[250px] h-[75px] bg-[#9AC0B5] rounded-[30px] text-white text-[24px] font-medium">
          Wallet: 50,000 THB
        </div>
        <div className="flex flex-row justify-center items-center w-[250px] h-[300px] bg-gray-100 rounded-[10px]">
          <input
            type="file"
            className="hidden"
            ref={inputEl}
            onChange={(e) => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />
          <div className="flex flex-row justify-center items-center">
            <span onClick={() => inputEl.current.click()}>
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-file-upload-icon-image_1344464.jpg"
                }
                width="160"
                alt="slip"
              />
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-[15px]">
          <div className="text-[#224957] text-[20px] font-medium">Amout:</div>
          <input className="flex flex-row justify-center items-center text-center text-[#9AC0B5] text-[24px] w-[150px] h-[50px] border-2 border-[#9AC0B5] rounded-[20px]" />
          <div className="text-[#224957] text-[20px] font-medium">THB</div>
        </div>
        <div className="flex flex-row justify-center items-center gap-[20px]">
          <button className="flex justify-center items-center font-medium text-[#224957] w-[150px] h-[40px] border-2 border-[#9AC0B5] rounded-[15px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0">
            Submit Topup
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopupForm;
