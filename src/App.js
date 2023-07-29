import './App.scss';
import { AppFooter, AppNav } from './components';
import { LandingPage } from './pages';

const App = () => {
  return (
    <div className='lendo'>
      <AppNav />
      <LandingPage />
      <AppFooter />
    </div>
  );
}

export default App;
