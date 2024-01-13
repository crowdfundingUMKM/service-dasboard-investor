import axios from 'axios';
import Cookies from 'js-cookie';

export default async function callAPI({
  url, method, data, token, isFormData,
}) {
  let headers = {};
  // if (serverToken) {
  //   headers = {
  //     Authorization: `Bearer ${serverToken}`,
  //   };
  // } else 
  if (token) {
    const tokenCookies =Cookies.get('token');
    if (tokenCookies) {
      const jwtToken = tokenCookies;
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }

  try {
    const response = await axios({
      url,
      method,
      data,
      headers,
    });

    const apiResponse = {
      meta: response.data.meta,
      data: response.data.data,
    };

    return apiResponse;
  } catch (error) {
    const response = error.response;

    if (response && response.status > 300) {
      const apiErrorResponse = {
        meta: {
          message: response.message,
          code: response.code,
          status: response.status,
        },
        data: response.errors,
      };

      return apiErrorResponse;
    }
    // error from status server
    if (response && response.status == 422) {
      const apiErrorResponse = {
        meta: {
          message: response.message,
          code: response.code,
          status: response.status,
        },
        data: response.data.errors,
      };

      return apiErrorResponse;
    }

    throw error;
  }
}
