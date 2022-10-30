import React, { createContext, useContext, useState } from "react";
import * as userService from "../api/userApi";

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [book, setBook] = useState({
    location: "",
    appointmentDate: "",
    fromTime: "",
    toTime: "",
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
