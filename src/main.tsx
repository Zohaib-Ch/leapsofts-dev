import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import './index.css';
import { ContactModalProvider } from './context/ContactModalContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactModalProvider>
      <RouterProvider router={router} />
    </ContactModalProvider>
  </StrictMode>
);
