import Axios from 'axios';

// Create an instance of Axios with a predefined base URL for the apilayer Fixer API
export const axios = Axios.create({
  baseURL: 'https://api.apilayer.com/fixer',
});
