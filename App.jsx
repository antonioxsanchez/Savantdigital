import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home     from './pages/Home';
import Services from './pages/Services';
import Classes  from './pages/Classes';
import Gallery  from './pages/Gallery';
import Book     from './pages/Book';
import Contact  from './pages/Contact';

const PAGES = {
  home:     Home,
  services: Services,
  classes:  Classes,
  gallery:  Gallery,
  book:     Book,
  contact:  Contact,
};

export default function App() {
  const [page, setPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  const PageComponent = PAGES[page] || Home;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar page={page} setPage={setPage} />
      <main style={{ flex: 1 }}>
        <PageComponent setPage={setPage} />
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}
