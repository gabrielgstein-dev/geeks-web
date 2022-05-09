import { recoilUser } from 'access/recoil';
import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

interface ProtectRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectRouteProps> = ({ children }) => {
  const auth = useRecoilValue(recoilUser.userHasAuthenticated);

  // if (!auth) {
  //   return <Navigate to="/signin" replace />;
  // }

  return <>{children}</>;
};

export { ProtectedRoute };
