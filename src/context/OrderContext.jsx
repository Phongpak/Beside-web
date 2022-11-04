import React, { createContext, useContext, useEffect, useState } from "react";
import * as userService from "../api/userApi";
import * as orderService from "../api/orderApi";
import {
  addBooking,
  getBooking,
  addSelected,
  getSelected
} from "../utilities/localStorage";

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [book, setBook] = useState({
    location: "",
    appointmentDate: "",
    fromTime: "",
    toTime: "",
    lat: "",
    lng: "",
    description: ""
  });
  const [selected, setSelected] = useState(null);
  const [providers, setProviders] = useState([]);
  const handleBook = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
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
  useEffect(() => {
    const fetchProvider = async () => {
      try {
        if (JSON.parse(getBooking())) {
          setBook(JSON.parse(getBooking()));
        }
        if (JSON.parse(getSelected())) {
          setSelected(JSON.parse(getSelected()));
        }

        const res = await userService.getProviderByLatLng(
          selected.lat,
          selected.lng,
          5,
          book
        );
        setProviders(res.data.finalAvailableProviders);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProvider();
    console.log(book);
  }, [book.location]);

  const handleSearchProvider = () => {
    getProviderByLatLng();
    addBooking(JSON.stringify(book));
    addSelected(JSON.stringify(selected));
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
        createOrder
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
