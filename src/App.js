import { AppFooter, AppNav, HeaderSection } from './components';
import { LandingPage } from './pages';
import './App.scss';

const App = () => (
  <div className="lendo mt-1">
    <AppNav />
    <HeaderSection />
    <LandingPage />
    <AppFooter />
  </div>
);

export default App;
