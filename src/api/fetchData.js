// Import the 'axios' module from the relative path '../lib/axio'
import { axios } from '../lib/axio';

// Asynchronous function to fetch exchange rates based on a given base currency
export const fetchRates = async (currencyOne) => {
  // Perform a GET request using axios to fetch data
  const { data } = await axios.get(
    `/latest?base=${currencyOne}&apikey=${process.env.REACT_APP_API_KEY}`
  );
  // Return the data obtained from the request
  return data;
};

// Asynchronous function to fetch currency symbols
export const fetchSymbols = async () => {
  // Perform a GET request using axios to fetch currency symbol data
  const { data } = await axios.get(
    `/symbols?apikey=${process.env.REACT_APP_API_KEY}`
  );
  // Return the data obtained from the request
  return data;
};
