import { Outlet } from 'react-router-dom';
import { AppFooter, AppNav } from '../../layouts';

import './AppLayout.css';

const AppLayout = () => {
  return (
    <div className="lendo mt-1">
      <AppNav />
      <main className="lendo__content-body">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
};

export default AppLayout;
