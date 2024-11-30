import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,});

// we need to crate a  get request
export const currencyConverter = (fromCurrency, toCurrency, amount) => {
  return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};
