import axios from './axios';

export const getCapsules = data => {
  return axios({
    method: 'POST',
    url: '/capsules/query',
    data,
  });
};

export const getCapsulesDetails = id => {
    return axios({
      method: 'GET',
      url: `/capsules/${id}`,
    });
  };
