import { AppFooter, AppNav } from './components';
import { LandingPage } from './pages';
import './App.scss';

const App = () => {
  return (
    <div className='lendo mt-1'>
      <AppNav />
      <LandingPage />
      <AppFooter />
    </div>
  );
}

export default App;
