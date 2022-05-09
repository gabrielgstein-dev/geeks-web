import { validator } from 'access';
import { RequestError } from 'access/error';
import axios from 'axios';

interface PostBase {
  url: string;
  auth?: boolean;
  headers?: any;
  data: any;
}

export const postBase = async ({
  url,
  auth = true,
  data,
  headers,
}: PostBase) => {
  try {
    const requestHeader = {
      ...headers,
    };

    if (auth) {
      const accessToken = validator.getLocalToken();
      requestHeader.Authentication = `Bearer ${accessToken}`;
    }

    const response = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BASE_URL}${url}`,
      headers: requestHeader,
      data,
    });

    return response;
  } catch (error) {
    if (error.response?.status === 403) {
      localStorage.setItem('token', '');
      window.location.href = '/signin';
    }

    throw new RequestError(error.response?.status || 300);
  }
};
