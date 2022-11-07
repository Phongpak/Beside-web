import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as authService from "../api/authApi";
import * as userService from "../api/userApi";
import * as orderService from "../api/orderApi";
import * as adminService from "../api/adminApi";
import {
	addAccessToken,
	getAccessToken,
	removeAccessToken
} from "../utilities/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);
	const [initialLoading, setInitialLoading] = useState(true);
	const [orders, setOrders] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const { id } = useParams();

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
		setUser(res.data.user);
	};

	const deleteProfileImage = async (id) => {
		const res = await userService.deleteProfileImage(id);
	};

	const getProfileImages = async (id) => {
		const res = await userService.getProfileImages(id);
		return res;
	};

	const [pics, setPics] = useState([]);
	const [providerPics, setProviderPics] = useState([]);

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
	}, [user?.id]);

	useEffect(() => {
		const fetchProviderPics = async () => {
			try {
				const res = await getProfileImages(id);
				setProviderPics(res.data.profileImages);
			} catch (err) {
				console.log(err);
			}
		};
		fetchProviderPics();
	}, [id]);

	const myOrderImages = pics.sort((a, b) => b.isShow - a.isShow);
	const otherOrderImages = providerPics.sort((a, b) => b.isShow - a.isShow);

	const toggleEditing = () => {
		setIsEditing((prevIsEditing) => !prevIsEditing);
	};

	const getTransactionByUserId = async () => {
		const res = await userService.getTransactionByUserId();
		return res;
	};

	const getMyOrders = async (id) => {
		const res = await orderService.getMyOrders(id);
		return res;
	};

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const res = await getMyOrders(user?.id);
				setOrders(res.data.orders);
			} catch (err) {
				console.log(err);
			}
		};
		fetchOrders();
	}, [user?.id]);

	const updateOrder = async (input, id) => {
		const res = await userService.updateOrder(input, id);
	};

	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		const fetchTransactions = async () => {
			try {
				const res = await getTransactionByUserId();
				setTransactions(res.data.transactions);
			} catch (err) {
				console.log(err);
			}
		};
		fetchTransactions();
	}, []);

	const [pendingUser, setPendingUser] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetch = async () => {
			try {
				await adminService
					.getUser()
					.then((res) => setPendingUser(res.data.users));
			} catch (error) {
				console.log(error);
			}
		};
		fetch();
		setLoading(false);
	}, []);

	const [providerUser, setProviderUser] = useState([]);

	useEffect(() => {
		const fetch = async () => {
			try {
				await adminService
					.getUser()
					.then((res) => setProviderUser(res.data.users));
			} catch (error) {
				console.log(error);
			}
		};
		fetch();
		setLoading(false);
	}, []);

	const [userDetails, setUserDetails] = useState([]);
	useEffect(() => {
		const fetch = async () => {
			try {
				await adminService
					.getUser()
					.then((res) => setUserDetails(res.data.users));
			} catch (error) {
				console.log(error);
			}
		};
		fetch();
		setLoading(false);
	}, []);

	const [adminTransactions, setAdminTransactions] = useState([]);
	useEffect(() => {
		const fetch = async () => {
			try {
				await adminService
					.getTransaction()
					.then((res) => setAdminTransactions(res.data.transactions));
			} catch (error) {
				console.log(error);
			}
		};
		fetch();
		setLoading(false);
	}, []);

	const [orderItem, setOrderItem] = useState([]);
	useEffect(() => {
		const fetch = async () => {
			try {
				await adminService
					.getOrder()
					.then((res) => setOrderItem(res.data.orders));
			} catch (error) {
				console.log(error);
			}
		};
		fetch();
	}, []);

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
				providerPics,
				myOrderImages,
				otherOrderImages,
				getTransactionByUserId,
				initialLoading,
				orders,
				updateOrder,
				getMyOrders,
				transactions,
				pendingUser,
				loading,
				providerUser,
				userDetails,
				adminTransactions,
				orderItem
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
