import React from 'react';
import GeekLogo from 'assets/static/geek-logo.png';

import { AuthForm } from 'framework/molecules';

import { authenticate } from 'business/user';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { recoilUser } from 'access/recoil';
import { AdminUser } from 'model/dataview';
import { useNavigate } from 'react-router-dom';

import * as S from './Login.style';

const Login: React.FC = () => {
  const setUserToken = useSetRecoilState(recoilUser.userInfo);
  const navigate = useNavigate();

  const registerPassword = async (password: AdminUser): Promise<void> => {
    try {
      const { access_token } = await authenticate(password);

      setUserToken((currentValue) => ({
        ...currentValue,
        token: access_token,
      }));

      navigate('/dashboard', { replace: true });
    } catch (error) {
      toast.error(error.message);
      console.error(error);

      navigate('/signin', { replace: true });
    }
  };

  return (
    <S.Container>
      <S.PrevenitLogo src={GeekLogo} alt="" />
      <S.AuthContainer>
        <AuthForm setToken={registerPassword} />
      </S.AuthContainer>
    </S.Container>
  );
};

export { Login };
export default Login;
