import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { AboutLayout, AppLayout } from './layouts';
import { Contact, LandingPage, Login, PageNotFound } from './pages';
import { Faqs } from './components';

import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="about" element={<AboutLayout />}>
        <Route path="faqs" element={<Faqs />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
