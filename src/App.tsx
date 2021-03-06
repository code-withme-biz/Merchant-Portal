import { FC, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SystemLayout } from '~/components/templates';

const CobrandList = lazy(() => import('./pages/client/CobrandList'));
const Dashboard = lazy(() => import('./pages/system/Dashboard'));
const Merchants = lazy(() => import('./pages/system/Merchants'));
const Messages = lazy(() => import('./pages/system/Messages'));
const Reports = lazy(() => import('./pages/system/Reports'));
const Settings = lazy(() => import('./pages/system/Settings'));
const NotFound = lazy(() => import('./pages/generic/NotFound'));

export const App: FC = () => (
  <Suspense fallback={<div>please wait...</div>}>
    <Routes>
      <Route path="/" element={<SystemLayout />}>
        <Route path="cobrands" element={<CobrandList />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="merchants" element={<Merchants />} />
        <Route path="messages" element={<Messages />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);
