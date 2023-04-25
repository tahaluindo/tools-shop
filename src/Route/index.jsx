import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Loader from '../Layout/Loader';
import LayoutRoutes from '../Route/LayoutRoutes';

import Login from '../__pages/auth/Login';
import Register from '../__pages/auth/Register';
import AdminRegister from '../__pages/auth/AdminRegister';
import ForgetPwd from '../__pages/auth/ForgetPwd';

import PrivateRoute from './PrivateRoute';
import ReactTable from '../__components/ReactTable';

const Routers = () => {
  return (
    <BrowserRouter basename={'/'}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path={`/`} element={<Navigate to={`/login`} />} />
          <Route path={'/'} element={<PrivateRoute />}>
            <Route path={`/*`} element={<LayoutRoutes />} />
          </Route>
          <Route exact path={`/login`} element={<Login />} />
          <Route exact path={`/register`} element={<Register />} />
          <Route exact path={`/admin/register`} element={<AdminRegister />} />
          <Route exact path={`/forget_password`} element={<ForgetPwd />} />
          <Route exact path={`/table`} element={<ReactTable />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routers;
