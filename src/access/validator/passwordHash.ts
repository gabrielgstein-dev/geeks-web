export const setLocalStorageUserToken = (accessToken: string): void => {
  localStorage.setItem('token', accessToken);
};

export const getLocalToken = (): string => {
  const localHash = localStorage.getItem('token');
  return localHash || '';
};
