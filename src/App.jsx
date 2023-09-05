import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppFooter, AppNav } from './components';
import { About, LandingPage } from './pages';
import './App.css';

const App = () => (
  <div className="lendo mt-1">
    <BrowserRouter>
      <AppNav />
      <main className="lendo__content-body">
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
      <AppFooter />
    </BrowserRouter>
  </div>
);

export default App;
