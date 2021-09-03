import axios from 'axios';

const HttpService = axios.create({
  baseURL: `${process.env['VUE_APP_ROOT_API_URL']}api/v1/`, // ROOT API's URL,
  timeout: 10000,
});

export default HttpService;
