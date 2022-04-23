import axios from 'axios';

export default axios.create({
  baseURL: 'https://thronesapi.com',
  timeout: 10000,
});
