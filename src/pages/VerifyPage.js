import React, { useState } from "react";

function VerifyPage() {
  const [showImage, setShowImage] = useState("");
  const getImage = (e) => {
    setShowImage(e.target.files[0]);
    console.log(URL.createObjectURL(showImage));
    console.log("showImage", showImage);
  };
  return (
    <div className="w-full">
      <div>example</div>
      <img
        className="w-1/3"
        src="https://support.huaweicloud.com/intl/en-us/api-ocr/en-us_image_0288050121.png"
      />
      <input type="file" onChange={getImage} />
      {showImage !== "" && (
        <img className="w-1/3" src={URL.createObjectURL(showImage)} />
      )}
    </div>
  );
}

export default VerifyPage;
