import { createContext, useContext, useEffect, useState } from "react";
// import * as authService from "../api/authApi";
import * as userService from "../api/userApi";
// import {
//   addAccessToken,
//   getAccessToken,
//   removeAccessToken
// } from "../utilities/localStorage";

const AuthContext = createContext({ children });

function UserPicsContext() {
  const [pics, setPics] = useState([]);
  useEffect(() => {
    const fetchPics = async () => {
      try {
        const res = await getProfileImages(user.id);
        setPics(res.data.profileImages);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPics();
  }, [user.id]);

  return (
    <UserPicsContext.Provider
      value={{
        pics
      }}
    >
      {children}
    </UserPicsContext.Provider>
  );
}

export default UserPicsContext;
