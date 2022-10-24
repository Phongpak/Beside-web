import { useRef, useState } from "react";
import "tw-elements";
import { useAuth } from "../../context/AuthContext";
import ProImgModal1 from "./ProImgModal1";

function ProfileImg({ input }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const { user, updateUser, deleteProfileImage } = useAuth();
  const [file, setFile] = useState(null);
  const inputEl = useRef();

  const handleClickSaveProPic = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", file);

      await updateUser(formData, user.id);
      setFile(null);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickDeleteProPic = async () => {
    console.log(user.id);
    await deleteProfileImage(user.id);
    window.location.reload();
  };

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://dudeplace.co/wp-content/uploads/2021/04/joy-1.jpg"
            className="block w-96 h-60"
            alt="Camera"
            onClick={openModal}
          />
        </div>
        <div className="carousel-item active relative float-left w-full">
          <img
            src="https://s.isanook.com/jo/0/ud/486/2434873/joy-red-velvet-crush.jpg"
            className="block w-96 h-60 "
            alt="Wild Landscape"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://6.viki.io/image/6abe54457dcb4389ab297bd561a4f210.jpeg?s=900x600&e=t"
            className="block w-96 h-60"
            alt="Exotic Fruits"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://www.brighttv.co.th/wp-content/uploads/2021/08/%E0%B8%9B%E0%B8%81%E0%B9%83%E0%B8%992-11.jpg"
            className="block w-96 h-60"
            alt="Exotic Fruits"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://1409791524.rsc.cdn77.org/data/images/full/591852/red-velvet-joy.jpg"
            className="block w-96 h-60"
            alt="Exotic Fruits"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
      <ProImgModal1
        isOpen={isOpen}
        closeModal={closeModal}
        handleClickDeleteProPic={handleClickDeleteProPic}
        inputEl={inputEl}
        setFile={setFile}
        handleClickSaveProPic={handleClickSaveProPic}
        input={input}
        file={file}
      />
    </div>
  );
}

export default ProfileImg;
