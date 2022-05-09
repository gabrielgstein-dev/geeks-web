import React, { useState } from 'react';
import { Input } from '@mui/material';

import { Button } from 'access/mui';

import { AdminUser } from 'model/dataview';
import * as S from './AuthForm.style';

const changePassoword = (
  value: string,
  setValue: React.Dispatch<React.SetStateAction<AdminUser>>,
) => {
  setValue((prevState) => ({
    ...prevState,
    password: value,
  }));
};

const changeUsername = (
  value: string,
  setValue: React.Dispatch<React.SetStateAction<AdminUser>>,
) => {
  setValue((prevState) => ({
    ...prevState,
    username: value,
  }));
};

const initialValue: AdminUser = {
  username: '',
  password: '',
};

interface LoginPageProps {
  setToken: (userinfo: AdminUser) => void;
}

const AuthForm: React.FC<LoginPageProps> = ({ setToken }) => {
  const [authForm, setAuthForm] = useState<AdminUser>(initialValue);
  return (
    <S.Container>
      <S.Authbox>
        <S.FormGroup>
          <S.Label>Usuário</S.Label>
          <Input
            fullWidth
            onChange={(evt) => changeUsername(evt.target.value.trim(), setAuthForm)}
            value={authForm.username}
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>Senha</S.Label>
          <Input
            fullWidth
            type="password"
            onChange={(evt) => changePassoword(evt.target.value.trim(), setAuthForm)}
            value={authForm.password}
          />
        </S.FormGroup>

        <S.FormGroup>
          <Button fullWidth variant="contained" onClick={() => setToken(authForm)}>Entrar</Button>
        </S.FormGroup>
      </S.Authbox>
    </S.Container>
  );
};

export { AuthForm };
export default AuthForm;
