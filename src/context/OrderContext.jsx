import React, { createContext, useContext, useState } from "react";
import * as userService from "../api/userApi";
import * as orderService from "../api/orderApi";

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [book, setBook] = useState({
    location: "",
    appointmentDate: "",
    fromTime: "",
    toTime: "",
    lat: "",
    lng: "",
    description: "",
  });
  const [selected, setSelected] = useState(null);
  const [providers, setProviders] = useState([]);
  const handleBook = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSearchProvider = () => {
    getProviderByLatLng();
  };

  const getProviderByLatLng = async () => {
    try {
      let { location, ...order } = book;
      const res = await userService.getProviderByLatLng(
        selected.lat,
        selected.lng,
        5,
        order
      );
      setProviders(res.data.finalAvailableProviders);
    } catch (err) {
      console.log(err);
    }
  };

  const createOrder = async (input) => {
    const res = await orderService.createOrder(input);
  };

  return (
    <OrderContext.Provider
      value={{
        book,
        setBook,
        getProviderByLatLng,
        handleBook,
        selected,
        setSelected,
        handleSearchProvider,
        providers,
        createOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
export const useOrder = () => {
  return useContext(OrderContext);
};

export default OrderContextProvider;
