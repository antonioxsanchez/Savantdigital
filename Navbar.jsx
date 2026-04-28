import { useState, useEffect } from 'react';
import { GOLD, BG, BORDER, WHITE } from '../theme';
import { Btn } from './UI';

const LINKS = [
  { id: 'home',     label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'classes',  label: 'Classes' },
  { id: 'gallery',  label: 'Gallery' },
  { id: 'book',     label: 'Book' },
  { id: 'contact',  label: 'Contact' },
];

export default function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => { setPage(id); window.scrollTo(0, 0); };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(22,22,22,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? `1px solid ${BORDER}` : 'none',
      transition: 'all 0.3s',
    }}>
      {!scrolled && (
        <div style={{
          height: 2,
          background: `linear-gradient(90deg, transparent, ${GOLD}, #f0d98a, ${GOLD}, transparent)`,
        }} />
      )}

      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 56px',
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Brand */}
        <div
          onClick={() => go('home')}
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: '0.2em', color: WHITE, lineHeight: 1 }}>
            SAVANT
          </div>
          <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.32em', color: GOLD, marginTop: 2 }}>
            DIGITAL CO
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {LINKS.map(({ id, label }) => (
            <span
              key={id}
              onClick={() => go(id)}
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: page === id ? GOLD : 'rgba(255,255,255,0.55)',
                cursor: 'pointer',
                transition: 'color 0.2s',
                borderBottom: page === id ? `1px solid ${GOLD}` : '1px solid transparent',
                paddingBottom: 2,
              }}
              onMouseEnter={e => { if (page !== id) e.currentTarget.style.color = 'rgba(255,255,255,0.9)'; }}
              onMouseLeave={e => { if (page !== id) e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
            >{label}</span>
          ))}
          <Btn gold onClick={() => go('book')} style={{ padding: '10px 22px', fontSize: 10 }}>
            Book Now
          </Btn>
        </div>

      </div>
    </nav>
  );
}
