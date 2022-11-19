import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/v4`,
  headers: {
    authentication: '',
  },
});

instance.interceptors.request.use(config => {
  const customConfig = config;
  customConfig.headers = {
    'Content-Type': 'application/json',
  };

  return customConfig;
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
        console.log('unauthorized')
    }
    return Promise.reject(error);
  }
);

export default instance;
