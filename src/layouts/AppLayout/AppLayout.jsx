import { Outlet } from 'react-router-dom';
import { AppFooter, AppNav } from '../../layouts';

import './AppLayout.css';

const AppLayout = () => (
  <LendoApp>
    <AppNav />
    <LendoContent>
      <Outlet />
    </LendoContent>
    <AppFooter />
  </LendoApp>
);

export default AppLayout;

const LendoApp = ({ children }) => (
  <div className="lendo mt-1">{children}</div>
);
const LendoContent = ({ children }) => (
  <main className="lendo__content-body">{children}</main>
);
