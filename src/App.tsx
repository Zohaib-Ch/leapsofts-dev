import { Outlet } from 'react-router';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';
import ContactModal from './components/ContactModal/ContactModal';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <ContactModal />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
