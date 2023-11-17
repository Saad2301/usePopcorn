import Axios from 'axios';
const KEY = '29c5cda0';
//const baseURL=`http://www.omdbapi.com/?apikey=${KEY}&`
const baseURL='https://64b77dd721b9aa6eb0782d3f.mockapi.io';
const axiosInterceptor = Axios.create({
  baseURL, // Set your base URL here
});

axiosInterceptor.interceptors.request.use((request) => {
  request.headers.PersonName = 'Saad';
  return request;
});

axiosInterceptor.interceptors.response.use((response) => {
  return response;
});

export default function apiCaller({
  method = 'get',
  url = '',
  params = {},
  data = {},
}) {
  return axiosInterceptor({
    method,
    url, // The full URL
    params, // Add query parameters here
    data,
    responseType: 'json', // Set responseType to 'json'
    headers: {
      'Content-Type': 'application/json', // Add this line
    },
  });
}
