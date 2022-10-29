import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthContextProvider from "./context/AuthContext";
import LoadingContextProvider from "./context/LoadingContext";
import OrderContextProvider from "./context/OrderContext";
import ProfileContextProvider from "./context/ProfileContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <LoadingContextProvider>
      <ProfileContextProvider>
        <OrderContextProvider>
          <AuthContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AuthContextProvider>
        </OrderContextProvider>
      </ProfileContextProvider>
    </LoadingContextProvider>
);


reportWebVitals();
