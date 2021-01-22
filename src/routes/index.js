import React, { useContext } from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { UsuarioContext } from '../context/user';

export default function Routes() {

  const { user } = useContext(UsuarioContext);

  return (
    <div>
      {
        user ? 
          <AppRoutes />
          :
          <AuthRoutes />
      }
    </div>

  )
};