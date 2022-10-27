import React, { createContext, useContext } from "react";
import * as userService from "../api/userApi";

const ProfileContext = createContext();

function ProfileContextProvider({ children }) {
  const getProfile = async (id) => {
    const data = await userService.getUserProfile(id);
    return data;
  };

  return (
    <ProfileContext.Provider value={{ getProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
export const useProfile = () => {
  return useContext(ProfileContext);
};

export default ProfileContextProvider;
