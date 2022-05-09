import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@mui/material';
import { i18nLanguages } from 'access/i18n/contracts';

import { Container } from './locale.style';

const Locale: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <Container>
      <Button onClick={() => i18n.changeLanguage(i18nLanguages.ENGLISH)}>
        English
      </Button>

      <Button onClick={() => i18n.changeLanguage(i18nLanguages.PORTUGUESE)}>
        Português
      </Button>
    </Container>
  );
};

export default Locale;
