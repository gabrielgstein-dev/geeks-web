import { atom } from 'recoil';

import { initialLoadingState } from './loading.contracts';

export const loadingState = atom({
  key: 'loadingState',
  default: { ...initialLoadingState },
});
