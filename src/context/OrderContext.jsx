import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [book, setBook] = useState({});
  const handleBook = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  return (
    <OrderContext.Provider value={{ book, setBook }}>
      {children}
    </OrderContext.Provider>
  );
}
export const useOrder = () => {
  return useContext(OrderContext);
};

export default OrderContextProvider;
