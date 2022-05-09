import { validator } from 'access';
import { toast } from 'react-toastify';
import { atom, selector } from 'recoil';

import { initialUserState } from './user.contracts';

export const userInfo = atom({
  key: 'userState',
  default: { ...initialUserState },
});

export const userHasAuthenticated = selector({
  key: 'userHasAuthenticated',
  get: async ({ get }) => {
    try {
      const { token } = get(userInfo);
      const localHash = validator.getLocalToken();

      if (!localHash) {
        return false;
      }

      if (localHash && !token) {
        return true;
      }

      return token === localHash;
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  },
});
