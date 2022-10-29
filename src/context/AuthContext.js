import { createContext, useContext, useEffect, useState } from "react";
import * as authService from "../api/authApi";
import * as userService from "../api/userApi";
import * as orderService from "../api/orderApi";
import {
	addAccessToken,
	getAccessToken,
	removeAccessToken
} from "../utilities/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
	const [user, setUser] = useState({});
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
		// setUser(res.data.user);
	};

	const deleteProfileImage = async (id) => {
		const res = await userService.deleteProfileImage(id);
		// setUser(res.data.user);
	};

	const getProfileImages = async (id) => {
		const res = await userService.getProfileImages(id);
		// setUser(res.data.user);
		return res;
	};

	const [isEditing, setIsEditing] = useState(false);
	const toggleEditing = () => {
		setIsEditing((prevIsEditing) => !prevIsEditing);
	};

	// const [input, setInput] = useState({});
	// const handleChangeInput = (e) => {
	//   setInput({ ...input, [e.target.name]: e.target.value });
	// };

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
				// input,
				// setInput,
				// handleChangeInput,
				pics,
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
