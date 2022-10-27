import { createContext, useContext, useEffect, useState } from "react";
import * as authService from "../api/authApi";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utilities/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getAccessToken()) {
          await getUser();
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchMe();
  }, []);

  const getUser = async () => {
    const res = await authService.getUser();
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
  return (
    <AuthContext.Provider
      value={{ login, register, user, setUser, logout, getUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
