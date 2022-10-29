import { createContext, useContext, useEffect, useState } from "react";
import * as authService from "../api/authApi";
import * as userService from "../api/userApi";
import * as orderService from "../api/orderApi";
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
    // console.log(res.data.user);
    setUser(res.data.user);
    // console.log(res.data.user);
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
  };

  const [pics, setPics] = useState([]);
  useEffect(() => {
    const fetchPics = async () => {
      try {
        const res = await getProfileImages(user?.id);
        setPics(res.data.profileImages);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPics();
  }, [user?.id]);

  const getProfileImages = async (id) => {
    const res = await userService.getProfileImages(id);
    return res;
  };

	const [isEditing, setIsEditing] = useState(false);
	const toggleEditing = () => {
		setIsEditing((prevIsEditing) => !prevIsEditing);
	};

  const getTransactionByUserId = async () => {
    const res = await userService.getTransactionByUserId();
    // setUser(res.data.transactions);
    return res;
  };

	const getMyOrders = async (id) => {
		const res = await orderService.getMyOrders(id);
		return res;
	};

	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const res = await getMyOrders(user.id);
				setOrders(res.data.orders);
			} catch (err) {
				console.log(err);
			}
		};
		fetchOrders();
	}, [user.id]);

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
        getProfileImages,
        toggleEditing,
        isEditing,
        setIsEditing,
        pics,
        getTransactionByUserId,
        initialLoading,
				orders
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
