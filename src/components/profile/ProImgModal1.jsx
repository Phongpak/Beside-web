import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ProfileImg from "../../image/profileImg.png";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";

function ProImgModal1({ isOpen, closeModal, getProfileImages }) {
  const { user, updateUser, deleteProfileImage } = useAuth();
  const [file1, setFile1] = useState(null);
  const inputEl1 = useRef();
  const [file2, setFile2] = useState(null);
  const inputEl2 = useRef();
  const [file3, setFile3] = useState(null);
  const inputEl3 = useRef();

  const handleClickSaveProPic = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("profileImages", file1);
      formData.append("profileImages", file2);
      formData.append("profileImages", file3);

      await updateUser(formData, user.id);
      setFile1(null);
      setFile2(null);
      setFile3(null);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickDeleteProPic = async (id) => {
    await deleteProfileImage(id);
    window.location.reload();
  };

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

  // console.log(pics);
  // console.log(pics[1]?.id);
  return (
    <>
      {isOpen ? (
        <>
          <div
            onClick={closeModal}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div onClick={(e) => e.stopPropagation()} className="relative ">
              <div className="border-4 border-[#9AC0B5]  rounded-lg min-w-[1300px] min-h-[500px] shadow-lg flex flex-row justify-center items-center w-full bg-white outline-none focus:outline-none ">
                <div className="flex flex-col min-w-[725px] min-h-[400px] gap-[10px]">
                  <button className="self-end text-[30px] text-gray-400 mb-5">
                    <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
                  </button>

                  <div className="flex flex-row justify-center items-center gap-[25px] ">
                    <div className="flex flex-col gap-[15px] min-w-[325px] min-h-[350px] pt-10">
                      <input
                        type="file"
                        className="absolute"
                        ref={inputEl1}
                        onChange={(e) => {
                          console.log(e.target.files[0]);
                          if (e.target.files[0]) {
                            console.log(e.target.files);
                            setFile1(e.target.files[0]);
                          }
                        }}
                      />

                      <button
                        className="relative pl-80 mt-[-50px]"
                        onClick={() => {
                          handleClickDeleteProPic(pics[0]?.id);
                        }}
                      >
                        <i className="fa-solid fa-xmark" />
                      </button>

                      <span
                        onClick={() => {
                          inputEl1.current.click();
                        }}
                      >
                        <img
                          className="relative block w-96 h-60"
                          src={
                            file1
                              ? URL.createObjectURL(file1)
                              : pics[0]?.Image || ProfileImg
                          }
                          alt="Img"
                        />
                      </span>
                    </div>

                    <div className="flex flex-col gap-[15px] min-w-[325px] min-h-[350px] pt-10">
                      <input
                        type="file"
                        className="absolute"
                        ref={inputEl2}
                        onChange={(e) => {
                          console.log(e.target.files[0]);
                          if (e.target.files[0]) {
                            console.log(e.target.files);
                            setFile2(e.target.files[0]);
                          }
                        }}
                      />

                      <button
                        className="relative pl-80 mt-[-50px]"
                        onClick={() => {
                          handleClickDeleteProPic(pics[1]?.id);
                        }}
                      >
                        <i className="fa-solid fa-xmark" />
                      </button>

                      <span
                        onClick={() => {
                          inputEl2.current.click();
                        }}
                      >
                        <img
                          className="relative block w-96 h-60"
                          src={
                            file2
                              ? URL.createObjectURL(file2)
                              : pics[1]?.Image || ProfileImg
                          }
                          alt="Img"
                        />
                      </span>
                    </div>
                    <div className="flex flex-col gap-[15px] min-w-[325px] min-h-[350px] pt-10">
                      <input
                        type="file"
                        className="absolute"
                        ref={inputEl3}
                        onChange={(e) => {
                          console.log(e.target.files[0]);
                          if (e.target.files[0]) {
                            console.log(e.target.files);
                            setFile3(e.target.files[0]);
                          }
                        }}
                      />

                      <button
                        className="relative pl-80 mt-[-50px]"
                        onClick={() => {
                          handleClickDeleteProPic(pics[2]?.id);
                        }}
                      >
                        <i className="fa-solid fa-xmark" />
                      </button>

                      <span
                        onClick={() => {
                          inputEl3.current.click();
                        }}
                      >
                        <img
                          className="relative block w-96 h-60"
                          src={
                            file3
                              ? URL.createObjectURL(file3)
                              : pics[2]?.Image || ProfileImg
                          }
                          alt="Img"
                        />
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row justify-center gap-[20px]">
                    <button
                      className="flex flex-row justify-center items-center w-[100px] h-[40px] border-2 border-[#9AC0B5] rounded-[20px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0 "
                      onClick={handleClickSaveProPic}
                    >
                      SAVE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ProImgModal1;
