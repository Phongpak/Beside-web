import React, { createContext, useContext } from "react";
import * as userService from "../api/userApi";

const ProfileContext = createContext();

function ProfileContextProvider({ children }) {
  const getProfile = async (id) => {
    const data = await userService.getUserProfile(id);
    return data;
  };

  const updateProfileImage = async (id, input) => {
    const data = await userService.updateProfileImage(id, input);
    return data;
  };

  return (
    <ProfileContext.Provider value={{ getProfile, updateProfileImage }}>
      {children}
    </ProfileContext.Provider>
  );
}
export const useProfile = () => {
  return useContext(ProfileContext);
};

export default ProfileContextProvider;
