import axios from 'axios';
import {BASE_URL} from '../../utils/constant';

const request = async options => {
  return await axios(options).catch(function (error) {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 403) {
      }
      return {
        data: {
          statusCode: error.response.status,
          data: error.response.data,
          status: false,
        },
      };
    } else if (error.request) {
      return {
        data: {
          status: false,
          statusCode: 0,
          data: 'The request was made but no response was received',
        },
      };
    } else {
      return {
        data: {
          status: false,
          statusCode: 0,
          data: 'Something happened in setting up the request that triggered an Error',
        },
      };
    }
  });
};

export const fetchUserList = async (pageNo = 1) => {
  const url = `${BASE_URL}/api/?results=10&page=${pageNo}`;

  const options = {
    url: url,
    method: 'GET',
    responseType: 'json',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return (await request(options)).data;
};
