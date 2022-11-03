const ACCESS_TOKEN = "ACCESS_TOKEN";

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const addAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token);

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

const BOOKING = "BOOKING";

export const getBooking = () => localStorage.getItem(BOOKING);
export const addBooking = (booking) => localStorage.setItem(BOOKING, booking);
export const removeBooking = () => localStorage.removeItem(BOOKING);

const SELECTED = "SELECTED";
export const getSelected = () => localStorage.getItem(SELECTED);
export const addSelected = (selected) =>
  localStorage.setItem(SELECTED, selected);
export const removeSelected = () => localStorage.removeItem(SELECTED);
