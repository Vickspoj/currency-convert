// Import the 'useQueries' function from '@tanstack/react-query'
import { useQueries } from '@tanstack/react-query';
// Import the 'useState' hook from React
import { useState } from 'react';
// Import API functions to fetch rate and symbol data
import { fetchRates, fetchSymbols } from '../api/fetchData';

// Custom hook 'useCurrency' to manage currency conversion data and state
export const useCurrency = () => {
  // Local states for amount and selected currencies
  const [amount, setAmount] = useState(1);
  const [currencyOne, setCurrencyOne] = useState('USD');
  const [currencyTwo, setCurrencyTwo] = useState('VES');

  // Use 'useQueries' to perform multiple queries in parallel
  const [ratesData, symbolsData] = useQueries({
    queries: [
      {
        // Query to fetch exchange rates for a specific base currency
        queryKey: ['rates', currencyOne],
        queryFn: () => fetchRates(currencyOne),
        staleTime: Infinity,
        select: ({ rates, date, timestamp }) => {
          return { rates, date, timestamp };
        },
        keepPreviousData: true,
      },
      {
        // Query to fetch currency symbols
        queryKey: ['symbols'],
        queryFn: fetchSymbols,
        staleTime: Infinity,
        select: ({ symbols }) => symbols,
      },
    ],
  });

  // Check if any of the queries is loading or has encountered an error
  const isLoading = [ratesData, symbolsData].some((query) => query.isLoading);
  const isError = [ratesData, symbolsData].some((query) => query.isError);

  // Calculate the converted amount using exchange rates
  const convertedAmount = (ratesData.data?.rates[currencyTwo] * amount).toFixed(2);

  // Format the date and time from the obtained data
  const date = new Date(ratesData.data?.date).toLocaleDateString();
  const time = new Date(ratesData.data?.timestamp).toLocaleTimeString('en-US');

  // Generate a currency list from the symbol data
  const currencyList = symbolsData.data ? Object.keys(symbolsData.data) : {};

  // Return the necessary data and functions for currency conversion
  return {
    amount,
    setAmount,
    currencyOne,
    setCurrencyOne,
    currencyTwo,
    setCurrencyTwo,
    ratesData,
    symbolsData,
    isLoading,
    isError,
    convertedAmount,
    date,
    time,
    currencyList,
  };
};
