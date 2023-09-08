import { Outlet } from 'react-router-dom';
import { AppFooter, AppNav } from '../../layouts';

import { LendoApp, LendoContent } from '../../components/UI/Tag/Tag';
import './AppLayout.css';

const AppLayout = () => (
  <LendoApp className="lendo mt-1">
    <AppNav />
    <LendoContent className="lendo__content-body">
      <Outlet />
    </LendoContent>
    <AppFooter />
  </LendoApp>
);

export default AppLayout;
