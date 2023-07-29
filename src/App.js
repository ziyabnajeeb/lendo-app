import './App.scss';
import { AppFooter, AppNav } from './components';
import { LandingPage } from './pages';

function App() {
  return (
    <div className='App'>
      <AppNav />
      <LandingPage />
      <AppFooter />
    </div>
  );
}

export default App;
