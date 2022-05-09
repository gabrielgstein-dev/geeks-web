import { validator } from 'access';
import { AdminUser, AuthenticationResponse } from 'model/dataview';
import { toast } from 'react-toastify';
import { api } from 'services';

export const authenticate = async (
  value: AdminUser,
): Promise<AuthenticationResponse> => {
  try {
    const response = await api.user.postAuthenticateUser(value);
    validator.setLocalStorageUserToken(response.access_token);

    return response;
  } catch (error) {
    toast.error(error.message);
    return {} as AuthenticationResponse;
  }
};
