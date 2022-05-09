import { RequestError } from 'access/error';
import { AuthenticationResponse, AdminUser } from 'model/dataview';
import { postBase } from '../base';

export const postAuthenticateUser = async (
  info: AdminUser,
): Promise<AuthenticationResponse> => {
  const bodyFormData = new FormData();

  bodyFormData.append('username', info.username);
  bodyFormData.append('password', info.password);

  const { data, status } = await postBase({
    url: 'login',
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: false,
  });

  if (status >= 300) {
    throw new RequestError(status);
  }

  return data;
};
