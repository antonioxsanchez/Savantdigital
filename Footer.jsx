import { GOLD, BG2, BORDER, MUTED, WHITE } from '../theme';
import { GoldLine, Btn } from './UI';
import { PhoneIcon, MailIcon } from './Icons';

const SERVICES = ['Tech Classes', 'Tech Help', 'Security & Setup', 'PC Builds', 'Hardware Upgrades', 'Design Services'];
const LINKS    = [['home','Home'],['classes','Classes'],['gallery','Gallery'],['book','Book Appointment'],['contact','Contact']];

export default function Footer({ setPage }) {
  const go = (id) => { setPage(id); window.scrollTo(0, 0); };

  const linkStyle = {
    fontSize: 12, color: MUTED, marginBottom: 9,
    cursor: 'pointer', transition: 'color 0.2s', display: 'block',
  };

  return (
    <footer style={{ background: BG2, borderTop: `1px solid ${BORDER}` }}>
      <GoldLine />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '52px 56px 32px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr', gap: 48, marginBottom: 44 }}>

          {/* Brand col */}
          <div>
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: '0.2em', color: WHITE }}>SAVANT</div>
              <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.32em', color: GOLD, marginTop: 3 }}>DIGITAL CO</div>
            </div>
            <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.75, marginBottom: 6 }}>Design · Build · Optimize</p>
            <p style={{ fontSize: 11.5, color: MUTED, lineHeight: 1.8 }}>
              Professional technology education, support, custom PC builds, and design services.
            </p>
          </div>

          {/* Services col */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: GOLD, marginBottom: 16, textTransform: 'uppercase' }}>
              Services
            </div>
            {SERVICES.map(s => (
              <span
                key={s}
                style={linkStyle}
                onClick={() => go('services')}
                onMouseEnter={e => e.currentTarget.style.color = GOLD}
                onMouseLeave={e => e.currentTarget.style.color = MUTED}
              >{s}</span>
            ))}
          </div>

          {/* Quick links col */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: GOLD, marginBottom: 16, textTransform: 'uppercase' }}>
              Quick Links
            </div>
            {LINKS.map(([id, label]) => (
              <span
                key={id}
                style={linkStyle}
                onClick={() => go(id)}
                onMouseEnter={e => e.currentTarget.style.color = GOLD}
                onMouseLeave={e => e.currentTarget.style.color = MUTED}
              >{label}</span>
            ))}
          </div>

          {/* Contact col */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: GOLD, marginBottom: 16, textTransform: 'uppercase' }}>
              Contact
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontSize: 12, color: MUTED }}>
              <span style={{ color: GOLD }}><PhoneIcon /></span>
              929-707-1951
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, fontSize: 12, color: MUTED }}>
              <span style={{ color: GOLD }}><MailIcon /></span>
              savantdigitalco@gmail.com
            </div>
            <Btn onClick={() => go('book')} style={{ padding: '10px 20px', fontSize: 10 }}>
              Free Consultation
            </Btn>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: `1px solid ${BORDER}`,
          paddingTop: 20,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>
            © 2025 Savant Digital Co. All rights reserved.
          </span>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>
            Founded by Antonio Sanchez
          </span>
        </div>

      </div>
    </footer>
  );
}
