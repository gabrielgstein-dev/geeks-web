import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import {
  ZIndex,
  FontSize,
  Opacity,
  Radius,
  Padding,
  Shadow,
  Colors,
  FontWeight,
} from 'framework/system/theme';
import { RecoilRoot, useRecoilValue } from 'recoil';
import GlobalStyles from 'framework/system/globalStyles';

import { Login } from 'framework/pages';
import { ToastContainer } from 'react-toastify';
// import 'access/mirage/createServer';
import { LoadSpinner, ProtectedRoute } from 'framework/molecules';

import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';

import 'react-grid-layout/css/styles.css';
import { recoilUser } from 'access/recoil';

const theme: DefaultTheme = {
  colors: Colors,
  zIndex: ZIndex,
  fontSize: FontSize,
  opacity: Opacity,
  padding: Padding,
  radius: Radius,
  shadow: Shadow,
  fontWeight: FontWeight,
};

const InitialPage: React.FC = () => {
  const auth = useRecoilValue(recoilUser.userHasAuthenticated);
  return auth ? (
    <Navigate to="dashboard" />
  ) : (
    <Navigate to="signin" replace />
  );
};

const App: React.FC = () => (
  <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      theme="colored"
      draggable
      pauseOnHover
    />
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <React.Suspense fallback={<LoadSpinner />}>
            <Routes>
              <Route path="/" element={<InitialPage />} />
              <Route path="/signin" element={<Login />} />
              <Route
                path="/dashboard"
                element={(
                  <ProtectedRoute>
                    <div>Dash</div>
                  </ProtectedRoute>
                  )}
              />
            </Routes>
          </React.Suspense>
        </RecoilRoot>
      </ThemeProvider>
    </BrowserRouter>
  </>
);

export default App;
