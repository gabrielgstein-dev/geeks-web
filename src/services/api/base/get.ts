import { validator } from 'access';
import { RequestError } from 'access/error';
import axios from 'axios';

interface PostBase {
  url: string;
  auth?: boolean;
  headers?: any;
}

export const getBase = async ({ url, auth = true, headers }: PostBase) => {
  try {
    const requestHeader = {
      Authentication: '',
      ...headers,
    };

    if (auth) {
      const accessToken = validator.getLocalToken();
      requestHeader.Authorization = `Bearer ${accessToken}`;
    }

    const response = await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_BASE_URL}${url}`,
      headers: requestHeader,
    });

    if (response.status >= 300) {
      throw new RequestError(response.status);
    }
    return response;
  } catch (error) {
    console.log(error);

    if (error.response?.status === 403) {
      localStorage.setItem('token', '');
      window.location.href = '/signin';
    }

    throw new RequestError(error.response?.status || 300);
  }
};
