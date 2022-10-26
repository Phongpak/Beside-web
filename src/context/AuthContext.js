import { createContext, useContext, useEffect, useState } from "react";
import * as authService from "../api/authApi";
import * as userService from "../api/userApi";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utilities/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getAccessToken()) {
          await getUser();
        }
      } catch (err) {
        console.log(err);
      } finally {
        setInitialLoading(false);
      }
    };
    fetchMe();
  }, []);

  const getUser = async () => {
    const res = await authService.getUser();
    console.log(res.data.user);
    setUser(res.data.user);
  };
  const login = async (input) => {
    const res = await authService.login(input);
    addAccessToken(res.data.token);
    await getUser();
  };
  const register = async (input) => {
    const res = await authService.register(input);
  };
  const logout = () => {
    setUser(null);
    removeAccessToken();
  };

  const updateUser = async (input, id) => {
    const res = await userService.updateUser(input, id);
    console.log(res);
    setUser(res.data.user);
  };

  const deleteProfileImage = async (id) => {
    const res = await userService.deleteProfileImage(id);
    setUser(res.data.user);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        user,
        setUser,
        logout,
        getUser,
        updateUser,
        deleteProfileImage,
        initialLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
